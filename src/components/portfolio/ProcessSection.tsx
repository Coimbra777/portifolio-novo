import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/portfolio/Section";
import { processSteps } from "@/data/processSteps";

export function ProcessSection() {
  return (
    <Section
      id="processo"
      number="09"
      label="Processo"
      title="Processo"
      subtitle="Um fluxo direto, previsível e transparente — do primeiro papo até a entrega evolutiva."
    >
      <ol className="relative grid sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
        <span
          aria-hidden
          className="absolute left-6 right-6 top-6 hidden h-px bg-foreground/60 lg:block"
        />
        {processSteps.map((p, i) => (
          <Reveal as="li" key={p.n} direction="up" delay={i * 70} className="relative">
            <span className="relative inline-flex size-12 items-center justify-center rounded-full bg-accent font-display text-lg font-bold text-ink ring-8 ring-background">
              {p.n}
            </span>
            <h3 className="mt-5 font-display text-xl font-bold">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
