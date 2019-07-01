import React from 'react'
import NextHead from 'next/head'
import { GA_TRACKING_ID } from './gtag'

const Head = () => (
    <NextHead>
        <meta charSet='UTF-8' />
        <meta name="author" content="KO SEOK MAN" />
        <meta name='description' content='A site for my programming portfolio and 3e`s(KO SEOK MAN) resume' />
        <mata name='robots' content='noindex, nofollow' />
        <mata name='viewport' content='width=device-width' />
        <title>3E:KOSEOKMAN</title>
        <meta property="og:url" content="htttps:/www.3es.me" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="3E:KOSEOKMAN" />
        <meta property="og:description" content="A site for my programming portfolio and 3e`s(KO SEOK MAN) resume" />
        <meta property="og:image" content="https://www.3es.me/static/favicon.ico" />
        <link rel='icon' href='/static/favicon.ico' />
        <link href="https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap" rel="stylesheet" />
        <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <script
            async
            dangerouslySetInnerHTML={{
                __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `
            }}
        />
    </NextHead>
)

export default Head
