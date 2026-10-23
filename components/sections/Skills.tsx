import { skillGroups } from "@/lib/data";
import Section from "../Section";

export default function Skills() {
  return (
    <Section id="skills" index="04" label="Toolkit" title="The stack behind the craft.">
      <dl className="border-b border-line">
        {skillGroups.map((group) => (
          <div key={group.title} data-reveal className="grid gap-2 border-t border-line py-5 sm:grid-cols-[13rem_1fr] sm:gap-8">
            <dt className="font-medium">{group.title}</dt>
            <dd className="text-muted">
              <ul className="flex flex-wrap gap-x-1">
                {group.items.map((item, i) => (
                  <li key={item}>
                    {item}
                    {i < group.items.length - 1 && <span aria-hidden className="text-line-strong">,</span>}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
