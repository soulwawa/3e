import Layout from '../components/Layout';
import { withRouter } from 'next/router'
import ReactMarkdown from 'react-markdown'
import ProjectSummary from '../components/ProjectSummary';

const Project = (props) => {
    const content = props.content.default
    const title = props.router.query.title

    return (
        <Layout>
            <section id="project">
                <main>
                    <ReactMarkdown source={content} className={title} />
                </main>
            </section>
            <style jsx>{`
                #project {
                    border: 0.1em solid #f6829b;
                    margin: 0.2em;
                }
            `}
            </style>
            <style jsx global>{`
                #project img {
                    width: 100%;
                }
                
                #project strong {
                    color: aquamarine;
                }

                #project a {
                    font-size: 2rem;
                    background: linear-gradient(to right, #fbcac9, #aaaaaa);
                    background-clip: text;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                 }
            `}
            </style>
        </Layout>
    )
}

Project.getInitialProps = async ({ query, props, res }) => {
    const docsList = Object.keys(ProjectSummary)
    const title = query.title
    if (docsList.indexOf(title) < 0) {
        res.writeHead(302, {
            Location: '/projects'
        })
        res.end()
    }

    const content = await require(`../docs/projects/${title}.md`)
    return { content }
};

export default withRouter(Project)