"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import { education, experience } from "@/lib/data";
import SectionHeading, { Reveal } from "../SectionHeading";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Experience() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="experience" className="relative px-5 py-28 sm:px-8 md:py-40">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading index="03" eyebrow="Experience" title="Where I've" accent="made an impact." />
          <Reveal className="max-w-sm text-sm leading-relaxed text-muted">
            Open a row to see the clients, products and outcomes behind each role.
          </Reveal>
        </div>

        <div className="mt-16 border-t border-white/10">
          {experience.map((job, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={job.company} delay={i * 0.08}>
                <div className="group relative border-b border-white/10">
                  <span
                    aria-hidden
                    className={clsx(
                      "absolute inset-x-0 bottom-[-1px] h-px origin-left bg-gradient-to-r from-violet via-pink to-amber transition-transform duration-700",
                      isOpen ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    )}
                  />
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="grid w-full grid-cols-[1fr_auto] items-center gap-4 py-8 text-left md:grid-cols-[2fr_2fr_1.2fr_auto]"
                  >
                    <span className="flex items-center gap-4">
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02] text-lg font-semibold">
                        {job.company[0]}
                      </span>
                      <span>
                        <span className="block text-2xl font-medium tracking-tight transition-colors group-hover:text-white md:text-3xl">
                          {job.company}
                        </span>
                        <span className="text-sm text-muted md:hidden">{job.role}</span>
                      </span>
                    </span>
                    <span className="hidden text-lg text-white/80 md:block">{job.role}</span>
                    <span className="hidden font-mono text-sm text-muted md:flex md:items-center md:gap-2">
                      {job.current && <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />}
                      {job.period}
                    </span>
                    <span
                      className={clsx(
                        "grid h-10 w-10 place-items-center rounded-full border border-white/15 text-xl transition-all duration-500",
                        isOpen ? "rotate-45 border-transparent bg-white text-ink" : "group-hover:border-white/40"
                      )}
                    >
                      +
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.6, ease }}
                        className="overflow-hidden"
                      >
                        <div className="pb-10 md:pl-16">
                          <p className="mb-6 font-mono text-xs text-muted md:hidden">{job.period}</p>
                          {job.progression && (
                            <p className="mb-6 inline-flex rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs text-white/75">
                              {job.progression}
                            </p>
                          )}
                          <div className="grid gap-6 lg:grid-cols-2">
                            {job.engagements.map((eng, ei) => (
                              <motion.div
                                key={eng.client}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 + ei * 0.08, duration: 0.6, ease }}
                                className={clsx(
                                  "gradient-border rounded-2xl bg-white/[0.02] p-6",
                                  job.engagements.length === 1 && "lg:col-span-2"
                                )}
                              >
                                <p className="flex justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
                                  <span>Client</span>
                                  {eng.period && <span>{eng.period}</span>}
                                </p>
                                <p className="mt-2 text-xl font-medium">
                                  {eng.client} <span className="text-muted">— {eng.product}</span>
                                </p>
                                <ul
                                  className={clsx(
                                    "mt-5 grid gap-3 text-[15px] leading-relaxed text-white/75",
                                    job.engagements.length === 1 && "md:grid-cols-2 md:gap-x-10"
                                  )}
                                >
                                  {eng.points.map((pt) => (
                                    <li key={pt} className="flex gap-3">
                                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-pink" />
                                      {pt}
                                    </li>
                                  ))}
                                </ul>
                              </motion.div>
                            ))}
                          </div>
                          <div className="mt-6 flex flex-wrap gap-2">
                            {job.stack.map((s) => (
                              <span key={s} className="rounded-full bg-white/[0.06] px-3 py-1 text-xs text-white/70">
                                {s}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}

          <Reveal delay={0.16}>
            <div className="grid grid-cols-[1fr_auto] items-center gap-4 border-b border-white/10 py-8 md:grid-cols-[2fr_2fr_1.2fr_auto]">
              <span className="flex items-center gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02] text-lg">
                  🎓
                </span>
                <span>
                  <span className="block text-2xl font-medium tracking-tight md:text-3xl">LPU</span>
                  <span className="text-sm text-muted">{education.school}</span>
                </span>
              </span>
              <span className="hidden text-lg text-white/80 md:block">{education.degree}</span>
              <span className="hidden font-mono text-sm text-muted md:block">{education.period}</span>
              <span className="rounded-full border border-white/10 px-3 py-1 font-mono text-xs text-muted">
                {education.score}
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
