import React from 'react'
import NextHead from 'next/head'

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
        <script dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-XXXXXX');`}} />
    </NextHead>
)

export default Head
