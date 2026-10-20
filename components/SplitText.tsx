import type { CSSProperties } from "react";
import clsx from "clsx";

/**
 * Renders text as masked words containing individually addressable characters.
 * Each glyph gets a `--i` index (starting at `offset`) that the CSS entrance
 * animation uses to stagger it, so the reveal needs no JavaScript.
 */
export default function SplitText({
  text,
  className,
  charClassName = "split-char",
  offset = 0,
}: {
  text: string;
  className?: string;
  charClassName?: string;
  offset?: number;
}) {
  const words = text.split(" ");
  let i = offset;
  return (
    <span className={className} aria-label={text} role="text">
      {words.map((word, wi) => (
        <span key={wi} aria-hidden className="inline-block overflow-hidden pb-[0.12em] align-bottom">
          {Array.from(word).map((ch, ci) => (
            <span
              key={ci}
              className={clsx("inline-block will-change-transform", charClassName)}
              style={{ "--i": i++ } as CSSProperties}
            >
              {ch}
            </span>
          ))}
          {wi < words.length - 1 && <span className="inline-block">&nbsp;</span>}
        </span>
      ))}
    </span>
  );
}
