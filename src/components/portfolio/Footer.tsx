import { Github, GitBranch, Linkedin, Mail, MessageCircle, Terminal } from "lucide-react";
import { buildWhatsAppUrl, mailtoUrl, profile, whatsappMessages } from "@/config/profile";

const socialLinks = [
  { href: profile.githubUrl, icon: Github, label: "GitHub" },
  { href: profile.linkedinUrl, icon: Linkedin, label: "LinkedIn" },
  { href: buildWhatsAppUrl(whatsappMessages.general), icon: MessageCircle, label: "WhatsApp" },
  { href: mailtoUrl, icon: Mail, label: "E-mail" },
];

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="section-container grid md:grid-cols-[1fr_auto] gap-6 items-center">
        <div>
          <div className="flex items-center gap-2 font-mono font-bold text-lg">
            <span
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg"
              style={{ background: "var(--gradient-primary)" }}
            >
              <Terminal className="h-4 w-4 text-primary-foreground" />
            </span>
            <span className="gradient-text">{profile.name}</span>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            {profile.role} · Desenvolvido com foco em performance, usabilidade e resultado.
          </p>
        </div>
        <div className="flex items-center gap-3">
          {socialLinks.map((l) => (
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
        <span>
          © {new Date().getFullYear()} {profile.name}. Todos os direitos reservados.
        </span>
        <span className="font-mono flex items-center gap-1.5">
          <GitBranch className="h-3 w-3" /> main · {profile.siteVersion}
        </span>
      </div>
    </footer>
  );
}
