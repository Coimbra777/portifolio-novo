import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/portfolio/Section";
import { services } from "@/data/services";

/** Primeira palavra em negrito, resto normal — como "Graphic Design" na referência. */
function SplitTitle({ text }: { text: string }) {
  const [first, ...rest] = text.split(" ");
  return (
    <>
      <strong className="font-bold">{first}</strong> {rest.join(" ")}
    </>
  );
}

export function ServicesSection() {
  return (
    <Section
      id="servicos"
      number="04"
      label="Serviços"
      title="Serviços"
      ghost
      subtitle="Do diagnóstico à entrega: soluções técnicas sob medida para empresas e clientes que querem resultado."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <Reveal key={s.title} direction="up" delay={i * 60} className="h-full">
            <div className="group h-full overflow-hidden rounded-4xl bg-accent text-ink transition-transform duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-center pt-10 pb-8">
                <s.icon
                  className="h-16 w-16 transition-transform duration-300 group-hover:scale-110"
                  strokeWidth={1.6}
                />
              </div>
              <div className="bg-card text-card-foreground px-5 py-3 text-center text-[0.95rem]">
                <SplitTitle text={s.title} />
              </div>
              <p className="px-6 pt-4 pb-6 text-center text-sm leading-relaxed text-ink/80">
                {s.desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
