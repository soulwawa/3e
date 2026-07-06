import { profile } from "@/data/profile";
import { Section } from "./Section";
import { Icon } from "./Icon";

export default function Contact() {
  return (
    <Section id="contact">
      <div className="rounded-3xl border border-border bg-card px-6 py-14 text-center sm:px-12">
        <h2 className="text-balance text-2xl font-bold tracking-tight sm:text-3xl">
          함께 문제를 풀 사람을 찾고 계신가요?
        </h2>
        <p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted">
          기획이 비어 있어도, 문서가 없어도 들어가 끝까지 책임지는 엔지니어가
          필요하시면 편하게 연락 주세요.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {profile.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.icon === "mail" ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
            >
              <Icon name={s.icon} className="h-4 w-4" />
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
