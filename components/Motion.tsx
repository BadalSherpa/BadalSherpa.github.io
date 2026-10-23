"use client";

import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";

const ease = "power2.out";

/**
 * Page-wide motion, kept deliberately small:
 * - [data-hero]   — staggered fade-up on load; [data-count] numbers count up.
 * - [data-reveal] — fade-up once when scrolled into view, batched so rows
 *                   entering together stagger slightly.
 * - [data-draw]   — a rule that draws in from the left when revealed.
 * Nothing runs for reduced motion; html.js (set in layout.tsx) is never added
 * then, so content is simply visible.
 */
export default function Motion() {
  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const hero = gsap.utils.toArray<HTMLElement>("[data-hero]");
      gsap.set(hero, { autoAlpha: 0, y: 16 });
      gsap.to(hero, { autoAlpha: 1, y: 0, duration: 0.7, ease, stagger: 0.08, delay: 0.1 });

      gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
        const target = Number(el.dataset.count);
        const obj = { v: 0 };
        gsap.to(obj, {
          v: target,
          duration: 1.4,
          delay: 0.5,
          ease: "power3.out",
          onUpdate: () => {
            el.textContent = Math.round(obj.v).toLocaleString("en-US");
          },
        });
      });

      const reveal = gsap.utils.toArray<HTMLElement>("[data-reveal]");
      gsap.set(reveal, { autoAlpha: 0, y: 20 });
      ScrollTrigger.batch(reveal, {
        start: "top 90%",
        once: true,
        onEnter: (els) => gsap.to(els, { autoAlpha: 1, y: 0, duration: 0.6, ease, stagger: 0.07, overwrite: true }),
      });

      gsap.utils.toArray<HTMLElement>("[data-draw]").forEach((el) => {
        gsap.fromTo(
          el,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 0.9,
            ease: "power3.inOut",
            scrollTrigger: { trigger: el, start: "top 90%", once: true },
          }
        );
      });
    });

    return () => mm.revert();
  });

  return null;
}
