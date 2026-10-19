import clsx from "clsx";

/**
 * Renders text as masked words containing individually addressable characters,
 * so GSAP can slide each glyph up from behind its word mask.
 */
export default function SplitText({
  text,
  className,
  charClassName = "split-char",
}: {
  text: string;
  className?: string;
  charClassName?: string;
}) {
  const words = text.split(" ");
  return (
    <span className={className} aria-label={text} role="text">
      {words.map((word, wi) => (
        <span key={wi} aria-hidden className="inline-block overflow-hidden pb-[0.12em] align-bottom">
          {Array.from(word).map((ch, ci) => (
            <span key={ci} className={clsx("inline-block will-change-transform", charClassName)}>
              {ch}
            </span>
          ))}
          {wi < words.length - 1 && <span className="inline-block">&nbsp;</span>}
        </span>
      ))}
    </span>
  );
}
