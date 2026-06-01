import { profile } from "@/data/profile";
import { Icon } from "./Icon";

export default function Hero() {
  return (
    <section className="mx-auto max-w-content px-6 pb-8 pt-20 sm:pt-28">
      <p className="mb-4 text-sm font-semibold tracking-wide text-accent">
        {profile.role}
      </p>
      <h1 className="max-w-3xl text-balance text-3xl font-bold leading-tight tracking-tight sm:text-5xl sm:leading-[1.15]">
        {profile.headline}
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
        {profile.subline}
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
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

      <dl className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
        {profile.stats.map((stat) => (
          <div key={stat.label} className="bg-background p-6">
            <dd className="text-3xl font-bold tracking-tight text-accent sm:text-4xl">
              {stat.value}
            </dd>
            <dt className="mt-2 font-semibold">{stat.label}</dt>
            <p className="mt-1 text-sm text-muted">{stat.note}</p>
          </div>
        ))}
      </dl>
    </section>
  );
}
