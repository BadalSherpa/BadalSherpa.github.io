"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { gsap, useGSAP } from "@/lib/gsap";
import { profile, stats } from "@/lib/data";
import SplitText from "../SplitText";
import Magnetic from "../Magnetic";
import { scrollToTarget } from "../SmoothScroll";

/** Stagger index for the CSS entrance animation. */
const at = (i: number) => ({ "--i": i }) as CSSProperties;

function RoleTicker() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % profile.roles.length), 2600);
    return () => clearInterval(id);
  }, []);
  return (
    <span className="relative block h-[1.6em] w-full overflow-hidden">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={i}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-0 whitespace-nowrap text-white"
        >
          {profile.roles[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default function Hero() {
  const root = useRef<HTMLElement>(null);
  const content = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // The headline/blocks entrance is pure CSS (globals.css) so it starts at
      // first paint. JS only adds desktop enhancements on top.
      const desktop = window.matchMedia("(pointer: fine) and (min-width: 768px)").matches;
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (!desktop || reduced) return;

      // Count the stats up, but only if we hydrated while the intro screen still
      // covers them — otherwise visitors would see the numbers jump back to 0.
      if (performance.now() < 1000) {
        gsap.utils.toArray<HTMLElement>(".stat-num").forEach((el) => {
          const target = Number(el.dataset.value);
          const obj = { v: 0 };
          gsap.to(obj, {
            v: target,
            duration: 2,
            delay: 1.6,
            ease: "power3.out",
            onUpdate: () => {
              el.textContent = Math.round(obj.v).toLocaleString("en-US");
            },
          });
        });
      }

      // Scrubbed exit: the hero recedes as the next section arrives.
      gsap.to(content.current, {
        yPercent: -12,
        scale: 0.94,
        opacity: 0.15,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
      });

      // Pointer spotlight.
      const el = root.current!;
      const setX = gsap.quickTo(el, "--mx", { duration: 0.6, ease: "power3" });
      const setY = gsap.quickTo(el, "--my", { duration: 0.6, ease: "power3" });
      const move = (e: PointerEvent) => {
        const r = el.getBoundingClientRect();
        setX(((e.clientX - r.left) / r.width) * 100);
        setY(((e.clientY - r.top) / r.height) * 100);
      };
      el.addEventListener("pointermove", move);
      return () => el.removeEventListener("pointermove", move);
    },
    { scope: root }
  );

  return (
    <section
      id="top"
      ref={root}
      className="relative flex min-h-[100svh] items-end overflow-hidden px-5 pb-10 pt-32 sm:px-8 [--mx:50] [--my:40]"
    >
      {/* Aurora */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="orb orb-violet orb-float-a -left-[25%] -top-[30%] h-[90vmax] w-[90vmax]" />
        <div className="orb orb-pink orb-float-b -right-[30%] -top-[10%] h-[80vmax] w-[80vmax]" />
        <div className="orb orb-amber orb-float-c -bottom-[45%] left-[10%] h-[75vmax] w-[75vmax]" />
        <div
          className="absolute inset-0 hidden opacity-70 md:block"
          style={{
            background:
              "radial-gradient(600px circle at calc(var(--mx) * 1%) calc(var(--my) * 1%), rgba(255,255,255,0.09), transparent 45%)",
          }}
        />
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink" />
      </div>

      <div ref={content} className="relative mx-auto w-full max-w-6xl">
        <p className="hero-fade mb-4 font-mono text-sm text-muted" style={at(0)}>
          Hi, I&apos;m {profile.name} —
        </p>

        <h1 className="text-[clamp(2.9rem,9.2vw,8.6rem)] font-medium leading-[0.92] tracking-[-0.045em]">
          <SplitText text="Crafting fast," className="block" />
          <span className="block">
            <span className="inline-block overflow-hidden pb-[0.12em] pr-[0.08em] align-bottom">
              <span
                className="split-char inline-block font-serif font-normal italic tracking-[-0.02em] text-gradient"
                style={at(14)}
              >
                elegant
              </span>
            </span>{" "}
            <SplitText text="interfaces" offset={16} />
          </span>
          <SplitText text="that scale." className="block text-white/40" offset={27} />
        </h1>

        <div className="mt-10 grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-end">
          <div>
            <p className="hero-fade max-w-xl text-lg leading-relaxed text-muted" style={at(1)}>
              <RoleTicker />
              6+ years shipping <span className="text-white">production-grade products</span> for{" "}
              <span className="text-white">large enterprises and high-scale platforms</span> — from React and Next.js
              front ends to Node.js APIs and databases.
            </p>
            <div className="hero-fade mt-8 flex flex-wrap items-center gap-3" style={at(2)}>
              <Magnetic>
                <button
                  type="button"
                  onClick={() => scrollToTarget("#work")}
                  className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-violet via-pink to-amber p-px"
                >
                  <span className="inline-flex items-center gap-3 rounded-full bg-ink px-6 py-3.5 text-sm font-medium transition-colors duration-500 group-hover:bg-transparent group-hover:text-ink">
                    See selected work
                    <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
                  </span>
                </button>
              </Magnetic>
              <Magnetic>
                <button
                  type="button"
                  onClick={() => scrollToTarget("#contact")}
                  className="rounded-full border border-white/15 px-6 py-3.5 text-sm text-white/80 transition-colors hover:border-white/40 hover:text-white"
                >
                  Let&apos;s talk
                </button>
              </Magnetic>
            </div>
          </div>

          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10">
            {stats.map((s, i) => (
              <div key={s.label} className="hero-fade flex flex-col bg-ink/90 p-5" style={at(3 + i)}>
                <dt className="order-2 mt-1 text-xs leading-snug text-muted">{s.label}</dt>
                <dd className="text-3xl font-medium tracking-tight">
                  <span className="stat-num tabular-nums" data-value={s.value}>
                    {s.value.toLocaleString("en-US")}
                  </span>
                  <span className="text-gradient">{s.suffix}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <button
          type="button"
          onClick={() => scrollToTarget("#about")}
          className="hero-fade mt-12 hidden items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-muted md:inline-flex"
          style={at(7)}
        >
          <span className="relative h-10 w-6 rounded-full border border-white/20">
            <span className="absolute left-1/2 top-2 h-2 w-0.5 -translate-x-1/2 animate-bounce rounded bg-white/70" />
          </span>
          Scroll to explore
        </button>
      </div>
    </section>
  );
}
