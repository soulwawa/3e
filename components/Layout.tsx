import React, { ReactNode } from "react";
import Head from "next/head";
import { GA_TRACKING_ID } from "../lib/gtag";

type Props = {
  children?: ReactNode;
  title?: string;
};

function Layout({ children, title = "3ES::KOSEOKMAN" }: Props) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="author" content="3ES::KOSEOKMAN" />
        <meta
          name="description"
          content="A site for my programming portfolio and 3e`s(KO SEOK MAN) resume"
        />
        <link rel="icon" href="/static/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;900&display=swap"
          rel="stylesheet"
        />
        <meta name="robots" content="noindex,follow" />
        <meta name="googlebot" content="noindex,follow" />
        <meta property="og:title" content="3ES::KOSEOKMAN" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.3es.dev" />
        <meta
          property="og:image"
          content="https://www.3es.dev/static/favicon.ico"
        />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            if(window.location.hostname !== 'localhost') {
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            }
          `,
          }}
        />
      </Head>
      {children}
    </div>
  );
}

export default Layout;
