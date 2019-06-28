import Layout from '../components/Layout';
import { withRouter } from 'next/router'
import ReactMarkdown from 'react-markdown'

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
                    margin: 0.1em;
                }
            `}
            </style>
            <style jsx global>{`
                .iot img {
                    width: 100%;
                }
            `}
            </style>
        </Layout>
    )
}

Project.getInitialProps = async ({ query, props }) => {
    const title = query.title
    const content = await require(`../docs/projects/${title}.md`)
    return { content }
};

export default withRouter(Project)