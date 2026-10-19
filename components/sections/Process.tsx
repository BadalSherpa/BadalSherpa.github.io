"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { process } from "@/lib/data";
import SectionHeading from "../SectionHeading";

const accents = [
  "from-violet/40 via-violet/10",
  "from-pink/40 via-pink/10",
  "from-amber/40 via-amber/10",
];

export default function Process() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const cards = gsap.utils.toArray<HTMLElement>(".process-card");
      cards.forEach((card, i) => {
        const next = cards[i + 1];
        if (!next) return;
        // Recede each card as the next one slides over it.
        gsap.to(card.querySelector(".process-inner"), {
          scale: 0.9,
          opacity: 0.35,
          filter: "blur(2px)",
          ease: "none",
          scrollTrigger: { trigger: next, start: "top bottom", end: "top 20%", scrub: true },
        });
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} className="relative px-5 py-28 sm:px-8 md:py-40">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="05" eyebrow="How I work" title="A calm process" accent="for complex products." />

        <div className="mt-16 space-y-6">
          {process.map((p, i) => (
            <div key={p.step} className="process-card sticky" style={{ top: `calc(6rem + ${i * 1.75}rem)` }}>
              <div className="process-inner gradient-border relative origin-top overflow-hidden rounded-[32px] bg-ink-2 p-8 sm:p-12">
                <div
                  aria-hidden
                  className={`pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-gradient-to-br ${accents[i]} to-transparent blur-2xl`}
                />
                <div className="relative grid gap-8 md:grid-cols-[auto_1fr_1fr] md:items-center md:gap-14">
                  <span className="text-gradient font-serif text-7xl italic leading-none sm:text-8xl">{p.step}</span>
                  <h3 className="text-4xl font-medium tracking-tight sm:text-5xl">{p.title}</h3>
                  <div>
                    <p className="text-lg leading-relaxed text-white/75">{p.body}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span key={t} className="rounded-full border border-white/10 px-3 py-1 text-xs text-muted">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
