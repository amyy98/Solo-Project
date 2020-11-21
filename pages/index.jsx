import Head from "next/head";
import React, { useEffect, useState } from "react";
import Calendar from "./calendar/build.jsx";

export default function Home() {
  const [quotes, setQuotes] = useState([]);
  const randomNum = Math.floor((Math.random() * 1643) + 1);
  useEffect(() => {
  

  fetch("https://type.fit/api/quotes")
  .then((res) => res.json())
  .then((data) => {
    setQuotes(data)
  });
  })



  return (
    <div className="container">
      <Head>
        <title>MOODify</title>
        <link rel="icon" href="/sun.png" />
      </Head>

      <main>
        <h1 className="title">Welcome!</h1>

        <p className="description">Track your mood.</p>
        <p className="quote">
          {quotes.map(() => {
            return (
              <div>
                
              </div>
            )
          })}
        </p>

        <div className="grid">
          <Calendar />
        </div>
      </main>

      <footer>
        <a
          href="https://github.com/amyy98"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Github{" "}
        </a>
      </footer>

      <style jsx>{`
        .container {
          background-color: #ffffff;
background-image: linear-gradient(315deg, #ffffff 0%, #d7e1ec 74%);

          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 70px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        .quote {
          text-align: center;
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
