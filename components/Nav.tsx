"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring } from "framer-motion";
import clsx from "clsx";
import { nav, profile } from "@/lib/data";
import { scrollToTarget, setScrollLocked } from "./SmoothScroll";
import ThemeToggle from "./ThemeToggle";

export default function Nav() {
  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 });
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(y > prev && y > 240 && !open);
    setScrolled(y > 40);
  });

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

  // Skip the mount run so we don't unlock scrolling while the preloader holds it.
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === open) return;
    prevOpen.current = open;
    setScrollLocked(open);
  }, [open]);

  const go = (href: string) => {
    setOpen(false);
    // Let the menu close (and unlock scroll) before travelling.
    requestAnimationFrame(() => scrollToTarget(href));
  };

  return (
    <>
      <motion.div
        aria-hidden
        style={{ scaleX: progress }}
        className="fixed inset-x-0 top-0 z-[70] h-[2px] origin-left bg-accent"
      />

      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: hidden ? -100 : 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-8"
      >
        <nav
          className={clsx(
            "mx-auto flex max-w-6xl items-center justify-between rounded-full px-3 py-2 transition-all duration-500",
            scrolled || open ? "border border-fg/10 bg-ink/90 md:bg-ink/60 md:backdrop-blur-xl" : "border border-transparent"
          )}
        >
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              go("#top");
            }}
            className="group flex items-center gap-2 pl-2 text-[15px] font-medium tracking-tight"
          >
            <span className="relative grid h-8 w-8 place-items-center overflow-hidden rounded-full bg-accent text-xs font-bold text-ink">
              BS
            </span>
            <span>
              badal<span className="text-muted transition-colors group-hover:text-accent">.sherpa</span>
            </span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {nav.map((item) => {
              const isActive = active === item.href.slice(1);
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      go(item.href);
                    }}
                    className={clsx(
                      "relative rounded-full px-4 py-2 text-sm transition-colors",
                      isActive ? "text-fg" : "text-muted hover:text-fg"
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 -z-10 rounded-full bg-fg/10"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-full bg-fg px-4 py-2 text-sm font-medium text-ink transition-transform hover:scale-[1.04] sm:inline-flex"
            >
              Resume ↗
            </a>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="relative grid h-10 w-10 place-items-center rounded-full border border-fg/10 md:hidden"
            >
              <span
                className={clsx(
                  "absolute h-px w-4 bg-fg transition-transform duration-300",
                  open ? "rotate-45" : "-translate-y-[3px]"
                )}
              />
              <span
                className={clsx(
                  "absolute h-px w-4 bg-fg transition-transform duration-300",
                  open ? "-rotate-45" : "translate-y-[3px]"
                )}
              />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "circle(0% at 100% 0%)" }}
            animate={{ clipPath: "circle(150% at 100% 0%)" }}
            exit={{ clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-end overflow-hidden bg-ink-2 px-6 pb-12 pt-28 md:hidden"
          >
            <div className="orb orb-pink -right-40 -top-10 h-[28rem] w-[28rem]" />
            <ul className="space-y-2">
              {nav.map((item, i) => (
                <li key={item.href} className="overflow-hidden">
                  <motion.a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      go(item.href);
                    }}
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "110%" }}
                    transition={{ delay: 0.15 + i * 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="flex items-baseline gap-4 text-5xl font-medium tracking-tight"
                  >
                    <span className="font-mono text-xs text-muted">0{i + 1}</span>
                    {item.label}
                  </motion.a>
                </li>
              ))}
            </ul>
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.5 } }}
              exit={{ opacity: 0 }}
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex w-fit rounded-full bg-fg px-5 py-3 text-sm font-medium text-ink"
            >
              Download resume ↗
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
