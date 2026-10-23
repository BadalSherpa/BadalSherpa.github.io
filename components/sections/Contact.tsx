"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import { nav, profile, socials } from "@/lib/data";
import { container } from "../Section";
import { scrollToTarget } from "../SmoothScroll";

function LocalTime() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Kolkata",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 15000);
    return () => clearInterval(id);
  }, []);
  return <span className="tabular-nums">{time || "--:--"}</span>;
}

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section id="contact" className="border-t border-line">
      <div className={clsx(container, "grid gap-y-6 py-16 md:grid-cols-12 md:gap-x-8 md:py-28")}>
        <p data-reveal className="label flex gap-3 md:col-span-3 md:pt-4">
          <span className="font-mono tabular-nums text-accent">07</span>
          Contact
        </p>
        <div className="md:col-span-9">
          <h2 data-reveal className="max-w-[14ch] font-serif text-[clamp(2.6rem,6.4vw,5.25rem)] font-normal leading-[1.02] tracking-[-0.015em]">
            Let&apos;s build something great.
          </h2>
          <p data-reveal className="mt-6 max-w-md text-[17px] leading-relaxed text-muted">
            Have a product to ship, a frontend to scale or a team to level up? I&apos;m always happy to talk shop.
          </p>

          <div data-reveal className="mt-8 flex flex-wrap items-center gap-3">
            <a href={`mailto:${profile.email}?subject=Hello%20Badal`} className="btn btn-primary">
              Say hello <span aria-hidden>→</span>
            </a>
            <button type="button" onClick={copy} className="btn btn-secondary max-w-full">
              <span className="truncate">{profile.email}</span>
              <span className={clsx("text-xs font-normal", copied ? "text-accent" : "text-subtle")}>
                {copied ? "Copied" : "Copy"}
              </span>
            </button>
            <span role="status" className="sr-only">
              {copied ? "Email address copied to clipboard" : ""}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className={clsx(container, "grid grid-cols-2 gap-x-8 gap-y-10 py-12 md:grid-cols-12")}>
        <div className="col-span-2 md:col-span-3">
          <p className="font-semibold tracking-tight">{profile.name}</p>
          <p className="mt-1 text-sm text-muted">{profile.role}</p>
          <p className="mt-4 text-sm text-muted">
            <LocalTime /> in Gurugram
          </p>
        </div>

        <nav aria-label="Footer" className="md:col-span-3">
          <p className="label">Navigate</p>
          <ul className="mt-3 space-y-1.5 text-sm">
            {nav.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToTarget(n.href);
                  }}
                  className="text-muted transition-colors duration-150 hover:text-fg"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-3">
          <p className="label">Elsewhere</p>
          <ul className="mt-3 space-y-1.5 text-sm">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted transition-colors duration-150 hover:text-fg"
                >
                  {s.label} <span aria-hidden>↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-2 flex flex-wrap items-start gap-3 md:col-span-3 md:flex-col md:items-end">
          <a href={profile.resume} target="_blank" rel="noreferrer" className="btn btn-secondary">
            Download resume <span aria-hidden>↗</span>
          </a>
          <button type="button" onClick={() => scrollToTarget(0)} className="btn px-0 text-muted hover:text-fg">
            Back to top <span aria-hidden>↑</span>
          </button>
        </div>
      </div>
      <div className="border-t border-line">
        <div className={clsx(container, "flex flex-col gap-1 py-6 text-xs text-subtle sm:flex-row sm:justify-between")}>
          <p>
            © {new Date().getFullYear()} {profile.name}. Designed &amp; built with Next.js and Tailwind CSS.
          </p>
          <p>Made in India, from Darjeeling.</p>
        </div>
      </div>
    </footer>
  );
}
