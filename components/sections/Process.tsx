import { process } from "@/lib/data";
import Section from "../Section";

export default function Process() {
  return (
    <Section index="05" label="How I work" title="A calm process for complex products." className="bg-surface">
      <ol className="grid gap-10 md:grid-cols-3 md:gap-8">
        {process.map((p) => (
          <li key={p.step} data-reveal className="relative pt-5">
            <span aria-hidden data-draw className="absolute inset-x-0 top-0 h-px origin-left bg-fg" />
            <p className="font-mono text-sm tabular-nums text-accent">{p.step}</p>
            <h3 className="mt-3 text-2xl font-medium tracking-tight">{p.title}</h3>
            <p className="mt-3 leading-relaxed text-muted">{p.body}</p>
            <p className="mt-4 text-sm text-subtle">{p.tags.join(" · ")}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
