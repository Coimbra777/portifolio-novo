import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/portfolio/Section";
import { painPoints } from "@/data/painPoints";

export function ProblemsSection() {
  return (
    <Section
      id="ajudar"
      number="08"
      label="Como posso ajudar"
      title="Como ajudo"
      subtitle="Problemas comuns que eu transformo em solução."
      className="bg-surface"
    >
      <div className="grid md:grid-cols-2 gap-4 mb-10">
        {painPoints.map((q, i) => (
          <Reveal key={q} direction="up" delay={i * 50} className="h-full">
            <div className="soft-card flex h-full items-start gap-4 rounded-2xl p-5">
              <span className="quote-mark text-4xl leading-[0.8]">”</span>
              <p className="text-sm md:text-base font-medium">{q}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal direction="up">
        <div className="rounded-[2.5rem] bg-accent p-8 md:p-12 text-ink">
          <p className="font-display text-2xl md:text-4xl font-bold max-w-3xl leading-tight">
            Eu posso ajudar a transformar esses problemas em soluções digitais simples, eficientes e
            escaláveis.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
