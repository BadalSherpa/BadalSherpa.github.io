"use client";

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { nav, profile } from "@/lib/data";
import { container } from "./Section";
import { scrollToTarget, setScrollLocked } from "./SmoothScroll";
import ThemeToggle from "./ThemeToggle";

export default function Nav() {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = nav.map((n) => n.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === open) return;
    prevOpen.current = open;
    setScrollLocked(open);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const go = (href: string) => {
    setOpen(false);
    // Let the menu close (and unlock scroll) before travelling.
    requestAnimationFrame(() => scrollToTarget(href));
  };

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 border-b bg-bg transition-colors duration-150",
        scrolled || open ? "border-line" : "border-transparent"
      )}
    >
      <nav aria-label="Primary" className={clsx(container, "flex h-14 items-center justify-between gap-6")}>
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            go("#top");
          }}
          className="text-[15px] font-semibold tracking-tight"
        >
          {profile.name}
        </a>

        <div className="flex items-center gap-1 sm:gap-3 md:gap-5">
          <ul className="hidden items-center gap-6 md:flex">
            {nav.map((item) => {
              const isActive = active === item.href.slice(1);
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={isActive ? "location" : undefined}
                    onClick={(e) => {
                      e.preventDefault();
                      go(item.href);
                    }}
                    className={clsx(
                      "relative py-2 text-sm transition-colors duration-150",
                      isActive ? "text-fg" : "text-muted hover:text-fg"
                    )}
                  >
                    {item.label}
                    <span
                      aria-hidden
                      className={clsx(
                        "absolute inset-x-0 -bottom-px h-px bg-accent transition-opacity duration-150",
                        isActive ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          <ThemeToggle />

          <a href={profile.resume} target="_blank" rel="noreferrer" className="btn btn-secondary hidden min-h-9 sm:inline-flex">
            Resume <span aria-hidden>↗</span>
          </a>

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="relative -mr-2 grid h-11 w-11 place-items-center rounded-md md:hidden"
          >
            <span
              className={clsx(
                "absolute h-[1.5px] w-5 bg-fg transition-transform duration-150",
                open ? "rotate-45" : "-translate-y-[4px]"
              )}
            />
            <span
              className={clsx(
                "absolute h-[1.5px] w-5 bg-fg transition-transform duration-150",
                open ? "-rotate-45" : "translate-y-[4px]"
              )}
            />
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="fixed inset-x-0 bottom-0 top-14 overflow-y-auto bg-bg md:hidden">
          <ul className={clsx(container, "divide-y divide-line border-b border-line")}>
            {nav.map((item, i) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    go(item.href);
                  }}
                  className="flex items-baseline gap-4 py-4 text-2xl"
                >
                  <span className="w-6 font-mono text-xs tabular-nums text-subtle">0{i + 1}</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className={clsx(container, "py-6")}>
            <a href={profile.resume} target="_blank" rel="noreferrer" className="btn btn-primary w-full">
              Download resume <span aria-hidden>↗</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
