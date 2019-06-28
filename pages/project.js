import Link from 'next/link'
import Layout from '../components/Layout';
import ReactMarkdown from 'react-markdown'

const ProjectList = (props) => (
  <li>
    <Link href={`/project?title=${props.title}`}>
      <div>
        <img src="https://picsum.photos/100/" />
        <h3>The Grasslands</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod ultrices ante, ac laoreet nulla vestibulum adipiscing. Nam quis justo in augue auctor imperdiet.</p>
      </div>
    </Link>
  </li>
)

const Project = () => (
  <Layout>
    <section id="project">
      <main>
        <div>
          <ul>
            <ProjectList title="The Grasslands" />
            <ProjectList title="The Grasslands" />
            {/* 
              <li>
                <img src="https://picsum.photos/100/" />
                <h3>Paradise Found</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod ultrices ante, ac laoreet nulla vestibulum adipiscing. Nam quis justo in augue auctor imperdiet.</p>
              </li>

              <li>
                <img src="https://picsum.photos/100/" />
                <h3>Smoke On The Water</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod ultrices ante, ac laoreet nulla vestibulum adipiscing. Nam quis justo in augue auctor imperdiet.</p>
              </li>

              <li>
                <img src="https://picsum.photos/100/" />
                <h3>Headline</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod ultrices ante, ac laoreet nulla vestibulum adipiscing. Nam quis justo in augue auctor imperdiet.</p>
              </li> */}
          </ul>
        </div>
      </main>
    </section>
    <style jsx>{`
      #project {
        padding: 2em;
      }
      ul {
          list-style-type: none;
          width: 100%;
      }

      li img {
        float: left;
        margin: 0 15px 0 0;
      }

      li {
        padding: 10px;
        overflow: auto;
      }

      li:hover {
        background: #eee;
        cursor: pointer;
      }
      `}
    </style>
  </Layout>
);

export default Project;
