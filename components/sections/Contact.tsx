"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { gsap, useGSAP } from "@/lib/gsap";
import { nav, profile, socials } from "@/lib/data";
import Magnetic from "../Magnetic";
import { scrollToTarget } from "../SmoothScroll";

function LocalTime() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Kolkata",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return <span className="tabular-nums">{time || "--:--:--"}</span>;
}

export default function Contact() {
  const root = useRef<HTMLElement>(null);
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.from(".contact-line", {
        yPercent: 100,
        ease: "none",
        stagger: 0.12,
        scrollTrigger: { trigger: root.current, start: "top 85%", end: "top 30%", scrub: 1 },
      });
    },
    { scope: root }
  );

  return (
    <section id="contact" ref={root} className="relative overflow-hidden px-5 pt-16 sm:px-8 md:pt-24">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="orb orb-violet bottom-[-45%] left-[-15%] h-[85vmax] w-[85vmax]" />
        <div className="orb orb-pink bottom-[-50%] left-[20%] h-[85vmax] w-[85vmax]" />
        <div className="orb orb-amber bottom-[-55%] right-[-20%] h-[80vmax] w-[80vmax]" />
        <div className="bg-grid absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_40%,transparent)]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <p className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-muted">
          <span className="text-gradient">07</span>
          <span className="h-px w-10 bg-fg/20" />
          Contact
        </p>

        <h2 className="text-[clamp(3rem,11vw,10rem)] font-medium leading-[0.9] tracking-[-0.05em]">
          <span className="block overflow-hidden pb-[0.08em]">
            <span className="contact-line block">Let&apos;s build</span>
          </span>
          <span className="block overflow-hidden pb-[0.12em] pr-[0.08em]">
            <span className="contact-line block font-serif font-normal italic tracking-[-0.02em] text-gradient">
              something great.
            </span>
          </span>
        </h2>

        <div className="mt-14 grid gap-12 md:grid-cols-[1.3fr_1fr] md:items-center">
          <div>
            <p className="max-w-md text-lg leading-relaxed text-muted">
              Have a product to ship, a frontend to scale or a team to level up? I&apos;m always happy to talk shop.
            </p>
            <button
              type="button"
              onClick={copy}
              data-cursor={copied ? "Copied" : "Copy"}
              className="group relative mt-8 inline-flex items-center gap-4 rounded-full border border-fg/15 bg-fg/[0.03] py-3 pl-6 pr-3 text-lg backdrop-blur transition-colors hover:border-fg/40 sm:text-2xl"
            >
              {profile.email}
              <span className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-full bg-fg text-sm text-ink">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={copied ? "ok" : "copy"}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    {copied ? "✓" : "⧉"}
                  </motion.span>
                </AnimatePresence>
              </span>
              <AnimatePresence>
                {copied && (
                  <motion.span
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute -top-9 left-6 rounded-full bg-fg px-3 py-1 text-xs font-medium text-ink"
                  >
                    Copied to clipboard
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>

          <div className="flex justify-start md:justify-end">
            <Magnetic strength={0.4}>
              <a
                href={`mailto:${profile.email}?subject=Hello%20Badal`}
                className="group relative grid h-44 w-44 place-items-center overflow-hidden rounded-full bg-accent text-lg font-medium text-ink sm:h-52 sm:w-52"
              >
                <span className="absolute inset-0 scale-0 rounded-full bg-fg transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-100" />
                <span className="relative">Say hello ✦</span>
              </a>
            </Magnetic>
          </div>
        </div>

        <footer className="mt-28 border-t border-fg/10 py-10">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">Local time · Gurugram</p>
              <p className="mt-3 text-lg">
                <LocalTime />
              </p>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">Navigate</p>
              <ul className="mt-3 space-y-1.5">
                {nav.map((n) => (
                  <li key={n.href}>
                    <a
                      href={n.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToTarget(n.href);
                      }}
                      className="text-fg/75 transition-colors hover:text-fg"
                    >
                      {n.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">Elsewhere</p>
              <ul className="mt-3 space-y-1.5">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a href={s.href} target="_blank" rel="noreferrer" className="group text-fg/75 transition-colors hover:text-fg">
                      {s.label}{" "}
                      <span className="inline-block text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                        ↗
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-start justify-between gap-6 lg:items-end">
              <a
                href={profile.resume}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-ink transition-transform hover:scale-[1.04]"
              >
                Download resume ↗
              </a>
              <button
                type="button"
                onClick={() => scrollToTarget(0)}
                className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-muted hover:text-fg"
              >
                Back to top
                <span className="transition-transform group-hover:-translate-y-1">↑</span>
              </button>
            </div>
          </div>
          <div className="mt-14 flex flex-col justify-between gap-3 text-xs text-muted sm:flex-row">
            <p>© {new Date().getFullYear()} {profile.name}. Designed & built with Next.js, GSAP & Framer Motion.</p>
            <p>
              Made with <span className="text-accent">♥</span> in India, from Darjeeling
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
}
