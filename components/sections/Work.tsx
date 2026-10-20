"use client";

import { useRef } from "react";
import clsx from "clsx";
import { gsap, useGSAP } from "@/lib/gsap";
import { projects, type Project } from "@/lib/data";
import SectionHeading from "../SectionHeading";

function Cover({ project, index }: { project: Project; index: number }) {
  return (
    <div
      className={clsx(
        "relative aspect-[16/10] overflow-hidden rounded-2xl bg-gradient-to-br md:aspect-auto md:h-[clamp(150px,30svh,340px)]",
        project.gradient
      )}
    >
      {/* Abstract composition, unique per card via index-based offsets */}
      <div
        className="absolute h-[140%] w-[70%] rounded-full bg-[radial-gradient(closest-side,rgba(255,255,255,0.4),transparent)] transition-transform duration-[1.2s] ease-[cubic-bezier(.22,1,.36,1)] group-hover:translate-x-[20%] group-hover:scale-110"
        style={{ left: `${(index * 17) % 60}%`, top: "-20%" }}
      />
      <div className="absolute inset-0 bg-grid opacity-40 mix-blend-overlay" />
      <div className="absolute -bottom-10 -right-10 h-52 w-52 rounded-full border border-white/40 transition-transform duration-[1.2s] ease-[cubic-bezier(.22,1,.36,1)] group-hover:-translate-x-6 group-hover:-translate-y-6 group-hover:rotate-45" />
      <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-full border border-white/30" />
      <span className="absolute left-5 top-4 font-mono text-xs uppercase tracking-[0.25em] text-white/80">
        {project.kicker}
      </span>
      <span className="absolute bottom-2 left-5 text-[clamp(4rem,9vw,7rem)] font-semibold leading-none tracking-tighter text-white/90 mix-blend-overlay">
        {String(index + 1).padStart(2, "0")}
      </span>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const Wrapper = project.href ? "a" : "div";
  return (
    <Wrapper
      {...(project.href ? { href: project.href, target: "_blank", rel: "noreferrer", "data-cursor": "Visit" } : {})}
      className="work-card group gradient-border flex w-full shrink-0 flex-col rounded-3xl bg-ink-2 p-3 md:w-[min(560px,42vw)]"
    >
      <Cover project={project} index={index} />
      <div className="flex flex-1 flex-col p-4 pt-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-2xl font-medium tracking-tight sm:text-3xl">{project.title}</h3>
          <span className="mt-1 shrink-0 font-mono text-xs text-muted">{project.year}</span>
        </div>
        <p className="mt-3 text-[15px] leading-relaxed text-muted">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span key={t} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/75">
              {t}
            </span>
          ))}
        </div>
        <div className="mt-auto pt-6 text-sm">
          {project.href ? (
            <span className="inline-flex items-center gap-2 text-white">
              {project.linkLabel}
              <span className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-1">↗</span>
            </span>
          ) : (
            <span className="text-muted">Enterprise / internal — not publicly accessible</span>
          )}
        </div>
      </div>
    </Wrapper>
  );
}

export default function Work() {
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const counter = useRef<HTMLSpanElement>(null);
  const bar = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
        const el = track.current!;
        const distance = () => el.scrollWidth - window.innerWidth;
        const total = projects.length;

        gsap.to(el, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 0.8,
            invalidateOnRefresh: true,
            anticipatePin: 1,
            onUpdate: (self) => {
              const n = Math.min(total, Math.floor(self.progress * total) + 1);
              if (counter.current) counter.current.textContent = String(n).padStart(2, "0");
              if (bar.current) bar.current.style.transform = `scaleX(${self.progress})`;
            },
          },
        });
      });

      mm.add("(max-width: 767px)", () => {
        gsap.utils.toArray<HTMLElement>(".work-card").forEach((card) => {
          gsap.from(card, {
            y: 60,
            opacity: 0,
            duration: 1,
            ease: "expo.out",
            scrollTrigger: { trigger: card, start: "top 88%" },
          });
        });
      });

      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <section id="work" ref={root} className="relative overflow-hidden py-24 md:flex md:h-[100svh] md:flex-col md:justify-center md:py-0">
      <div aria-hidden className="orb orb-violet orb-soft right-[-25%] top-[5%] h-[70vmax] w-[70vmax]" />

      <div className="mx-auto mb-12 flex w-full max-w-6xl items-end justify-between gap-6 px-5 sm:px-8 md:mb-10">
        <SectionHeading index="02" eyebrow="Selected work" title="Products I've" accent="helped bring to life." />
        <div className="hidden shrink-0 text-right md:block">
          <p className="font-mono text-sm text-muted">
            <span ref={counter} className="text-white">01</span> / {String(projects.length).padStart(2, "0")}
          </p>
          <div className="mt-3 h-px w-40 bg-white/10">
            <div ref={bar} className="h-full origin-left scale-x-0 bg-gradient-to-r from-violet via-pink to-amber" />
          </div>
          <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.3em] text-muted">Keep scrolling →</p>
        </div>
      </div>

      <div
        ref={track}
        className="flex flex-col gap-6 px-5 sm:px-8 md:w-max md:flex-row md:items-stretch md:pl-[max(2rem,calc((100vw-72rem)/2+2rem))] md:pr-[10vw]"
      >
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
