import Link from 'next/link'
import Layout from '../components/Layout';

const Index = () => {
  return (
    <Layout>
      <section id="intro">
        <main>
          <h1>I'm <span className='name'>Seokman Ko</span></h1>
          <p>I'm a Seoul, South Korea based <span>Python developer</span> and <span>web developer</span> </p>
          <p>I want to be a full-stack developer. I am also interested in DevOps </p>
          {/* <p>Let's <a href="http://www.3es.me/project/">PROJECT</a></p> */}
          <p>learn more <Link href="/about"><a>About,</a></Link> <Link href="/projects"><a>projects</a></Link></p>
          <p>The best ways to contact me are <a href="mailto:soulwawa85@gmail.com">Mail</a> and
          <a href="https://www.facebook.com/soulwawa"> Facebook</a> and <a href="https://github.com/soulwawa">Github</a></p>
        </main>
      </section>
      <style jsx>{`
        #intro {
          height: 94vh;
          display:flex;
          justify-content: center;
          align-items: center;
        }
        a,
        .name {
          font-size: 2rem;
          background: linear-gradient(to right, #fbcac9, #aaaaaa);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        `}</style>
    </Layout>
  );
};

export default Index;
