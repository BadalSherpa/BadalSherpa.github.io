"use client";

import { useState } from "react";
import clsx from "clsx";
import { education, experience } from "@/lib/data";
import Section from "../Section";

export default function Experience() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section
      id="experience"
      index="03"
      label="Experience"
      title="Where I’ve made an impact."
      intro="Open a role to see the clients, products and outcomes behind it."
    >
      <div className="border-b border-line">
        {experience.map((job, i) => {
          const isOpen = open === i;
          const panelId = `role-${i}`;
          return (
            <div key={job.company} data-reveal className="border-t border-line">
              <h3>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="group grid w-full grid-cols-[1fr_auto] items-start gap-x-6 gap-y-1 py-6 text-left sm:grid-cols-[1fr_auto_auto] sm:items-baseline"
                >
                  <span className="min-w-0">
                    <span className="block text-xl font-medium tracking-tight transition-colors duration-150 group-hover:text-accent sm:text-2xl">
                      {job.company}
                    </span>
                    <span className="mt-0.5 block text-[15px] text-muted">{job.role}</span>
                  </span>
                  <span className="col-start-1 row-start-2 flex items-center gap-2 font-mono text-xs tabular-nums text-subtle sm:col-start-auto sm:row-start-auto sm:text-sm">
                    {job.current && (
                      <>
                        <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent" />
                        <span className="sr-only">Current role, </span>
                      </>
                    )}
                    {job.period}
                  </span>
                  <span
                    aria-hidden
                    className="col-start-2 row-span-2 row-start-1 grid h-8 w-8 place-items-center rounded-md border border-line text-muted transition-colors duration-150 group-hover:border-line-strong group-hover:text-fg sm:col-start-auto sm:row-span-1 sm:row-start-auto"
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M1 6h10" />
                      <path d="M6 1v10" className={clsx("origin-center transition-transform [transform-box:fill-box] duration-200", isOpen && "scale-y-0")} />
                    </svg>
                  </span>
                </button>
              </h3>

              {/* Height animates via grid rows (0fr → 1fr); `inert` keeps collapsed content out of the tab order. */}
              <div
                id={panelId}
                inert={!isOpen}
                className={clsx(
                  "grid transition-[grid-template-rows] duration-200 ease-out",
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                )}
              >
                <div className="overflow-hidden">
                  <div className="pb-10">
                    {job.progression && <p className="mb-8 text-sm text-muted">{job.progression}</p>}

                    <div className="space-y-10">
                      {job.engagements.map((eng) => (
                        <div key={eng.client} className="grid gap-3 lg:grid-cols-[13rem_1fr] lg:gap-8">
                          <div>
                            <p className="font-medium">{eng.client}</p>
                            <p className="text-sm text-muted">{eng.product}</p>
                            {eng.period && <p className="mt-1 font-mono text-xs text-subtle">{eng.period}</p>}
                          </div>
                          <ul className="max-w-2xl space-y-2.5 text-[15px] leading-relaxed text-muted">
                            {eng.points.map((pt) => (
                              <li key={pt} className="relative pl-5">
                                <span aria-hidden className="absolute left-0 top-[0.7em] h-px w-2.5 bg-line-strong" />
                                {pt}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    <p className="mt-8 text-sm text-subtle lg:pl-[15rem]">
                      <span className="sr-only">Stack: </span>
                      {job.stack.join(" · ")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        <div data-reveal className="grid grid-cols-[1fr_auto] gap-x-6 gap-y-1 border-t border-line py-6 sm:grid-cols-[1fr_auto_auto] sm:items-baseline">
          <div className="min-w-0">
            <p className="text-xl font-medium tracking-tight sm:text-2xl">{education.school}</p>
            <p className="mt-0.5 text-[15px] text-muted">
              {education.degree} · {education.score}
            </p>
          </div>
          <p className="col-start-1 font-mono text-xs tabular-nums text-subtle sm:col-start-auto sm:text-sm">
            {education.period}
          </p>
          {/* Keeps the period aligned with the rows above, which end in a toggle. */}
          <span aria-hidden className="hidden w-8 sm:block" />
        </div>
      </div>
    </Section>
  );
}
