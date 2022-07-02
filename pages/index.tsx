import Head from "next/head";
import styles from "../styles/Home.module.css";
import Card from "../components/Card";
import Image from "next/image";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";
import {
  allCertifications,
  allWorks,
  allEducation,
  allProjects,
} from "contentlayer/generated";
import { InferGetStaticPropsType } from "next";

export default function Home({
  certifications,
  works,
  education,
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) {
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
        <section className="flex gap-4 mt-4">
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
          {projects.map((project) => (
            <Card
              key={project._id}
              title={project.title}
              remark={project.period}
              html={project.body.html}
              tags={project.tags}
              url={project.href}
            />
          ))}
        </section>
        <h2 className={styles.subtitle}>Working Experience</h2>
        <section className={styles.grid}>
          {works.map((work) => (
            <Card
              key={work._id}
              title={work.title}
              subtitle={work.company}
              remark={work.period}
              html={work.body.html}
              tags={work.tags}
            />
          ))}
        </section>
        <h2 className={styles.subtitle}>Certifications</h2>
        <section className={styles.grid}>
          {certifications.map(({ _id, title, certifier, href, date }) => (
            <Card
              key={_id}
              title={title}
              subtitle={certifier}
              url={href}
              remark={date}
            />
          ))}
        </section>
        <h2 className={styles.subtitle}>Education</h2>
        <section className={styles.grid}>
          {education.map(({ _id, degree, school, period, body }) => (
            <Card
              key={_id}
              title={degree}
              subtitle={school}
              html={body.html}
              remark={period}
            />
          ))}
        </section>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const certifications = allCertifications.sort((a, b) =>
    a.date < b.date ? 1 : -1
  );

  const works = allWorks.sort((a, b) => (a.date < b.date ? 1 : -1));

  const education = allEducation.sort((a, b) => (a.date < b.date ? 1 : -1));

  const projects = allProjects.sort((a, b) => (a.order > b.order ? 1 : -1));
  return { props: { certifications, works, education, projects } };
}
