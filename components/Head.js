import React from 'react'
import NextHead from 'next/head'
import { GA_TRACKING_ID } from './gtag'

const Head = () => (
    <NextHead>
        <meta name='description' content='A site for my programming portfolio' />
        <meta charSet='UTF-8' />
        <mata name='robots' content='noindex, nofollow' />
        <mata name='viewport' content='width=device-width' />
        <link rel='icon' href='/static/favicon.ico' />
        <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.7.1/css/all.css"
            integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
            crossorigin="anonymous"
        />
        <link
            href="https://fonts.googleapis.com/css?family=Orbitron"
            rel="stylesheet"
        />
        <title>3E</title>
        <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <script
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
