import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/portfolio/Section";
import { experience, type ExperienceItem } from "@/data/experience";

function ExperienceEntry({ e }: { e: ExperienceItem }) {
  return (
    <div className="relative pl-7 pb-10 last:pb-0">
      <span className="absolute -left-1.75 top-1.5 size-3 rounded-full bg-accent ring-4 ring-surface" />
      <h3 className="font-display text-xl font-bold leading-tight">{e.role}</h3>
      <p className="mt-1 text-sm font-semibold">
        {e.companyUrl ? (
          <a
            href={e.companyUrl}
            target="_blank"
            rel="noreferrer"
            className="underline decoration-accent decoration-2 underline-offset-4"
          >
            {e.company}
          </a>
        ) : (
          e.company
        )}
        <span className="font-normal text-muted-foreground"> · {e.location}</span>
      </p>
      <p className="mt-0.5 text-xs italic text-muted-foreground">{e.period}</p>
      <ul className="mt-4 space-y-1.5">
        {e.highlights.map((h) => (
          <li key={h} className="flex items-start gap-2.5 text-sm text-foreground/85">
            <span className="mt-2 h-1 w-3 shrink-0 rounded-full bg-accent" />
            {h}
          </li>
        ))}
      </ul>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {e.stack.map((t) => (
          <span key={t} className="chip">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export function ExperienceSection() {
  const half = Math.ceil(experience.length / 2);
  const columns = [experience.slice(0, half), experience.slice(half)];

  return (
    <Section
      id="experiencia"
      number="03"
      label="Experiência"
      title="Trajetória"
      subtitle="Uma trajetória construída entre backend, integrações e sistemas web para diferentes contextos e escalas."
      className="bg-surface"
    >
      <div className="grid md:grid-cols-2 gap-x-14 gap-y-10">
        {columns.map((col, ci) => (
          <Reveal key={ci} direction="up" delay={ci * 100}>
            <div className="border-l-2 border-foreground/80">
              {col.map((e) => (
                <ExperienceEntry key={`${e.company}-${e.period}`} e={e} />
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
