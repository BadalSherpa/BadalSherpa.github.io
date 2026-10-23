"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.9, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

/** Eyebrow index + title whose lines rise from behind a mask when scrolled into view. */
export default function SectionHeading({
  index,
  eyebrow,
  title,
  accent,
  className,
}: {
  index: string;
  eyebrow: string;
  title: string;
  accent?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <Reveal className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-muted sm:tracking-[0.3em]">
        <span className="text-gradient">{index}</span>
        <span className="h-px w-10 bg-fg/20" />
        {eyebrow}
      </Reveal>
      <h2 className="text-[clamp(2.4rem,6vw,5rem)] font-medium leading-[0.98] tracking-[-0.04em]">
        <span className="block overflow-hidden pb-[0.1em]">
          <motion.span
            className="block"
            initial={{ y: "110%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 1.1, ease }}
          >
            {title}
          </motion.span>
        </span>
        {accent && (
          <span className="block overflow-hidden pb-[0.12em] pr-[0.1em]">
            <motion.span
              className="block font-serif font-normal italic tracking-[-0.02em] text-gradient"
              initial={{ y: "110%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 1.1, delay: 0.08, ease }}
            >
              {accent}
            </motion.span>
          </span>
        )}
      </h2>
    </div>
  );
}
