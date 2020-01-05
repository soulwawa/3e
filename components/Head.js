import React from "react";
import Head from "next/head";
import { GA_TRACKING_ID } from "./gtag";

const MyHead = () => (
	<Head>
		<meta charSet="UTF-8" />
		<meta name="author" content="KO SEOK MAN" />
		<meta
			name="description"
			content="A site for my programming portfolio and 3e`s(KO SEOK MAN) resume"
		/>
		<title>3E:KOSEOKMAN</title>
		<link rel="icon" href="/static/favicon.ico" />
		<link
			href="https://fonts.googleapis.com/css?family=Orbitron"
			rel="stylesheet"
		/>
		<link
			href="//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css"
			rel="stylesheet"
			type="text/css"
		/>
		<link
			href="//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-jp.css"
			rel="stylesheet"
			type="text/css"
		/>
		<script
			async
			dangerouslySetInnerHTML={{
				__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `,
			}}
		/>
	</Head>
);

export default MyHead;
