import Image from "next/image";
import { certifications, codingProfiles } from "@/lib/data";
import Section from "../Section";

export default function Credentials() {
  return (
    <Section id="credentials" index="06" label="Credentials" title="Always learning, always solving.">
      <ul className="grid grid-cols-2 gap-x-5 gap-y-8 lg:grid-cols-4">
        {certifications.map((cert) => (
          <li key={cert.title} data-reveal>
            <a href={cert.href} target="_blank" rel="noreferrer" className="group block">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-line bg-white transition-colors duration-150 group-hover:border-line-strong">
                <Image
                  src={cert.image}
                  alt={`${cert.title} certificate`}
                  fill
                  sizes="(min-width: 1024px) 200px, 45vw"
                  className="object-cover"
                />
              </div>
              <p className="label mt-3">{cert.issuer}</p>
              <p className="mt-1 text-[15px] font-medium leading-snug transition-colors duration-150 group-hover:text-accent">
                {cert.title}
                <span aria-hidden className="ml-1 text-subtle">↗</span>
              </p>
            </a>
          </li>
        ))}
      </ul>

      <h3 data-reveal className="label mt-16 md:mt-20">Where I code in public</h3>
      <ul className="mt-4 grid border-t border-line sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-3">
        {codingProfiles.map((p) => (
          <li key={p.name} data-reveal className="border-b border-line">
            <a
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-baseline justify-between gap-4 py-4"
            >
              <span className="min-w-0">
                <span className="font-medium transition-colors duration-150 group-hover:text-accent">{p.name}</span>
                <span className="block text-sm text-muted">{p.note}</span>
              </span>
              <span aria-hidden className="text-subtle transition-colors duration-150 group-hover:text-accent">
                ↗
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
