import Head from "next/head";
import Card from "../components/Card";
import styles from "../styles/glow.module.css";
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
    <div className="bg-dark">
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

      <main className="flex flex-col items-center gap-10">
        <h1 className={styles.glow}>Daniel Amado</h1>
        <section className="flex gap-8 mt-4 text-yellow">
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
        <section className="grid max-w-4xl gap-6 p-4 sm:grid-cols-2">
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
          {certifications.map(({ _id, title, certifier, href, period }) => (
            <Card
              key={_id}
              title={title}
              subtitle={certifier}
              url={href}
              remark={period}
              variant="ternary"
            />
          ))}
          {works.map((work) => (
            <Card
              key={work._id}
              title={work.title}
              subtitle={work.company}
              remark={work.period}
              html={work.body.html}
              tags={work.tags}
              variant="secondary"
            />
          ))}
          {education.map(({ _id, degree, school, period, body }) => (
            <Card
              key={_id}
              title={degree}
              subtitle={school}
              html={body.html}
              remark={period}
              variant="ternary"
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
