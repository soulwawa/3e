import Link from 'next/link'
import Layout from '../components/Layout';
import ReactMarkdown from 'react-markdown'

const About = ({ content }) => {
  return (
    <Layout>
      <section id="about">
        <main>
          <ReactMarkdown source={content.default} />
        </main>
      </section>
      <style jsx global>{`
        #about {
          padding:2em;
        }
        p:nth-child(5) {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        img {
          height: 20em;
        }
        a {
          font-size: 1.5rem;
          background: linear-gradient(to right, #fbcac9, #aaaaaa);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        `}</style>
    </Layout>
  );
};

About.getInitialProps = async ({ req }) => {
  const content = await require(`../docs/about/about.md`)
  return { content }
};

export default About;
