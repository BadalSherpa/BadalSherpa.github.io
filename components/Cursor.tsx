"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";

/**
 * Two-part cursor: a precise dot and a lagging ring that grows over
 * interactive elements. Elements can set data-cursor="Label" to show text.
 */
export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState("");
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    // Enabling only after the media check keeps touch devices on the native cursor.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setEnabled(true);
    document.documentElement.classList.add("has-custom-cursor");

    const dx = gsap.quickTo(dot.current, "x", { duration: 0.08, ease: "power3" });
    const dy = gsap.quickTo(dot.current, "y", { duration: 0.08, ease: "power3" });
    const rx = gsap.quickTo(ring.current, "x", { duration: 0.45, ease: "power3" });
    const ry = gsap.quickTo(ring.current, "y", { duration: 0.45, ease: "power3" });

    const move = (e: PointerEvent) => {
      dx(e.clientX);
      dy(e.clientY);
      rx(e.clientX);
      ry(e.clientY);
    };

    const over = (e: PointerEvent) => {
      const target = (e.target as HTMLElement).closest<HTMLElement>("a, button, [data-cursor]");
      const text = target?.dataset.cursor ?? "";
      setLabel(text);
      gsap.to(ring.current, {
        scale: target ? (text ? 2.6 : 1.8) : 1,
        backgroundColor: text ? "rgba(255,255,255,1)" : "rgba(255,255,255,0)",
        duration: 0.35,
        ease: "power3.out",
      });
      gsap.to(dot.current, { scale: target ? 0 : 1, duration: 0.25 });
    };

    const leave = () => gsap.to([dot.current, ring.current], { opacity: 0, duration: 0.2 });
    const enter = () => gsap.to([dot.current, ring.current], { opacity: 1, duration: 0.2 });

    window.addEventListener("pointermove", move);
    window.addEventListener("pointerover", over);
    document.addEventListener("pointerleave", leave);
    document.addEventListener("pointerenter", enter);

    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", over);
      document.removeEventListener("pointerleave", leave);
      document.removeEventListener("pointerenter", enter);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, []);

  return (
    <div aria-hidden className={enabled ? "" : "hidden"}>
      <div
        ref={dot}
        className="pointer-events-none fixed left-0 top-0 z-[100] -ml-1 -mt-1 h-2 w-2 rounded-full bg-white mix-blend-difference"
      />
      <div
        ref={ring}
        className={`pointer-events-none fixed left-0 top-0 z-[99] -ml-5 -mt-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/60 ${label ? "" : "mix-blend-difference"}`}
      >
        <span className="text-[5px] font-semibold uppercase tracking-widest text-black">{label}</span>
      </div>
    </div>
  );
}
