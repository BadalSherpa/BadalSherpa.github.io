"use client";

import type { PointerEvent } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { certifications, codingProfiles } from "@/lib/data";
import SectionHeading, { Reveal } from "../SectionHeading";

function TiltCard({ cert, index }: { cert: (typeof certifications)[number]; index: number }) {
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rotateY = useSpring(useTransform(mx, [0, 1], [-10, 10]), { stiffness: 220, damping: 18 });
  const rotateX = useSpring(useTransform(my, [0, 1], [10, -10]), { stiffness: 220, damping: 18 });
  const glareX = useTransform(mx, (v) => `${v * 100}%`);
  const glareY = useTransform(my, (v) => `${v * 100}%`);
  const glare = useTransform(
    [glareX, glareY],
    ([x, y]) => `radial-gradient(circle at ${x} ${y}, rgba(255,255,255,0.45), transparent 50%)`
  );

  const onMove = (e: PointerEvent<HTMLAnchorElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 0.8, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="h-full [perspective:1000px]"
    >
      <motion.a
        href={cert.href}
        target="_blank"
        rel="noreferrer"
        data-cursor="View"
        onPointerMove={onMove}
        onPointerLeave={() => {
          mx.set(0.5);
          my.set(0.5);
        }}
        style={{ rotateX, rotateY }}
        className="gradient-border group block h-full rounded-3xl bg-white/[0.02] p-3 [transform-style:preserve-3d]"
      >
        <div className="relative aspect-[16/11] overflow-hidden rounded-2xl bg-white">
          <Image src={cert.image} alt={`${cert.title} certificate`} fill sizes="(min-width:1024px) 280px, 50vw" className="object-cover" />
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{ background: glare }}
          />
        </div>
        <div className="p-3 pt-5 [transform:translateZ(30px)]">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">{cert.issuer}</p>
          <p className="mt-2 text-lg font-medium leading-snug">{cert.title}</p>
          <p className="mt-3 text-sm text-white/70">
            View credential <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </p>
        </div>
      </motion.a>
    </motion.div>
  );
}

export default function Credentials() {
  return (
    <section id="credentials" className="relative px-5 py-28 sm:px-8 md:py-40">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="06" eyebrow="Credentials & playground" title="Always learning," accent="always solving." />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((c, i) => (
            <TiltCard key={c.title} cert={c} index={i} />
          ))}
        </div>

        <Reveal className="mt-24">
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-muted">Where I code in public</p>
        </Reveal>
        <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {codingProfiles.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group relative flex items-center justify-between overflow-hidden bg-ink p-7"
            >
              <span className="absolute inset-0 origin-bottom scale-y-0 bg-gradient-to-br from-violet/25 via-pink/15 to-amber/20 transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-y-100" />
              <span className="relative">
                <span className="block text-xl font-medium">{p.name}</span>
                <span className="text-sm text-muted">{p.note}</span>
              </span>
              <span className="relative grid h-10 w-10 place-items-center rounded-full border border-white/15 transition-all duration-500 group-hover:rotate-45 group-hover:border-white group-hover:bg-white group-hover:text-ink">
                ↗
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
