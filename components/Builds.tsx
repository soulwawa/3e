import Link from "next/link";
import { featuredBuilds } from "@/data/builds";
import { Section, SectionHeading } from "./Section";
import { Icon } from "./Icon";

export default function Builds() {
  return (
    <Section id="builds">
      <SectionHeading>Featured Builds</SectionHeading>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {featuredBuilds.map((b) => (
          <Link
            key={b.slug}
            href={`/projects/${b.slug}`}
            className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent"
          >
            <div className="flex items-start justify-between">
              <h3 className="text-lg font-bold">{b.title}</h3>
              <Icon
                name="arrow"
                className="h-5 w-5 text-muted transition-colors group-hover:text-accent"
              />
            </div>
            <p className="mt-1 text-sm text-muted">{b.tagline}</p>
            <p className="mt-4 text-sm font-medium text-accent">{b.result}</p>
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {b.tags.map((t) => (
                <li
                  key={t}
                  className="rounded-md border border-border px-2 py-0.5 text-xs text-muted"
                >
                  {t}
                </li>
              ))}
            </ul>
          </Link>
        ))}
      </div>
    </Section>
  );
}
