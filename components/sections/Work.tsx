import clsx from "clsx";
import { projects, type Project } from "@/lib/data";
import Section from "../Section";

function ProjectRow({ project }: { project: Project }) {
  const body = (
    <>
      <p className="font-mono text-xs tabular-nums text-subtle sm:pt-1.5">{project.year}</p>
      <div className="min-w-0">
        <p className="label">{project.kicker}</p>
        <h3 className="mt-1.5 text-xl font-medium tracking-tight transition-colors duration-150 group-hover:text-accent sm:text-2xl">
          {project.title}
        </h3>
        <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-muted">{project.description}</p>
        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies">
          {project.tags.map((t) => (
            <li key={t} className="tag">
              {t}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm">
          {project.href ? (
            <span className="link text-fg">
              {project.linkLabel} <span aria-hidden>↗</span>
            </span>
          ) : (
            <span className="text-subtle">Enterprise / internal — not publicly accessible</span>
          )}
        </p>
      </div>
    </>
  );

  const rowClass = "grid gap-2 py-7 sm:grid-cols-[6.5rem_1fr] sm:gap-6 md:py-8";

  return (
    <li data-reveal className="border-t border-line first:border-t-0">
      {project.href ? (
        <a href={project.href} target="_blank" rel="noreferrer" className={clsx(rowClass, "group")}>
          {body}
        </a>
      ) : (
        <div className={rowClass}>{body}</div>
      )}
    </li>
  );
}

export default function Work() {
  return (
    <Section
      id="work"
      index="02"
      label="Selected work"
      title="Products I’ve helped bring to life."
      intro="Enterprise platforms, client sites and products of my own."
    >
      <ol className="border-y border-line">
        {projects.map((p) => (
          <ProjectRow key={p.title} project={p} />
        ))}
      </ol>
    </Section>
  );
}
