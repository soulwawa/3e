import Document, { Head, Main, NextScript } from 'next/document';


export default class MyDocument extends Document {
    render() {
        return (
            <html>
                <Head>
                    <meta name='description' content='A site for my programming portfolio' />
                    <meta charSet='utf-8' />
                    <mata name='robots' content='noindex, nofollow' />
                    <mata name='viewport' content='width=device-width' />
                    <link rel="shortcut icon" href='/static/favicon.png' />
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
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}