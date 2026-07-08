import { Boxes, Cpu, Database, Network, Workflow, type LucideIcon } from "lucide-react";
import { Section } from "@/components/portfolio/Section";
import { profile } from "@/config/profile";

const aboutHighlights: { icon: LucideIcon; label: string }[] = [
  { icon: Cpu, label: "Backend & APIs REST" },
  { icon: Workflow, label: "Automação & RPA" },
  { icon: Network, label: "Integrações entre sistemas" },
  { icon: Database, label: "SQL, NoSQL, filas e cache" },
  { icon: Boxes, label: "Docker & arquitetura" },
];

export function AboutSection() {
  return (
    <Section
      id="sobre"
      eyebrow="Sobre mim"
      title={
        <>
          Backend, integrações e <span className="gradient-text">resultado para o negócio</span>
        </>
      }
    >
      <div className="grid md:grid-cols-[1.4fr_1fr] gap-10 items-start">
        <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
          <p>
            Sou <span className="text-foreground font-semibold">{profile.name}</span>, desenvolvedor
            com foco em backend e soluções digitais orientadas a resultado. Comecei minha carreira
            automatizando processos manuais e evoluí para o desenvolvimento de integrações, APIs e
            sistemas web.
          </p>
          <p>
            Hoje atuo criando soluções que ajudam empresas a reduzir trabalho operacional, melhorar
            fluxos internos e escalar processos com tecnologia.
          </p>
          <p>
            Meu diferencial é{" "}
            <span className="text-foreground font-semibold">olhar além do código</span>: entendo o
            problema, analiso o fluxo do negócio e proponho soluções técnicas sustentáveis,
            performáticas e fáceis de manter.
          </p>
        </div>
        <div className="glass-card rounded-2xl p-6 space-y-4">
          {aboutHighlights.map((i) => (
            <div key={i.label} className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface-elevated border border-border">
                <i.icon className="h-5 w-5 text-primary" />
              </span>
              <span className="font-medium">{i.label}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
