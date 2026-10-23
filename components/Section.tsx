import type { ReactNode } from "react";
import clsx from "clsx";

/** Shared container width and gutters. */
export const container = "mx-auto w-full max-w-6xl px-5 sm:px-8";

/**
 * Editorial section: a narrow left rail carries the index and label, the
 * title and content sit in the wider column. On phones the rail collapses
 * into a single line above the title.
 */
export default function Section({
  id,
  index,
  label,
  title,
  intro,
  children,
  className,
}: {
  id?: string;
  index: string;
  label: string;
  title?: ReactNode;
  intro?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={clsx("border-t border-line", className)}>
      <div className={clsx(container, "grid gap-y-6 py-16 md:grid-cols-12 md:gap-x-8 md:py-24")}>
        <p data-reveal className="label flex gap-3 md:col-span-3 md:pt-3">
          <span className="font-mono tabular-nums text-accent">{index}</span>
          {label}
        </p>
        <div className="min-w-0 md:col-span-9">
          {title && (
            <h2 data-reveal className="max-w-[24ch] text-balance font-serif text-[clamp(2rem,4vw,3rem)] font-normal leading-[1.08] tracking-[-0.01em]">
              {title}
            </h2>
          )}
          {intro && <div data-reveal className="mt-4 max-w-xl text-muted">{intro}</div>}
          <div className={clsx((title || intro) && "mt-10 md:mt-14")}>{children}</div>
        </div>
      </div>
    </section>
  );
}
