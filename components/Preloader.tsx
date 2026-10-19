"use client";

import { useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { markIntroRevealed } from "@/lib/intro";
import { setScrollLocked } from "./SmoothScroll";

/** Counter + name intro that lifts away like a curtain, then dispatches "intro:done". */
export default function Preloader() {
  const root = useRef<HTMLDivElement>(null);
  const count = useRef<HTMLSpanElement>(null);
  const [done, setDone] = useState(false);

  useGSAP(
    () => {
      const finish = () => {
        setScrollLocked(false);
        markIntroRevealed();
        setDone(true);
      };

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        finish();
        return;
      }

      setScrollLocked(true);
      const counter = { v: 0 };
      const tl = gsap.timeline({ onComplete: finish });
      tl.from(".pl-word", { yPercent: 110, duration: 0.8, stagger: 0.08, ease: "power4.out" })
        .to(
          counter,
          {
            v: 100,
            duration: 1.3,
            ease: "power2.inOut",
            onUpdate: () => {
              if (count.current) count.current.textContent = String(Math.round(counter.v)).padStart(3, "0");
            },
          },
          0
        )
        .to(".pl-bar", { scaleX: 1, duration: 1.3, ease: "power2.inOut" }, 0)
        .to(".pl-word", { yPercent: -110, duration: 0.6, stagger: 0.05, ease: "power3.in" }, "+=0.15")
        .to(root.current, { yPercent: -100, duration: 0.9, ease: "expo.inOut" }, "-=0.25")
        .add(markIntroRevealed, "-=0.55");
    },
    { scope: root }
  );

  if (done) return null;

  return (
    <div
      ref={root}
      className="fixed inset-0 z-[90] flex flex-col justify-between bg-ink p-6 sm:p-10"
      aria-hidden
    >
      <div className="flex justify-between font-mono text-xs uppercase tracking-[0.3em] text-muted">
        <span>Portfolio</span>
        <span>© {new Date().getFullYear()}</span>
      </div>
      <div className="flex items-end justify-between gap-6">
        <div className="overflow-hidden text-5xl font-medium tracking-tight sm:text-8xl">
          <span className="pl-word inline-block">Badal</span>{" "}
          <span className="pl-word inline-block font-serif italic text-gradient">Sherpa</span>
        </div>
        <span ref={count} className="font-mono text-4xl tabular-nums text-white/80 sm:text-6xl">
          000
        </span>
      </div>
      <div className="h-px w-full bg-white/10">
        <div className="pl-bar h-full origin-left scale-x-0 bg-gradient-to-r from-violet via-pink to-amber" />
      </div>
    </div>
  );
}
