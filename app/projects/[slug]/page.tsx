import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getPostBySlug,
  getProjectSlugs,
  markdownToHtml,
} from "@/lib/api";

type Skill = {
  backend?: string;
  frontend?: string;
  operation?: string;
};

type Project = {
  slug?: string;
  title?: string;
  site?: string;
  period?: string;
  skill?: Skill;
  images?: string[];
  link?: string;
  content?: string;
};

const FIELDS = [
  "title",
  "site",
  "period",
  "skill",
  "slug",
  "images",
  "link",
  "content",
];

export function generateStaticParams() {
  return getProjectSlugs()
    .filter((s) => s.endsWith(".md"))
    .map((slug) => ({ slug: slug.replace(/\.md$/, "") }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const project = getPostBySlug(params.slug, ["title"]) as unknown as Project;
  if (!project.title) return {};
  return {
    title: project.title,
    description: `${project.title} — 고석만(3ES) 프로젝트`,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getPostBySlug(params.slug, FIELDS) as unknown as Project;
  if (!project.slug) notFound();

  const content = await markdownToHtml(project.content || "");
  const skill = project.skill || {};
  const images = project.images || [];

  return (
    <article className="mx-auto max-w-content px-6 py-16 sm:py-20">
      <Link
        href="/#builds"
        className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
      >
        ← Builds
      </Link>

      <h1 className="mt-6 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
        {project.title}
      </h1>
      {project.period && (
        <p className="mt-3 text-muted">프로젝트 기간 · {project.period}</p>
      )}
      {project.site && (
        <a
          href={project.site}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block font-medium text-accent hover:underline"
        >
          {project.site}
        </a>
      )}

      {(skill.backend || skill.frontend || skill.operation || project.link) && (
        <dl className="mt-8 grid gap-3 rounded-2xl border border-border bg-card p-6 text-sm">
          {skill.backend && (
            <div className="flex flex-col gap-1 sm:flex-row sm:gap-3">
              <dt className="w-24 shrink-0 font-semibold">Backend</dt>
              <dd className="text-muted">{skill.backend}</dd>
            </div>
          )}
          {skill.frontend && (
            <div className="flex flex-col gap-1 sm:flex-row sm:gap-3">
              <dt className="w-24 shrink-0 font-semibold">Frontend</dt>
              <dd className="text-muted">{skill.frontend}</dd>
            </div>
          )}
          {skill.operation && (
            <div className="flex flex-col gap-1 sm:flex-row sm:gap-3">
              <dt className="w-24 shrink-0 font-semibold">Operation</dt>
              <dd className="text-muted">{skill.operation}</dd>
            </div>
          )}
          {project.link && (
            <div className="flex flex-col gap-1 sm:flex-row sm:gap-3">
              <dt className="w-24 shrink-0 font-semibold">Link</dt>
              <dd>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  {project.link}
                </a>
              </dd>
            </div>
          )}
        </dl>
      )}

      <div
        className="prose prose-zinc mt-10 max-w-none leading-relaxed prose-a:text-accent prose-img:rounded-xl dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: content }}
      />

      {images.length > 0 && (
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {images.map((src, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={i}
              src={src}
              alt={`${project.title} 스크린샷 ${i + 1}`}
              loading="lazy"
              className="h-auto max-h-[600px] w-auto max-w-full rounded-xl border border-border"
            />
          ))}
        </div>
      )}
    </article>
  );
}
