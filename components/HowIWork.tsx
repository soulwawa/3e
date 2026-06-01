import { profile } from "@/data/profile";
import { Section, SectionHeading } from "./Section";

export default function HowIWork() {
  return (
    <Section id="about">
      <SectionHeading>How I work</SectionHeading>
      <ul className="grid gap-6 sm:grid-cols-3">
        {profile.howIWork.map((line, i) => (
          <li key={i} className="rounded-2xl border border-border bg-card p-6">
            <span className="text-sm font-bold text-accent">
              0{i + 1}
            </span>
            <p className="mt-3 leading-relaxed">{line}</p>
          </li>
        ))}
      </ul>
      <p className="mt-10 max-w-2xl leading-relaxed text-muted">
        {profile.intro}
      </p>
    </Section>
  );
}
