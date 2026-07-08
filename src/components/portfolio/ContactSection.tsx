import { Github, Linkedin, Mail, MessageCircle, Sparkles } from "lucide-react";
import { buildWhatsAppUrl, gmailComposeUrl, profile, whatsappMessages } from "@/config/profile";

export function ContactSection() {
  return (
    <section id="contato" className="py-24 relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10 opacity-60"
        style={{ background: "var(--gradient-hero)" }}
      />
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
            Entre em contato para conversar sobre seu projeto, entender suas necessidades e
            encontrar a melhor solução técnica para o seu negócio.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <a
              href={buildWhatsAppUrl(whatsappMessages.budget)}
              target="_blank"
              rel="noreferrer"
              className="btn-primary inline-flex items-center gap-2 rounded-lg px-5 py-3 font-semibold"
            >
              <MessageCircle className="h-4 w-4" /> Solicitar orçamento no WhatsApp
            </a>
            <a
              href={gmailComposeUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-outline inline-flex items-center gap-2 rounded-lg px-5 py-3 font-semibold"
            >
              <Mail className="h-4 w-4" /> Enviar e-mail
            </a>
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-outline inline-flex items-center gap-2 rounded-lg px-5 py-3 font-semibold"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-outline inline-flex items-center gap-2 rounded-lg px-5 py-3 font-semibold"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
