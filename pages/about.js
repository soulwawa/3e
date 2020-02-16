import Link from 'next/link';
import Layout from '../components/Layout';
import ReactMarkdown from 'react-markdown';
import { withRouter } from 'next/router';

const About = ({ content }) => {
	return (
		<Layout>
			<section id="about">
				<main>
					<ReactMarkdown
						source={content.default}
						renderers={{
							link: props =>
								props.href === '//www.algoquick.com' ||
								props.href === 'mailto:soulwawa85@gmail.com' ? (
									<a href={props.href} target="_blank">
										{props.children}
									</a>
								) : (
									<Link href={props.href}>
										<a>{props.children}</a>
									</Link>
								)
						}}
					/>
				</main>
			</section>
			<style jsx global>{`
				#about {
					margin: 0 10rem;
				}
				#about p:nth-child(5) {
					display: flex;
					justify-content: center;
					align-items: center;
				}
				#about img {
					height: 20em;
				}
				#about a {
					font-size: 1.5rem;
					background: linear-gradient(to right, #fbcac9, #aaaaaa);
					background-clip: text;
					-webkit-background-clip: text;
					-webkit-text-fill-color: transparent;
				}
				#about h1 {
					font-style: italic;
				}
				@media only screen and (max-width: 767px) {
					body {
						font-size: 0.75rem;
					}
					#about {
						margin: 0;
					}
				}
			`}</style>
		</Layout>
	);
};

About.getInitialProps = async ({ req }) => {
	const content = await require(`../docs/about/about.md`);
	return { content };
};

export default withRouter(About);
