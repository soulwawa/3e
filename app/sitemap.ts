import type { MetadataRoute } from "next";
import { getProjectSlugs } from "@/lib/api";

// 빌드 시 /sitemap.xml 로 노출. 홈 + _projects/*.md 상세 페이지(generateStaticParams와 동일 슬러그).
const BASE_URL = "https://www.3es.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const projects = getProjectSlugs()
    .filter((s) => s.endsWith(".md"))
    .map((slug) => ({
      url: `${BASE_URL}/projects/${slug.replace(/\.md$/, "")}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));

  return [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...projects,
  ];
}
