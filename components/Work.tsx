import { featuredWork, otherWork, education } from "@/data/work";
import { Section, SectionHeading } from "./Section";
import OtherWork from "./OtherWork";

export default function Work() {
  return (
    <Section id="work">
      <SectionHeading>Work Experience</SectionHeading>
      <div className="space-y-5">
        {featuredWork.map((w) => (
          <article
            key={w.company}
            className="rounded-2xl border border-border bg-card p-6 sm:p-8"
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-lg font-bold">
                {w.company}
                <span className="font-normal text-muted"> · {w.role}</span>
              </h3>
              <span className="shrink-0 text-sm text-muted">{w.period}</span>
            </div>
            <p className="mt-1 text-sm font-medium text-accent">{w.project}</p>

            <p className="mt-4 leading-relaxed text-muted">
              <span className="font-semibold text-foreground">맡은 문제 </span>
              {w.problem}
            </p>
            <ul className="mt-4 space-y-2">
              {w.did.map((d, i) => (
                <li key={i} className="flex gap-2 leading-relaxed">
                  <span className="select-none text-accent">–</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
            {w.result && (
              <p className="mt-5 rounded-xl bg-accent/10 px-4 py-3 text-sm leading-relaxed">
                <span className="font-semibold">결과 </span>
                {w.result}
              </p>
            )}
          </article>
        ))}
      </div>

      <OtherWork items={otherWork} />

      <div className="mt-12">
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted">
          Education
        </h3>
        <ul className="space-y-2 text-sm text-muted">
          {education.map((e) => (
            <li key={e}>{e}</li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
