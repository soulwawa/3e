import { profile } from "@/data/profile";
import { Icon } from "./Icon";

export default function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-content flex-col items-center gap-4 px-6 py-12 text-center">
        <div className="flex items-center gap-5">
          {profile.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="text-muted transition-colors hover:text-foreground"
            >
              <Icon name={s.icon} className="h-5 w-5" />
            </a>
          ))}
        </div>
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} {profile.name} ({profile.handle}). All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}
