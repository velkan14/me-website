import Head from "next/head";
import styles from "../styles/Home.module.css";
import Card from "../components/card";
import Image from "next/image";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Home() {
  const jobs = [
    {
      id: "job_chessable",
      title: "Frontend Developer",
      company: "Chessable",
      period: "April 2021 – July 2021",
      description:
        "Building a Design System in Clutch with styled-components. Working on improving the look & feel of some pages on a React project.",
      tags: ["javascript", "React", "Clutch"],
    },
    {
      id: "job_miniclip",
      title: "Software Developer",
      company: "Miniclip",
      period: "September 2020 – January 2021",
      description:
        "Creation of promotions for several games. Analysing requirements, configuring sheets and developing promotions with an internal tool. Usage of git for version control. Team communication managed with agile methodologies.",
      tags: ["python", "git", "DSL"],
    },
    {
      id: "job_xpandit",
      title: "Software Developer",
      company: "Xpand IT",
      period: "January 2018 – September 2020",
      description:
        "Working on a migration project for Credibom. Analysing and developing middleware services in WSO2 Integrator, and writing documentation. Created a web page to consult information to help with the analysis of the services.",
      tags: ["wso2", "soap", "REST", "xpath"],
    },
  ];

  const certifications = [
    {
      id: "cert_udemy",
      title: "The Complete Web Developer in 2021: Zero to Mastery",
      company: "Udemy",
      period: "February 2021",
      url: "http://ude.my/UC-24f84ae7-216e-4f46-b18f-89d6b552811e",
    },
    {
      id: "cert_wso2_apim",
      title: "API Manager 2 Developer",
      company: "WSO2",
      period: "July 2019",
      url: "/certifications/WSO2 Certified API Manager 2 Developer.pdf",
    },
    {
      id: "cert_wso2_esb",
      title: "Enterprise Integrator 6 Developer – ESB Profile",
      company: "WSO2",
      period: "July 2019",
      url: "/certifications/WSO2 Certified Enterprise Integrator 6 Developer - ESB Profile.pdf",
    },
  ];

  const education = [
    {
      id: 1,
      title: "MSc in Information Systems and Computer Engineering",
      company: "Instituto Superior Técnico",
      period: "2015 – Present",
      description:
        "Worth mentioning projects: Secure Calendar; File server (with integrity guarantees, smart card based authentication and intrusion-tolerant replication); Publisher-Subscriber distributed system; OpenGL Engine for 1v1 Tank War game; Development of game Overwall; Distributed mobile application; InfoVis about World Trades; Agents with emotions on scuba diving. Master’s Thesis: Development of software to support the co-creative process of placing monsters and items in level design.",
    },
    {
      id: 2,
      title: "BSc in Information Systems and Computer Engineering ",
      company: "Instituto Superior Técnico",
      period: "2012 – 2015",
      description:
        "Worth mentioning projects: Frogger game; Key-Value store (synchronized); Spreadsheet; Bidding system in a PHP site with database access; Fill-a-pix puzzle solver.",
    },
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Daniel Amado</title>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="theme-color" content="#232741" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Daniel Amado</h1>
        <section className={styles.social}>
          <a href="https://github.com/velkan14">
            <FaGithub size="3em" />
          </a>
          <a href="https://www.linkedin.com/in/daniel-s-amado/">
            <FaLinkedinIn size="3em" />
          </a>
          <a href="mailto:velkan14@gmail.com">
            <FaEnvelope size="3em" />
          </a>
        </section>
        <h2 className={styles.subtitle}>Projects</h2>
        <section className={styles.grid}>
          <a
            href="https://play.google.com/store/apps/details?id=org.godotengine.blockswipe"
            className={styles.card}
          >
            <div className={styles.division}>
              <div className={styles.image}>
                <Image
                  src="/tower_swipe.png"
                  alt="Tower Swipe"
                  width={200}
                  height={200}
                />
              </div>
              <div>
                <h3>Tower Swipe &rarr;</h3>
                <h5>June 2018 – Present</h5>
                <p>
                  A small casual game for mobile (android), made in the engine
                  Godot. It has a simple concept but challenged me to make
                  several design choices.
                </p>
                <div className={styles.tags}>
                  {["Godot", "GDScript"].map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </a>
          <Card
            title="Sigma Mobile"
            remark="June 2020 – Present"
            description="A mobile application made with React Native, Redux and UI Kitten
            5.0. It integrates with Sigma through a REST API (Integrated Car
            Maintenance Management System) to register licence plates and take
            photos as evidences."
            tags={["React Native", "TypeScript", "UI  Kitten 5.0", "PHP"]}
          />
          <Card
            title="Music Player"
            remark="March 2021"
            description="A simple Single Page Application to search and list musics from itunes API. You can also listen to previews."
            tags={["React", "Jest"]}
            url="https://react-music-player-velkan14.vercel.app/"
          />
          <Card
            title="Chess Viewer"
            remark="March 2021"
            description="A chess board where you can load FEN and move pieces."
            tags={["React", "Jest", "chess.js"]}
            url="https://chess-viewer.vercel.app/"
          />
          <Card
            title="Reaction Test"
            remark="September 2021"
            description="A reaction test to measure how fast you are."
            tags={["ReactNative", "expo.io"]}
            url="https://reaction-test.vercel.app/"
          />
        </section>

        <h2 className={styles.subtitle}>Working Experience</h2>
        <section className={styles.grid}>
          {jobs.map(({ id, title, company, period, description, tags }) => (
            <Card
              key={id}
              title={title}
              subtitle={company}
              remark={period}
              description={description}
              tags={tags}
            />
          ))}
        </section>
        <h2 className={styles.subtitle}>Certifications</h2>
        <section className={styles.grid}>
          {certifications.map(({ id, title, company, period, url }) => (
            <Card
              key={id}
              title={title}
              subtitle={company}
              url={url}
              remark={period}
            />
          ))}
        </section>
        <h2 className={styles.subtitle}>Education</h2>
        <section className={styles.grid}>
          {education.map(({ id, title, company, period, description }) => (
            <Card
              key={id}
              title={title}
              subtitle={company}
              description={description}
              remark={period}
            />
          ))}
        </section>
      </main>
    </div>
  );
}
