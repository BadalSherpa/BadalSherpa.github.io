import { education, offTheClock, profile } from "@/lib/data";
import Section from "../Section";

const facts = [
  { term: "Most recently", value: "Lead Software Engineer", note: "Virtusa · Client: HUB International" },
  { term: "Focus", value: "UI → API → Database", note: "React, Next.js, Node.js, PostgreSQL & MongoDB" },
  { term: "Education", value: education.degree, note: `${education.school} · ${education.period} · ${education.score}` },
  { term: "Off the clock", value: "From the hills of Darjeeling", note: offTheClock.join(", ") },
];

export default function About() {
  return (
    <Section id="about" index="01" label="About" title="Engineer by craft, designer at heart.">
      <div className="max-w-2xl space-y-5">
        <p data-reveal className="text-xl leading-[1.55] tracking-[-0.005em] md:text-[22px]">{profile.about}</p>
        <p data-reveal className="text-muted">{profile.summary}</p>
      </div>

      <dl className="mt-12 grid gap-x-8 sm:grid-cols-2">
        {facts.map((f) => (
          <div key={f.term} data-reveal className="border-t border-line py-5">
            <dt className="label">{f.term}</dt>
            <dd className="mt-2 font-medium">{f.value}</dd>
            <dd className="mt-0.5 text-sm text-muted">{f.note}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
