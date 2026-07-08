import { ArrowRight, Boxes, Network, Server } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const heroPillars: { icon: LucideIcon; label: string }[] = [
  { icon: Server, label: "Backend: APIs, integrações e automações" },
  { icon: Network, label: "Fullstack: sistemas web sob medida" },
  { icon: Boxes, label: "DevOps: Docker, filas e deploy" },
];

export function HeroSection() {
  return (
    <section id="top" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div
        className="absolute inset-0 -z-10 opacity-70"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div
        className="absolute inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-foreground) 1px, transparent 1px), linear-gradient(90deg, var(--color-foreground) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="section-container grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs font-medium text-muted-foreground mb-6">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse-glow" />
            Disponível para novos projetos
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05]">
            Desenvolvimento de{" "}
            <span className="gradient-text-animated">sistemas, APIs e automações</span> para
            empresas que precisam ganhar eficiência.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            Ajudo empresas, startups e profissionais a transformarem processos manuais em soluções
            digitais escaláveis, integradas e seguras.
          </p>
          <p className="mt-4 font-mono text-sm text-primary">
            Backend · Fullstack · APIs · Integrações · Automação
            <span className="caret-blink ml-0.5">▍</span>
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contato"
              className="btn-primary group inline-flex items-center gap-2 rounded-lg px-6 py-3 font-semibold"
            >
              Solicitar orçamento{" "}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#projetos"
              className="btn-outline inline-flex items-center gap-2 rounded-lg px-6 py-3 font-semibold"
            >
              Ver projetos
            </a>
          </div>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-xl">
            {heroPillars.map((p) => (
              <div key={p.label} className="flex items-start gap-2">
                <p.icon className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <div className="text-xs text-muted-foreground leading-snug">{p.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero code card */}
        <div className="relative animate-fade-up" style={{ animationDelay: "150ms" }}>
          <div className="glass-card rounded-2xl p-6 relative overflow-hidden hover-tilt animate-float">
            <div
              className="pointer-events-none absolute inset-0 opacity-40"
              style={{ background: "var(--gradient-hero)" }}
            />
            <div className="relative">
              <div className="flex items-center gap-2 mb-4">
                <span className="h-3 w-3 rounded-full bg-destructive/70" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
                <span className="h-3 w-3 rounded-full bg-green-500/70" />
                <span className="ml-3 font-mono text-xs text-muted-foreground">
                  api/orders.controller.ts
                </span>
              </div>
              <pre className="font-mono text-[13px] leading-relaxed text-muted-foreground overflow-x-auto">
                {`@Controller('orders')
export class OrdersController {
  constructor(
    private readonly orders: `}
                <span className="text-primary">OrdersService</span>
                {`,
    private readonly queue: `}
                <span className="text-primary">RabbitMQService</span>
                {`,
  ) {}

  @Post()
  async create(@Body() dto: CreateOrderDto) {
    const order = await this.orders.create(dto);
    await this.queue.emit(`}
                <span className="text-accent">'order.created'</span>
                {`, order);
    return { status: `}
                <span className="text-accent">'ok'</span>
                {`, order };
  }
}`}
              </pre>
              <div className="mt-5 flex flex-wrap gap-2">
                {["NestJS", "RabbitMQ", "Docker", "TypeScript"].map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs rounded-md border border-border bg-surface px-2 py-1 text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div
            className="absolute -inset-4 -z-10 rounded-3xl blur-3xl opacity-40"
            style={{ background: "var(--gradient-primary)" }}
          />
        </div>
      </div>
    </section>
  );
}
