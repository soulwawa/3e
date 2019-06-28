import Link from 'next/link';
import React, { Fragment } from 'react'
import Router from 'next/router';
import Head from './Head';
// import css from './Layout.scss';

export default ({ children, title }) => (
  <Fragment>
    <Head />
    <div className='root'>
      <header>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/">
          <a>Home</a>
        </Link>
        {/* <Link href="/project">
        <a>Project</a>
      </Link> */}
      </header>
      {children}
      <footer>Copyright &copy; 2019. 3e All rights reserved</footer>
      <style jsx>{`
        .root {
          display: flex;
          flex-direction: column;
          height: 100vh;
        }

        header, footer {
          flex-basis:2em;
          flex-shrink:0;
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
        font-family: Orbitron, sans-serif;
        background-color: #111;
        color: white;
        margin:0;
      }
      `}</style>
    </div>
  </Fragment>
);

