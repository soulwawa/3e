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
    </NextHead>
)

export default Head
