import { createFileRoute } from "@tanstack/react-router";
import {
  Code2,
  Cpu,
  Database,
  GitBranch,
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  Network,
  Rocket,
  Server,
  Settings2,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
  ArrowRight,
  CheckCircle2,
  Terminal,
  Layers,
  Boxes,
  FileCode2,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

const services = [
  {
    icon: Code2,
    title: "Desenvolvimento de APIs REST",
    desc: "Criação de APIs seguras, organizadas e escaláveis para sistemas web, aplicativos e integrações.",
  },
  {
    icon: Layers,
    title: "Sistemas web sob medida",
    desc: "Construção de sistemas para gestão, operação, controle interno e automação de processos.",
  },
  {
    icon: Network,
    title: "Integrações entre sistemas",
    desc: "ERPs, CRMs, gateways de pagamento, webhooks, plataformas externas e serviços de terceiros.",
  },
  {
    icon: Workflow,
    title: "Automação de processos",
    desc: "Transformação de tarefas manuais e repetitivas em fluxos automatizados, reduzindo erros.",
  },
  {
    icon: ShieldCheck,
    title: "Consultoria técnica backend",
    desc: "Análise de arquitetura, performance, banco de dados, filas, Docker, APIs e boas práticas.",
  },
  {
    icon: Settings2,
    title: "Manutenção e evolução",
    desc: "Correção de bugs, melhorias de performance, refatorações e modernização de sistemas.",
  },
];

const techStack = [
  {
    category: "Backend",
    icon: Server,
    items: ["Node.js", "NestJS", "TypeScript", "PHP", "Laravel", "Express"],
  },
  {
    category: "Frontend",
    icon: FileCode2,
    items: ["JavaScript", "TypeScript", "Vue.js"],
  },
  {
    category: "Banco de Dados",
    icon: Database,
    items: ["MySQL", "SQL Server", "MongoDB", "PostgreSQL"],
  },
  {
    category: "DevOps & Infra",
    icon: Boxes,
    items: ["Docker", "Nginx", "Git / GitHub", "CI/CD"],
  },
  {
    category: "Mensageria & Cache",
    icon: Zap,
    items: ["RabbitMQ", "Redis", "Filas assíncronas"],
  },
  {
    category: "APIs & Integrações",
    icon: Network,
    items: ["REST", "Webhooks", "OAuth / JWT", "RPA"],
  },
];

const projects = [
  {
    name: "Sistema de gestão com auditoria",
    problem: "Empresa precisava rastrear todas as ações críticas do sistema com processamento assíncrono.",
    desc: "Backend com autenticação, CRUDs completos, auditoria de eventos, mensageria com RabbitMQ e persistência híbrida SQL + NoSQL.",
    tech: ["NestJS", "TypeORM", "SQL Server", "RabbitMQ", "MongoDB", "Docker"],
  },
  {
    name: "Analisador de risco de fornecedores",
    problem: "Análise manual de documentos era lenta e sujeita a erros de classificação.",
    desc: "Sistema fullstack com cadastro de empresas, upload de PDFs, extração de texto e classificação automática de risco por regras de negócio.",
    tech: ["NestJS", "Vue.js", "MySQL", "Docker", "JWT"],
  },
  {
    name: "API de chamados e usuários",
    problem: "Necessidade de uma API robusta, testável e bem documentada para múltiplos clientes.",
    desc: "API REST organizada em camadas, com validações, testes automatizados, documentação de endpoints e deploy containerizado.",
    tech: ["Node.js", "Express", "TypeScript", "Prisma", "Jest", "Docker"],
  },
  {
    name: "Gateway com Nginx e microsserviços",
    problem: "Múltiplas aplicações precisando compartilhar um único ponto de entrada seguro.",
    desc: "Ambiente com Nginx como proxy reverso para aplicações Laravel e NestJS, orquestrado com Docker Compose e redes internas isoladas.",
    tech: ["Nginx", "Docker", "Laravel", "NestJS", "MySQL", "Redis"],
  },
];

const painPoints = [
  "Sua empresa ainda depende de planilhas manuais?",
  "Seu time perde tempo com processos repetitivos?",
  "Seu sistema está lento ou difícil de manter?",
  "Você precisa integrar ferramentas diferentes?",
  "Precisa criar uma API, dashboard ou sistema interno?",
  "Precisa evoluir um sistema existente com segurança?",
];

const process = [
  { n: "01", title: "Diagnóstico", desc: "Entendimento do problema, contexto do negócio e objetivos do projeto." },
  { n: "02", title: "Planejamento", desc: "Definição da solução, tecnologias, escopo, prazos e prioridades." },
  { n: "03", title: "Desenvolvimento", desc: "Implementação com boas práticas, organização de código e comunicação contínua." },
  { n: "04", title: "Validação", desc: "Testes, ajustes, revisão com o cliente e garantia de funcionamento." },
  { n: "05", title: "Entrega & evolução", desc: "Deploy, documentação, suporte inicial e melhorias futuras." },
];

const differentials = [
  { icon: Rocket, title: "Visão de negócio", desc: "Olho o problema antes do código — entrego solução, não só implementação." },
  { icon: Workflow, title: "Automação & integração", desc: "Experiência prática conectando sistemas e eliminando trabalho manual." },
  { icon: Server, title: "Backend sólido", desc: "Foco em APIs, arquitetura, filas, performance e escalabilidade." },
  { icon: MessageCircle, title: "Comunicação clara", desc: "Alinhamento contínuo, entregas previsíveis e sem surpresas." },
  { icon: Code2, title: "Código sustentável", desc: "Organização, testes e boas práticas para o projeto durar." },
  { icon: ShieldCheck, title: "Performance & segurança", desc: "Preocupação real com carga, latência e proteção de dados." },
];

const nav = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#tech", label: "Tecnologias" },
  { href: "#projetos", label: "Projetos" },
  { href: "#processo", label: "Processo" },
  { href: "#contato", label: "Contato" },
];

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
        <div className="section-container flex items-center justify-between h-16">
          <a href="#top" className="flex items-center gap-2 font-mono font-bold text-lg">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg" style={{ background: "var(--gradient-primary)" }}>
              <Terminal className="h-4 w-4 text-primary-foreground" />
            </span>
            <span className="gradient-text">gabriel.dev</span>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="relative hover:text-foreground transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:origin-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100">
                {n.label}
              </a>
            ))}
          </nav>
          <a href="#contato" className="btn-primary group hidden sm:inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold">
            Orçamento <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </header>

      {/* HERO */}
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
              <span className="gradient-text-animated">sistemas, APIs e automações</span>{" "}
              para empresas que precisam ganhar eficiência.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Ajudo empresas, startups e profissionais a transformarem processos manuais em soluções digitais escaláveis, integradas e seguras.
            </p>
            <p className="mt-4 font-mono text-sm text-primary">
              Backend · Fullstack · APIs · Integrações · Automação<span className="caret-blink ml-0.5">▍</span>
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contato" className="btn-primary group inline-flex items-center gap-2 rounded-lg px-6 py-3 font-semibold">
                Solicitar orçamento <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a href="#projetos" className="btn-outline inline-flex items-center gap-2 rounded-lg px-6 py-3 font-semibold">
                Ver projetos
              </a>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
              {[
                { k: "5+", v: "Anos de experiência" },
                { k: "20+", v: "Projetos entregues" },
                { k: "100%", v: "Foco em resultado" },
              ].map((s) => (
                <div key={s.v}>
                  <div className="text-2xl md:text-3xl font-bold gradient-text">{s.k}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.v}</div>
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
                <span className="ml-3 font-mono text-xs text-muted-foreground">api/orders.controller.ts</span>
              </div>
              <pre className="font-mono text-[13px] leading-relaxed text-muted-foreground overflow-x-auto">
{`@Controller('orders')
export class OrdersController {
  constructor(
    private readonly orders: `}<span className="text-primary">OrdersService</span>{`,
    private readonly queue: `}<span className="text-primary">RabbitMQService</span>{`,
  ) {}

  @Post()
  async create(@Body() dto: CreateOrderDto) {
    const order = await this.orders.create(dto);
    await this.queue.emit(`}<span className="text-accent">'order.created'</span>{`, order);
    return { status: `}<span className="text-accent">'ok'</span>{`, order };
  }
}`}
              </pre>
              <div className="mt-5 flex flex-wrap gap-2">
                {["NestJS", "RabbitMQ", "Docker", "TypeScript"].map((t) => (
                  <span key={t} className="font-mono text-xs rounded-md border border-border bg-surface px-2 py-1 text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div
              className="absolute -inset-4 -z-10 rounded-3xl blur-3xl opacity-40"
              style={{ background: "var(--gradient-primary)" }}
            />
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <Section id="sobre" eyebrow="Sobre mim" title={<>Backend, integrações e <span className="gradient-text">resultado para o negócio</span></>}>
        <div className="grid md:grid-cols-[1.4fr_1fr] gap-10 items-start">
          <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
            <p>
              Sou <span className="text-foreground font-semibold">Gabriel Coimbra</span>, desenvolvedor com foco em backend e soluções digitais orientadas a resultado. Comecei minha carreira automatizando processos manuais e evoluí para o desenvolvimento de integrações, APIs e sistemas web.
            </p>
            <p>
              Hoje atuo criando soluções que ajudam empresas a reduzir trabalho operacional, melhorar fluxos internos e escalar processos com tecnologia.
            </p>
            <p>
              Meu diferencial é <span className="text-foreground font-semibold">olhar além do código</span>: entendo o problema, analiso o fluxo do negócio e proponho soluções técnicas sustentáveis, performáticas e fáceis de manter.
            </p>
          </div>
          <div className="glass-card rounded-2xl p-6 space-y-4">
            {[
              { icon: Cpu, label: "Backend & APIs REST" },
              { icon: Workflow, label: "Automação & RPA" },
              { icon: Network, label: "Integrações entre sistemas" },
              { icon: Database, label: "SQL, NoSQL, filas e cache" },
              { icon: Boxes, label: "Docker & arquitetura" },
            ].map((i) => (
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

      {/* SERVIÇOS */}
      <Section id="servicos" eyebrow="Serviços" title={<>O que eu <span className="gradient-text">entrego</span></>}
        subtitle="Do diagnóstico à entrega: soluções técnicas sob medida para empresas e clientes que querem resultado.">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <Reveal key={s.title} direction="up" delay={i * 80}>
              <div className="glass-card rounded-2xl p-6 group hover-lift shimmer-border hover:border-primary/60 h-full">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl mb-4 icon-pop" style={{ background: "var(--gradient-primary)" }}>
                  <s.icon className="h-6 w-6 text-primary-foreground" />
                </span>
                <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* TECH */}
      <Section id="tech" eyebrow="Stack" title={<>Tecnologias que <span className="gradient-text">domino</span></>}
        subtitle="Ferramentas escolhidas pela robustez, ecossistema e adequação ao problema — não por moda.">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {techStack.map((t, i) => (
            <Reveal key={t.category} direction="up" delay={i * 70}>
              <div className="glass-card rounded-2xl p-6 group hover-lift h-full">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-surface-elevated border border-border icon-pop">
                    <t.icon className="h-5 w-5 text-primary" />
                  </span>
                  <h3 className="font-semibold">{t.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {t.items.map((it) => (
                    <span key={it} className="font-mono text-xs rounded-md border border-border bg-surface px-2.5 py-1 text-muted-foreground hover:text-primary hover:border-primary/60 hover:-translate-y-0.5 transition-all duration-200">
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* PROJETOS */}
      <Section id="projetos" eyebrow="Projetos & Cases" title={<>Trabalhos que resolvem <span className="gradient-text">problemas reais</span></>}
        subtitle="Uma amostra dos tipos de sistema, integração e arquitetura que já desenvolvi.">
        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <Reveal key={p.name} direction={i % 2 === 0 ? "right" : "left"} delay={(i % 2) * 80}>
              <article className="glass-card rounded-2xl p-7 flex flex-col group hover-lift shimmer-border hover:border-primary/60 h-full">
                <div className="flex items-start gap-3 mb-3">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg icon-pop" style={{ background: "var(--gradient-primary)" }}>
                    <Sparkles className="h-5 w-5 text-primary-foreground" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold">{p.name}</h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      <span className="text-primary font-semibold">Problema: </span>{p.problem}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.tech.map((t) => (
                    <span key={t} className="font-mono text-[11px] rounded-md border border-border bg-surface px-2 py-0.5 text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex flex-wrap gap-2">
                  <a href="#contato" className="btn-outline group/btn inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium">
                    Ver detalhes <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </a>
                  <a href="https://github.com/" target="_blank" rel="noreferrer" className="btn-outline inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium">
                    <Github className="h-3 w-3" /> Ver código
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* COMO POSSO AJUDAR */}
      <Section id="ajudar" eyebrow="Como posso ajudar" title={<>Problemas que eu <span className="gradient-text">transformo em solução</span></>}>
        <div className="grid md:grid-cols-2 gap-4 mb-10">
          {painPoints.map((q, i) => (
            <Reveal key={q} direction="up" delay={i * 60}>
              <div className="glass-card rounded-xl p-5 flex items-start gap-3 hover-lift h-full">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                <p className="text-sm md:text-base text-foreground/90">{q}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal direction="scale">
          <div className="glass-card rounded-2xl p-8 md:p-10 text-center relative overflow-hidden">
            <div className="absolute inset-0 -z-10 opacity-40" style={{ background: "var(--gradient-hero)" }} />
            <p className="text-xl md:text-2xl font-semibold max-w-3xl mx-auto leading-snug">
              Eu posso ajudar a transformar esses problemas em soluções digitais{" "}
              <span className="gradient-text-animated">simples, eficientes e escaláveis</span>.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* PROCESSO */}
      <Section id="processo" eyebrow="Processo" title={<>Como eu <span className="gradient-text">trabalho</span></>}
        subtitle="Um fluxo direto, previsível e transparente — do primeiro papo até a entrega evolutiva.">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          {process.map((p, i) => (
            <Reveal key={p.n} direction="up" delay={i * 100}>
              <div className="glass-card rounded-2xl p-6 relative hover-lift h-full">
                <div className="font-mono text-3xl font-bold gradient-text mb-3">{p.n}</div>
                <h3 className="font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* DIFERENCIAIS */}
      <Section id="diferenciais" eyebrow="Diferenciais" title={<>Por que trabalhar <span className="gradient-text">comigo</span></>}>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {differentials.map((d, i) => (
            <Reveal key={d.title} direction="up" delay={i * 70}>
              <div className="glass-card rounded-2xl p-6 group hover-lift hover:border-primary/60 h-full">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-surface-elevated border border-border mb-4 icon-pop">
                  <d.icon className="h-5 w-5 text-primary" />
                </span>
                <h3 className="font-semibold mb-2">{d.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section id="contato" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-60" style={{ background: "var(--gradient-hero)" }} />
        <div className="section-container">
          <div className="glass-card rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
            <div
              className="absolute -top-20 -right-20 h-64 w-64 rounded-full blur-3xl opacity-30"
              style={{ background: "var(--gradient-primary)" }}
            />
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs font-medium text-muted-foreground mb-6">
              <Sparkles className="h-3.5 w-3.5 text-primary" /> Vamos conversar
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight max-w-3xl mx-auto">
              Vamos transformar sua ideia ou processo em uma{" "}
              <span className="gradient-text">solução digital?</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">
              Entre em contato para conversar sobre seu projeto, entender suas necessidades e encontrar a melhor solução técnica para o seu negócio.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noreferrer"
                className="btn-primary inline-flex items-center gap-2 rounded-lg px-5 py-3 font-semibold"
              >
                <MessageCircle className="h-4 w-4" /> Falar no WhatsApp
              </a>
              <a href="mailto:contato@gabrielcoimbra.dev" className="btn-outline inline-flex items-center gap-2 rounded-lg px-5 py-3 font-semibold">
                <Mail className="h-4 w-4" /> Enviar e-mail
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="btn-outline inline-flex items-center gap-2 rounded-lg px-5 py-3 font-semibold">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="btn-outline inline-flex items-center gap-2 rounded-lg px-5 py-3 font-semibold">
                <Github className="h-4 w-4" /> GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-10">
        <div className="section-container grid md:grid-cols-[1fr_auto] gap-6 items-center">
          <div>
            <div className="flex items-center gap-2 font-mono font-bold text-lg">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg" style={{ background: "var(--gradient-primary)" }}>
                <Terminal className="h-4 w-4 text-primary-foreground" />
              </span>
              <span className="gradient-text">Gabriel Coimbra</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Desenvolvedor Backend / Fullstack · Desenvolvido com foco em performance, usabilidade e resultado.
            </p>
          </div>
          <div className="flex items-center gap-3">
            {[
              { href: "https://github.com/", icon: Github, label: "GitHub" },
              { href: "https://linkedin.com/", icon: Linkedin, label: "LinkedIn" },
              { href: "https://wa.me/5500000000000", icon: MessageCircle, label: "WhatsApp" },
              { href: "mailto:contato@gabrielcoimbra.dev", icon: Mail, label: "E-mail" },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                aria-label={l.label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface hover:border-primary hover:text-primary transition-colors"
              >
                <l.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div className="section-container mt-6 pt-6 border-t border-border text-xs text-muted-foreground flex flex-wrap justify-between gap-3">
          <span>© {new Date().getFullYear()} Gabriel Coimbra. Todos os direitos reservados.</span>
          <span className="font-mono flex items-center gap-1.5">
            <GitBranch className="h-3 w-3" /> main · v1.0.0
          </span>
        </div>
      </footer>
    </div>
  );
}

function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
}: {
  id: string;
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="py-20 md:py-28 scroll-mt-20">
      <div className="section-container">
        <Reveal direction="up" className="max-w-2xl mb-12">
          <div className="font-mono text-xs uppercase tracking-widest text-primary mb-3">
            // {eyebrow}
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{subtitle}</p>
          )}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
