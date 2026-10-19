"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { gsap, useGSAP } from "@/lib/gsap";
import { education, offTheClock, profile } from "@/lib/data";
import SectionHeading, { Reveal } from "../SectionHeading";

function DevPass() {
  const [flipped, setFlipped] = useState(false);
  const dragging = useRef(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  // Tilt follows the drag so the card feels like it has weight.
  const rotateZ = useSpring(useTransform(x, [-200, 200], [-14, 14]), { stiffness: 200, damping: 20 });
  const rotateX = useSpring(useTransform(y, [-200, 200], [12, -12]), { stiffness: 200, damping: 20 });

  return (
    <div className="relative mx-auto w-full max-w-[340px] [perspective:1400px]">
      {/* Lanyard */}
      <div aria-hidden className="mx-auto h-16 w-[3px] bg-gradient-to-b from-transparent via-white/30 to-white/50" />
      <motion.div
        drag
        dragSnapToOrigin
        dragElastic={0.6}
        dragTransition={{ bounceStiffness: 260, bounceDamping: 14 }}
        onDragStart={() => (dragging.current = true)}
        onDragEnd={() => setTimeout(() => (dragging.current = false), 60)}
        onTap={() => !dragging.current && setFlipped((f) => !f)}
        whileTap={{ scale: 0.98 }}
        style={{ x, y, rotateZ, rotateX }}
        data-cursor={flipped ? "Flip back" : "Drag · Flip"}
        className="relative aspect-[3/5.25] w-full touch-none select-none [perspective:1400px]"
        role="button"
        tabIndex={0}
        aria-label="Developer pass card. Press to flip."
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setFlipped((f) => !f);
          }
        }}
      >
        <motion.div
          className="relative h-full w-full [transform-style:preserve-3d]"
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Front */}
          <div className="gradient-border absolute inset-0 overflow-hidden rounded-[28px] bg-ink-2 p-4 [backface-visibility:hidden]">
            <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
              <span>Dev pass</span>
              <span>No. 2020</span>
            </div>
            <div className="relative mt-3 aspect-[3/3.8] overflow-hidden rounded-2xl">
              <Image
                src={profile.photo}
                alt={`Portrait of ${profile.name}`}
                fill
                sizes="340px"
                priority
                draggable={false}
                className="object-cover object-[50%_30%]"
              />
              <span className="absolute bottom-3 left-3 rounded-full bg-ink/55 px-3 py-1 text-[10px] font-medium uppercase tracking-widest backdrop-blur">
                Lead · Frontend
              </span>
            </div>
            <div className="mt-4">
              <p className="text-2xl font-medium tracking-tight">{profile.name}</p>
              <p className="text-sm text-muted">{profile.role}</p>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2 text-center">
              {[
                ["6+", "Years"],
                ["2", "Companies"],
                ["8.22", "CGPA"],
              ].map(([v, l]) => (
                <div key={l} className="rounded-xl border border-white/10 bg-white/[0.03] py-2">
                  <p className="text-base font-medium">{v}</p>
                  <p className="font-mono text-[9px] uppercase tracking-widest text-muted">{l}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Back */}
          <div className="gradient-border absolute inset-0 flex flex-col overflow-hidden rounded-[28px] bg-ink-2 p-6 [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-pink/30 blur-3xl" />
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">Off the clock</p>
            <p className="mt-3 font-serif text-3xl italic leading-tight">
              From the hills of <span className="text-gradient">Darjeeling</span>.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {offTheClock.map((h) => (
                <span key={h} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/80">
                  {h}
                </span>
              ))}
            </div>
            <div className="mt-auto rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">Education</p>
              <p className="mt-2 text-sm font-medium">{education.degree}</p>
              <p className="text-xs text-muted">{education.school}</p>
              <p className="mt-1 text-xs text-muted">
                {education.period} · {education.score}
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
      <p className="mt-8 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-muted">
        Drag the card · tap to flip
      </p>
    </div>
  );
}

export default function About() {
  const textRef = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.fromTo(
        ".about-word",
        { opacity: 0.14 },
        {
          opacity: 1,
          stagger: 0.05,
          ease: "none",
          scrollTrigger: { trigger: textRef.current, start: "top 80%", end: "bottom 45%", scrub: true },
        }
      );
    },
    { scope: textRef }
  );

  return (
    <section id="about" className="relative px-5 py-28 sm:px-8 md:py-40">
      <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-[1fr_1.35fr] md:gap-20">
        <Reveal className="md:sticky md:top-24 md:self-start">
          <DevPass />
        </Reveal>

        <div>
          <SectionHeading index="01" eyebrow="Who I am" title="Engineer by craft," accent="designer at heart." />

          <p ref={textRef} className="mt-12 text-[clamp(1.25rem,2.2vw,1.75rem)] leading-[1.45] tracking-tight">
            {profile.about.split(" ").map((w, i) => (
              <span key={i} className="about-word">
                {w}{" "}
              </span>
            ))}
          </p>

          <Reveal className="mt-12 grid gap-4 sm:grid-cols-2">
            <div className="gradient-border rounded-2xl bg-white/[0.02] p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">Most recently</p>
              <p className="mt-3 text-lg font-medium">Lead Software Engineer</p>
              <p className="text-sm text-muted">Virtusa · Client: HUB International</p>
            </div>
            <div className="gradient-border rounded-2xl bg-white/[0.02] p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">Focus</p>
              <p className="mt-3 text-lg font-medium">UI → API → Database</p>
              <p className="text-sm text-muted">React, Next.js, Node.js, PostgreSQL & MongoDB</p>
            </div>
          </Reveal>

          <Reveal className="mt-10 text-base leading-relaxed text-muted">
            <p>{profile.summary}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
