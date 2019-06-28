import Link from 'next/link'
import Layout from '../components/Layout';
import ReactMarkdown, { renderers } from 'react-markdown'
import { withRouter } from 'next/router'

const ProjectSummary = {
  iot: {
    title: '교육기관 프로젝트 - ISAVEU',
    summary: '비상구와 소화기를 활용한 빌딩 재난관리 IoT 서비스',
    period: '2018.03 - 2018.04'
  }
}


const ProjectList = (props) => {
  const title = ProjectSummary[props.title].title
  const summary = ProjectSummary[props.title].summary
  const period = ProjectSummary[props.title].period
  return (
    <li>
      <Link href={`/project?title=${props.title}`}>
        <div>
          <h3>{title}</h3>
          <p>{summary}</p>
          <p><small>{period}</small></p>
        </div>
      </Link>
      <style jsx>{`
      div {
        text-align: center;
      }
      li {
        border: 0.2em solid #fbc9d4;
        border-right: none;
        border-left: none;
        padding: 1.5em;
        margin: 0 10em;
      }

      li:hover {
        font-weight: 900;
        cursor: pointer;
        border: 0.3em solid #f6829b;
        background: black;
      }
      `}</style>
    </li>
  )
}


const Projects = () => (
  <Layout>
    <section id="project">
      <main>
        <div>
          <h1>Project List</h1>
          <ul>
            <ProjectList title="iot" />
            <ProjectList title="iot" />
          </ul>
        </div>
      </main>
    </section>
    <style jsx>{`
      h1 {
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

export default withRouter(Projects);
