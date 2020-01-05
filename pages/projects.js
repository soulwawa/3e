import Link from "next/link";
import Layout from "../components/Layout";
import ReactMarkdown, { renderers } from "react-markdown";
import { withRouter } from "next/router";
import ProjectSummary from "../components/ProjectSummary";

const Project = props => {
	const title = ProjectSummary[props.title].title;
	const summary = ProjectSummary[props.title].summary;
	const period = ProjectSummary[props.title].period;
	return (
		<li>
			<Link href={`/project?title=${props.title}`}>
				<div>
					<h3>{title}</h3>
					<p>{summary}</p>
					<p>
						<small>{period}</small>
					</p>
				</div>
			</Link>
			<style jsx>{`
				div {
					text-align: center;
				}
				li {
					border-top: 0.2em solid #fbc9d4;
					padding: 1.5em;
					margin: 0 10em;
				}

				li:hover {
					font-weight: 900;
					cursor: pointer;
					background: white;
					color: black;
					opacity: 0.3;
				}

				li:last-child {
					border-bottom: 0.2em solid #fbc9d4;
				}
			`}</style>
		</li>
	);
};

const Projects = () => {
	const docsList = Object.keys(ProjectSummary);
	const ProjectList = docsList.map((ele, index) => (
		<Project key={index} title={ele} />
	));
	return (
		<Layout>
			<section id="project">
				<main>
					<div>
						<h1>Project List</h1>
						<ul>{ProjectList}</ul>
					</div>
				</main>
			</section>
			<style jsx>
				{`
					h1 {
						font-style: italic;
						text-align: center;
						font-size: 2rem;
					}
					ul {
						list-style-type: none;
					}
				`}
			</style>
		</Layout>
	);
};

export default withRouter(Projects);
