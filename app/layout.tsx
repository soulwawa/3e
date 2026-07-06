import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { profile } from "@/data/profile";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.3es.dev"),
  title: {
    default: `${profile.name} · ${profile.handle}`,
    template: `%s · ${profile.name}`,
  },
  description:
    "문제 현장에 들어가 마지막 1마일까지 직접 책임지는 백엔드·풀스택 엔지니어 고석만(3ES)의 포트폴리오.",
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.name} · ${profile.handle}`,
    description:
      "기획부터 설계·구현·운영·DB까지 직접 책임지는 백엔드·풀스택 엔지니어.",
    url: "https://www.3es.dev",
    siteName: `${profile.name} · ${profile.handle}`,
    type: "website",
    locale: "ko_KR",
  },
  robots: { index: true, follow: true },
  icons: { icon: "/static/favicon.ico" },
};

const themeScript = `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;if(d)document.documentElement.classList.add('dark');}catch(e){}})();`;

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  alternateName: profile.handle,
  jobTitle: profile.role,
  url: "https://www.3es.dev",
  sameAs: profile.socials
    .filter((s) => s.icon !== "mail")
    .map((s) => s.href),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
        {process.env.NODE_ENV === "production" && (
          <GoogleAnalytics gaId="G-1FRS4SX1ET" />
        )}
      </body>
    </html>
  );
}
