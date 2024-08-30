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
    link: "https://www.javascript.com/",
  },
  {
    name: "Sass",
    icon: "/Assets/sass.svg",
    link: "https://www.javascript.com/",
  },
  {
    name: "Tailwind",
    icon: "/Assets/tailwind.svg",
    link: "https://www.javascript.com/",
  },
  {
    name: "Css",
    icon: "/Assets/css.svg",
    link: "https://www.javascript.com/",
  },
  {
    name: "Python",
    icon: "/Assets/python.svg",
    link: "https://www.javascript.com/",
  },
  {
    name: "C#",
    icon: "/Assets/csharp.svg",
    link: "https://www.javascript.com/",
  },
  { name: "C", icon: "/Assets/c.svg" },
  {
    name: "Ocaml",
    icon: "/Assets/ocaml.svg",
    link: "https://www.javascript.com/",
  },
  {
    name: "Java",
    icon: "/Assets/java.svg",
    link: "https://www.javascript.com/",
  },
  {
    name: "R",
    icon: "/Assets/r.svg",
    link: "https://www.javascript.com/",
  },
  {
    name: "Matlab",
    icon: "/Assets/matlab.svg",
    link: "https://www.javascript.com/",
  },
];

const technologies = [
  {
    name: "React",
    icon: "/Assets/react.svg",
    link: "https://www.javascript.com/",
  },
  {
    name: "GSAP",
    icon: "/Assets/gsap.svg",
    link: "https://www.javascript.com/",
  },
  {
    name: "Next JS",
    icon: "/Assets/nextjs.svg",
    link: "https://www.javascript.com/",
  },
  {
    name: "Three JS",
    icon: "/Assets/threejs.svg",
    link: "https://www.javascript.com/",
  },
  {
    name: "Webpack",
    icon: "/Assets/webpack.svg",
    link: "https://www.javascript.com/",
  },
  {
    name: "Node",
    icon: "/Assets/nodejs.svg",
    link: "https://www.javascript.com/",
  },
  {
    name: "Vite",
    icon: "/Assets/vitejs.svg",
    link: "https://www.javascript.com/",
  },
  {
    name: "Vue",
    icon: "/Assets/vue.svg",
    link: "https://www.javascript.com/",
  },
  {
    name: "Github",
    icon: "/Assets/github.svg",
    link: "https://www.javascript.com/",
  },
  {
    name: "git",
    icon: "/Assets/git.svg",
    link: "https://www.javascript.com/",
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
                <p className="skill-name">{skill.name}</p>
              </a>
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
                <p className="tech-name">{tech.name}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
