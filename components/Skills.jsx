"use client";

import React from "react";
import "../styles/Skills.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skills = [
	{ name: "JavaScript", icon: "/Assets/js.svg" },
	{ name: "Html", icon: "/Assets/html.svg" },
	{ name: "Sass", icon: "/Assets/sass.svg" },
	{ name: "Tailwind", icon: "/Assets/tailwind.svg" },
	{ name: "Css", icon: "/Assets/css.svg" },
	{ name: "Python", icon: "/Assets/python.svg" },
	{ name: "C#", icon: "/Assets/csharp.svg" },
	{ name: "C", icon: "/Assets/c.svg" },
	{ name: "Ocaml", icon: "/Assets/ocaml.svg" },
	{ name: "Java", icon: "/Assets/java.svg" },
	{ name: "R", icon: "/Assets/r.svg" },
	{ name: "Matlab", icon: "/Assets/matlab.svg" },
];

const technologies = [
	{ name: "React", icon: "/Assets/react.svg" },
	{ name: "GSAP", icon: "/Assets/gsap.svg" },
	{ name: "Next JS", icon: "/Assets/nextjs.svg" },
	{ name: "Three JS", icon: "/Assets/threejs.svg" },
	{ name: "Webpack", icon: "/Assets/webpack.svg" },
	{ name: "Node", icon: "/Assets/nodejs.svg" },
	{ name: "Vite", icon: "/Assets/vitejs.svg" },
	{ name: "Vue", icon: "/Assets/vue.svg" },
	{ name: "Github", icon: "/Assets/github.svg" },
	{ name: "git", icon: "/Assets/git.svg" },
];

const Skills = () => {
	useGSAP(() => {
		gsap.to("#gsap-skill-item", {
			scrollTrigger: "#skill-item",
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
			scrollTrigger: "#technology-item",
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
						
							<img src={skill.icon} alt={skill.name} />
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
							<img src={tech.icon} alt={tech.name} />
							<p className="tech-name">{tech.name}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Skills;
