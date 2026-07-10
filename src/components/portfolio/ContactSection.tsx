import { Github, Linkedin, Mail, MessageCircle, Sparkles } from "lucide-react";
import { buildWhatsAppUrl, gmailComposeUrl, profile, whatsappMessages } from "@/config/profile";

const contactList = [
  { icon: Mail, label: "E-mail", value: profile.email, href: gmailComposeUrl },
  { icon: Linkedin, label: "LinkedIn", value: "/in/gcoimbraa", href: profile.linkedinUrl },
  { icon: Github, label: "GitHub", value: "@Coimbra777", href: profile.githubUrl },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Fale agora",
    href: buildWhatsAppUrl(whatsappMessages.general),
  },
];

export function ContactSection() {
  return (
    <section id="contato" className="py-24 relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10 opacity-60"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="section-container">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-soft px-3 py-1 text-xs font-medium text-primary mb-6">
            <Sparkles className="h-3.5 w-3.5" /> Vamos conversar
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Vamos transformar sua ideia ou processo em uma{" "}
            <span className="gradient-text">solução digital?</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Entre em contato para conversar sobre seu projeto, entender suas necessidades e
            encontrar a melhor solução técnica para o seu negócio.
          </p>
        </div>

        <div className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <span className="dot-accent -top-3 -right-3 hidden sm:block" />
          <span className="dot-coral -bottom-3 -left-3 hidden sm:block" />
          <div className="grid md:grid-cols-2 gap-10 relative">
            <div>
              <h3 className="text-lg font-semibold mb-1">Fale comigo</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Escolha o canal que preferir — respondo rápido.
              </p>
              <ul className="space-y-4">
                {contactList.map((c) => (
                  <li key={c.label}>
                    <a
                      href={c.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 group"
                    >
                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-soft text-primary">
                        <c.icon className="h-4 w-4" />
                      </span>
                      <span>
                        <span className="block text-xs text-muted-foreground">{c.label}</span>
                        <span className="block text-sm font-medium group-hover:text-primary transition-colors">
                          {c.value}
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col justify-center gap-3">
              <a
                href={buildWhatsAppUrl(whatsappMessages.budget)}
                target="_blank"
                rel="noreferrer"
                className="btn-primary inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 font-semibold"
              >
                <MessageCircle className="h-4 w-4" /> Solicitar orçamento no WhatsApp
              </a>
              <a
                href={gmailComposeUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-outline inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 font-semibold"
              >
                <Mail className="h-4 w-4" /> Enviar e-mail
              </a>
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-outline inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 font-semibold"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-outline inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 font-semibold"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
