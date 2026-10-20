"use client";

import type { PointerEvent } from "react";
import { motion } from "framer-motion";
import { skillGroups } from "@/lib/data";
import SectionHeading from "../SectionHeading";

/** Updates CSS vars so the card's radial highlight tracks the pointer. */
function trackSpotlight(e: PointerEvent<HTMLDivElement>) {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`);
}

export default function Skills() {
  return (
    <section id="skills" className="relative px-5 py-28 sm:px-8 md:py-40">
      <div aria-hidden className="orb orb-pink orb-soft left-[-25%] top-[20%] h-[70vmax] w-[70vmax]" />
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="04" eyebrow="Toolkit" title="The stack behind" accent="the craft." />

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              onPointerMove={trackSpotlight}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8% 0px" }}
              transition={{ duration: 0.8, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group gradient-border relative overflow-hidden rounded-3xl bg-white/[0.02] p-7 [--x:50%] [--y:50%]"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(380px circle at var(--x) var(--y), rgba(124,92,255,0.18), rgba(255,79,216,0.08) 40%, transparent 70%)",
                }}
              />
              <div className="relative flex items-center justify-between">
                <span className="text-gradient text-3xl">{group.icon}</span>
                <span className="font-mono text-xs text-muted">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="relative mt-8 text-2xl font-medium tracking-tight">{group.title}</h3>
              <ul className="relative mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-white/10 bg-ink/40 px-3 py-1.5 text-[13px] text-white/80 transition-colors duration-300 hover:border-pink/50 hover:text-white"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
