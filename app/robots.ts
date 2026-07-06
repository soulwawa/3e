import type { MetadataRoute } from "next";

// 빌드 시 /robots.txt 로 노출. 전체 색인 허용 + 사이트맵 위치 명시.
const BASE_URL = "https://www.3es.dev";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
