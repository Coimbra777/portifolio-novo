import { Github, Linkedin, Mail, MessageCircle, Terminal } from "lucide-react";
import { buildWhatsAppUrl, gmailComposeUrl, profile, whatsappMessages } from "@/config/profile";
import { nav } from "@/data/nav";

const socialLinkClassName =
  "inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card hover:border-primary hover:text-primary transition-colors";

const socialLinks = [
  { href: profile.githubUrl, icon: Github, label: "GitHub" },
  { href: profile.linkedinUrl, icon: Linkedin, label: "LinkedIn" },
  { href: buildWhatsAppUrl(whatsappMessages.general), icon: MessageCircle, label: "WhatsApp" },
  { href: gmailComposeUrl, icon: Mail, label: "E-mail" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface py-14">
      <div className="section-container grid md:grid-cols-3 gap-10">
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
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            {profile.role} · Desenvolvido com foco em performance, usabilidade e resultado.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-4">Navegação</h3>
          <ul className="space-y-2.5">
            {nav.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-4">Redes</h3>
          <div className="flex items-center gap-3">
            {socialLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                aria-label={l.label}
                className={socialLinkClassName}
              >
                <l.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
