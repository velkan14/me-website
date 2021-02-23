import Head from "next/head";
import styles from "../styles/Home.module.css";
import Particles from "react-tsparticles";
import Card from "../components/card";
import Image from "next/image";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Home() {
  const particles = {
    autoPlay: true,
    background: {
      color: {
        value: "#232741",
      },
      repeat: "no-repeat",
      size: "20%",
      opacity: 1,
    },
    backgroundMask: {
      composite: "destination-out",
      cover: {
        color: {
          value: "#fff",
        },
        opacity: 1,
      },
      enable: false,
    },
    backgroundMode: {
      enable: true,
      zIndex: -1,
    },
    detectRetina: true,
    fpsLimit: 30,
    infection: {
      cure: false,
      delay: 0,
      enable: false,
      infections: 0,
      stages: [],
    },
    manualParticles: [],
    motion: {
      disable: false,
      reduce: {
        factor: 4,
        value: false,
      },
    },
    particles: {
      bounce: {
        horizontal: {
          random: {
            enable: false,
            minimumValue: 0.1,
          },
          value: 1,
        },
        vertical: {
          random: {
            enable: false,
            minimumValue: 0.1,
          },
          value: 1,
        },
      },
      collisions: {
        bounce: {
          horizontal: {
            random: {
              enable: false,
              minimumValue: 0.1,
            },
            value: 1,
          },
          vertical: {
            random: {
              enable: false,
              minimumValue: 0.1,
            },
            value: 1,
          },
        },
        enable: false,
        mode: "bounce",
      },
      color: {
        value: "#ffffff",
        animation: {
          enable: false,
          speed: 1,
          sync: true,
        },
      },
      life: {
        count: 0,
        delay: {
          random: {
            enable: false,
            minimumValue: 0,
          },
          value: 0,
          sync: false,
        },
        duration: {
          random: {
            enable: false,
            minimumValue: 0.0001,
          },
          value: 0,
          sync: false,
        },
      },
      links: {
        blink: false,
        color: {
          value: "#ffffff",
        },
        consent: false,
        distance: 150,
        enable: false,
        frequency: 1,
        opacity: 0.4,
        shadow: {
          blur: 5,
          color: {
            value: "#00ff00",
          },
          enable: false,
        },
        triangles: {
          enable: false,
          frequency: 1,
        },
        width: 1,
        warp: false,
      },
      move: {
        angle: {
          offset: 45,
          value: 90,
        },
        attract: {
          enable: false,
          rotate: {
            x: 600,
            y: 600,
          },
        },
        direction: "none",
        distance: 0,
        enable: true,
        gravity: {
          acceleration: 9.81,
          enable: false,
          maxSpeed: 50,
        },
        noise: {
          delay: {
            random: {
              enable: false,
              minimumValue: 0,
            },
            value: 0,
          },
          enable: false,
        },
        outModes: {
          default: "out",
          bottom: "out",
          left: "out",
          right: "out",
          top: "out",
        },
        random: true,
        size: false,
        speed: 0.3,
        straight: false,
        trail: {
          enable: false,
          length: 10,
          fillColor: {
            value: "#000000",
          },
        },
        vibrate: false,
        warp: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
          factor: 1000,
        },
        limit: 0,
        value: 160,
      },
      opacity: {
        random: {
          enable: true,
          minimumValue: 0.1,
        },
        value: 1,
        animation: {
          destroy: "none",
          enable: true,
          minimumValue: 0,
          speed: 1,
          startValue: "random",
          sync: false,
        },
      },
      reduceDuplicates: false,
      rotate: {
        random: {
          enable: false,
          minimumValue: 0,
        },
        value: 0,
        animation: {
          enable: false,
          speed: 0,
          sync: false,
        },
        direction: "clockwise",
        path: false,
      },
      shadow: {
        blur: 0,
        color: {
          value: "#000000",
        },
        enable: false,
        offset: {
          x: 0,
          y: 0,
        },
      },
      shape: {
        options: {},
        type: "circle",
      },
      size: {
        random: {
          enable: true,
          minimumValue: 1,
        },
        value: 3,
        animation: {
          destroy: "none",
          enable: false,
          minimumValue: 0.3,
          speed: 4,
          startValue: "random",
          sync: false,
        },
      },
      stroke: {
        width: 0,
      },
      twinkle: {
        lines: {
          enable: false,
          frequency: 0.05,
          opacity: 1,
        },
        particles: {
          enable: false,
          frequency: 0.05,
          opacity: 1,
        },
      },
    },
    pauseOnBlur: true,
    pauseOnOutsideViewport: false,
    themes: [],
  };
  const jobs = [
    {
      id: 1,
      title: "Software Developer",
      company: "Miniclip",
      period: "September 2020 – January 2021",
      description:
        "Creation of promotions for several games. Analysing requirements, configuring sheets and developing promotions with an internal tool. Usage of git for version control. Team communication managed with agile methodologies.",
      tags: ["python", "git", "DSL"],
    },
    {
      id: 2,
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
      id: 1,
      title: "The Complete Web Developer in 2021: Zero to Mastery",
      company: "Udemy",
      period: "February 2021",
      url: "http://ude.my/UC-24f84ae7-216e-4f46-b18f-89d6b552811e",
    },
    {
      id: 2,
      title: "API Manager 2 Developer",
      company: "WSO2",
      period: "July 2019",
      url: "/certifications/WSO2 Certified API Manager 2 Developer.pdf",
    },
    {
      id: 3,
      title: "Enterprise Integrator 6 Developer – ESB Profile",
      company: "WSO2",
      period: "July 2019",
      url:
        "/certifications/WSO2 Certified Enterprise Integrator 6 Developer - ESB Profile.pdf",
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
      <Particles options={particles}></Particles>
      <Head>
        <title>Daniel Amado</title>
        <link rel="icon" href="/me_icon.png" />
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
            id="sigmamobile"
            title="Sigma Mobile"
            remark="June 2020 – Present"
            description="A mobile application made with React Native, Redux and UI Kitten
            5.0. It integrates with Sigma through a REST API (Integrated Car
            Maintenance Management System) to register licence plates and take
            photos as evidences."
            tags={["React Native", "TypeScript", "UI  Kitten 5.0", "PHP"]}
          />
        </section>

        <h2 className={styles.subtitle}>Working Experience</h2>
        <section className={styles.grid}>
          {jobs.map(({ id, title, company, period, description, tags }) => (
            <Card
              id={id}
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
              id={id}
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
              id={id}
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
