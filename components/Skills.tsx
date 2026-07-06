import { skillGroups, domains } from "@/data/skills";
import { Section, SectionHeading } from "./Section";

export default function Skills() {
  return (
    <Section id="skills">
      <SectionHeading>Skills &amp; Domains</SectionHeading>
      <div className="grid gap-6 sm:grid-cols-2">
        {skillGroups.map((g) => (
          <div
            key={g.title}
            className="rounded-2xl border border-border bg-card p-6"
          >
            <h3 className="mb-4 font-semibold">{g.title}</h3>
            <ul className="flex flex-wrap gap-2">
              {g.items.map((it) => (
                <li
                  key={it}
                  className="rounded-full border border-border bg-background px-3 py-1 text-sm text-muted"
                >
                  {it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h3 className="mb-4 mt-10 text-sm font-semibold uppercase tracking-wider text-muted">
        Domains
      </h3>
      <ul className="flex flex-wrap gap-2">
        {domains.map((d) => (
          <li
            key={d}
            className="rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent"
          >
            {d}
          </li>
        ))}
      </ul>
    </Section>
  );
}
