import Link from 'next/link';
import React, { Fragment } from 'react';
import Router from 'next/router';
import MyHead from './Head';
import { NextSeo } from 'next-seo';

export default ({ children, title }) => (
	<div>
		<MyHead />
		<NextSeo
			openGraph={{
				type: 'website',
				url: 'https://www.3es.dev',
				title: '3E:KOSEOMAN',
				description:
					'A site for my programming portfolio and 3e`s(KO SEOK MAN) resume',
				images: [
					{
						url: 'https://www.3es.dev/static/favicon.ico'
					}
				]
			}}
		/>
		<meta name="robots" content="noindex,follow" />
		<meta name="googlebot" content="noindex,follow" />
		<div className="root">
			<header>
				<Link href="/about">
					<a>About</a>
				</Link>
				<Link href="/">
					<a>Home</a>
				</Link>
				<Link href="/projects">
					<a>Projects</a>
				</Link>
			</header>
			{children}
			<footer>Copyright &copy; 2019. 3e All rights reserved</footer>
			<style jsx>{`
				.root {
					display: flex;
					flex-direction: column;
					height: 100vh;
				}

				header,
				footer {
					flex-basis: 2em;
					flex-shrink: 0;
					width: 100%;
					display: flex;
					justify-content: space-around;
					font-size: 1.2rem;
				}

				header {
					padding-top: 1em;
				}

				footer {
					padding-bottom: 1em;
				}

				header a {
					color: darkgrey;
					text-decoration: none;
				}

				header a:hover {
					font-weight: bold;
					color: lightgrey;
				}

				a {
					font-size: 2rem;
					background: linear-gradient(to right, #fbcac9, #aaaaaa);
					background-clip: text;
					-webkit-background-clip: text;
					-webkit-text-fill-color: transparent;
				}
			`}</style>
			<style jsx global>{`
				body {
					font-family: 'Spoqa Han Sans', 'Spoqa Han Sans JP', 'Sans-serif';
					background-color: black;
					color: white;
					margin: 0;
				}
				section {
					padding: 2em;
				}

				@media only screen and (min-width: 1024px) {
					#intro {
						font-size: 1.5em;
					}
				}

				@media only screen and (max-width: 1024px) {
				}

				@media only screen and (max-width: 900px) {
				}

				@media only screen and (max-width: 767px) {
					footer {
						font-size: 0.8em !important;
					}
				}
			`}</style>
		</div>
	</div>
);
