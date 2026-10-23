"use client";

import Image from "next/image";
import clsx from "clsx";
import { profile, stats } from "@/lib/data";
import { container } from "../Section";
import { scrollToTarget } from "../SmoothScroll";

export default function Hero() {
  return (
    <section id="top" className={clsx(container, "pb-16 pt-10 md:pb-24 md:pt-20")}>
      <div className="grid gap-10 md:grid-cols-12 md:gap-x-8">
        <div className="md:col-span-7 lg:col-span-8">
          <div data-hero className="flex items-center gap-4">
            {/* Phones get a small portrait here instead of a full-height photo above the fold. */}
            <Image
              src={profile.photo}
              alt=""
              width={56}
              height={56}
              priority
              className="h-14 w-14 rounded-md object-cover object-[50%_25%] md:hidden"
            />
            <p className="text-sm text-muted">
              <span className="font-medium text-fg">{profile.name}</span>
              <span className="block sm:inline">
                <span className="hidden sm:inline"> · </span>
                {profile.role}, {profile.location}
              </span>
            </p>
          </div>

          <h1 data-hero className="mt-8 max-w-[16ch] text-balance font-serif text-[clamp(2.6rem,6.4vw,5.25rem)] font-normal leading-[1.02] tracking-[-0.015em] md:mt-12">
            Crafting fast, elegant interfaces that scale.
          </h1>

          <p data-hero className="mt-6 max-w-xl text-[17px] leading-relaxed text-muted md:mt-8">
            6+ years shipping <span className="text-fg">production-grade products</span> for{" "}
            <span className="text-fg">large enterprises and high-scale platforms</span> — from React and Next.js front
            ends to Node.js APIs and databases.
          </p>

          <div data-hero className="mt-8 flex flex-wrap gap-3">
            <button type="button" onClick={() => scrollToTarget("#work")} className="btn btn-primary">
              See selected work <span aria-hidden>→</span>
            </button>
            <button type="button" onClick={() => scrollToTarget("#contact")} className="btn btn-secondary">
              Let&apos;s talk
            </button>
          </div>
        </div>

        <figure data-hero className="hidden md:col-span-5 md:block lg:col-span-4">
          <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-surface">
            <Image
              src={profile.photo}
              alt={`Portrait of ${profile.name}`}
              fill
              priority
              sizes="(min-width: 1024px) 360px, 40vw"
              className="object-cover object-[50%_30%]"
            />
          </div>
          <figcaption className="mt-3 text-xs text-subtle">
            Originally from {profile.hometown}. Based in {profile.location.split(",")[0]}.
          </figcaption>
        </figure>
      </div>

      <dl className="mt-14 grid grid-cols-2 border-t border-line md:mt-20 md:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={s.label}
            data-hero
            className={clsx(
              "flex flex-col gap-1 py-5 pr-4 md:py-6",
              i % 2 === 1 && "border-l border-line pl-4 md:pl-6",
              i >= 2 && "border-t border-line md:border-t-0",
              i === 2 && "md:border-l md:pl-6"
            )}
          >
            <dt className="order-2 text-sm leading-snug text-muted">{s.label}</dt>
            <dd className="font-serif text-4xl leading-none tabular-nums">
              <span data-count={s.value}>{s.value.toLocaleString("en-US")}</span>
              <span className="text-accent">{s.suffix}</span>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
