import { marquee } from "@/lib/data";

function Row({ reverse, outline }: { reverse?: boolean; outline?: boolean }) {
  const items = [...marquee, ...marquee];
  return (
    <div className="flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
      <div
        className={`marquee-track flex shrink-0 items-center gap-8 pr-8 ${reverse ? "marquee-reverse" : ""}`}
        style={{ ["--marquee-duration" as string]: reverse ? "55s" : "45s" }}
      >
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-8 whitespace-nowrap">
            <span
              className={
                outline
                  ? "text-[clamp(2rem,5vw,4rem)] font-medium tracking-tight text-transparent [-webkit-text-stroke:1px_color-mix(in_srgb,var(--fg)_28%,transparent)]"
                  : "text-[clamp(2rem,5vw,4rem)] font-medium tracking-tight text-fg/85"
              }
            >
              {item}
            </span>
            <span className="text-gradient text-2xl">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Marquee() {
  return (
    <section aria-label="Technologies" className="relative space-y-4 border-y border-fg/5 py-10">
      <Row />
      <Row reverse outline />
    </section>
  );
}
