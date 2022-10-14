import React, { ReactNode } from "react";
import Head from "next/head";

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
        <meta name="robots" content="noindex,follow" />
        <meta name="googlebot" content="noindex,follow" />
        <meta property="og:title" content="3ES::KOSEOKMAN" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.3es.dev" />
        <meta
          property="og:image"
          content="https://www.3es.dev/static/favicon.ico"
        />
      </Head>
      {children}
    </div>
  );
}

export default Layout;
