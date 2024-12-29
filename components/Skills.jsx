"use client";

import React from "react";
import "../styles/Skills.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  {
    name: "JavaScript",
    icon: "/Assets/js.svg",
    link: "https://www.javascript.com/",
  },
  {
    name: "Html",
    icon: "/Assets/html.svg",
    link: "https://www.w3schools.com/html/html_intro.asp",
  },
  {
    name: "Sass",
    icon: "/Assets/sass.svg",
    link: "https://sass-lang.com/",
  },
  {
    name: "Tailwind",
    icon: "/Assets/tailwind.svg",
    link: "https://tailwindcss.com/",
  },
  {
    name: "Css",
    icon: "/Assets/css.svg",
    link: "https://www.w3schools.com/css/",
  },
  {
    name: "Python",
    icon: "/Assets/python.svg",
    link: "https://www.python.org/",
  },
  {
    name: "C#",
    icon: "/Assets/csharp.svg",
    link: "https://learn.microsoft.com/en-us/dotnet/csharp/",
  },
  {
    name: "C",
    icon: "/Assets/c.svg",
    link: "https://www.learn-c.org/",
  },
  {
    name: "Ocaml",
    icon: "/Assets/ocaml.svg",
    link: "https://ocaml.org/",
  },
  {
    name: "Java",
    icon: "/Assets/java.svg",
    link: "https://www.java.com/en/",
  },
  {
    name: "R",
    icon: "/Assets/r.svg",
    link: "https://www.r-project.org/",
  },
  {
    name: "Matlab",
    icon: "/Assets/matlab.svg",
    link: "https://www.mathworks.com/?s_tid=gn_logo",
  },
];

const technologies = [
  {
    name: "React",
    icon: "/Assets/react.svg",
    link: "https://react.dev/",
  },
  {
    name: "GSAP",
    icon: "/Assets/gsap.svg",
    link: "https://gsap.com/",
  },
  {
    name: "Next JS",
    icon: "/Assets/nextjs.svg",
    link: "https://nextjs.org/",
  },
  {
    name: "PostgreSQL",
    icon: "/Assets/postgresql.svg",
    link: "https://nextjs.org/",
  },
  {
    name: "Three JS",
    icon: "/Assets/threejs.svg",
    link: "https://threejs.org/",
  },
  {
    name: "Webpack",
    icon: "/Assets/webpack.svg",
    link: "https://webpack.js.org/",
  },
  {
    name: "Node",
    icon: "/Assets/nodejs.svg",
    link: "https://nodejs.org/en",
  },
  {
    name: "Vite",
    icon: "/Assets/vitejs.svg",
    link: "https://vitejs.dev/",
  },
  {
    name: "Vue",
    icon: "/Assets/vue.svg",
    link: "https://vuejs.org/",
  },
  {
    name: "Github",
    icon: "/Assets/github.svg",
    link: "https://github.com/",
  },
  {
    name: "git",
    icon: "/Assets/git.svg",
    link: "https://git-scm.com/",
  },
  {
    name: "MongoDB",
    icon: "/Assets/mongoDB.svg",
    link: "https://www.mongodb.com/",
  },
  {
    name: "Redis",
    icon: "/Assets/redis.svg",
    link: "https://redis.io/",
  },
  {
    name: "ExpressJs",
    icon: "/Assets/express.svg",
    link: "https://redis.io/",
  },
];

const Skills = () => {
  useGSAP(() => {
    gsap.to("#gsap-skill-item", {
      scrollTrigger: ".skill-item",
      delay: 0.5,
      opacity: 1,
      scale: 1,
      stagger: {
        each: 0.25,
        grid: "auto",
        from: "end",
      },
    });

    gsap.to("#gsap-technology-item", {
      scrollTrigger: ".technology-item",
      delay: 0.5,
      opacity: 1,
      scale: 1,
      stagger: {
        each: 0.25,
        grid: "auto",
        from: "end",
      },
    });
  }, []);

  return (
    <section id="skills" className="main-skills">
      <div className="Skills">
        <h1>
          Programming <span style={{ color: "#a371f7" }}>Languages</span>
        </h1>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div id="gsap-skill-item" className="skill-item" key={skill.name}>
              <a target="_blank" href={skill.link}>
                <Image
                  src={skill.icon}
                  width={100}
                  height={100}
                  alt={skill.name}
                />
              </a>
              <p className="skill-name">{skill.name}</p>
            </div>
          ))}
        </div>
        <h1>Technologies</h1>
        <div className="technologies-grid">
          {technologies.map((tech) => (
            <div
              id="gsap-technology-item"
              className="technology-item"
              key={tech.name}
            >
              <a target="_blank" href={tech.link}>
                <Image
                  src={tech.icon}
                  width={100}
                  height={100}
                  alt={tech.name}
                />
              </a>
              <p className="tech-name">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
