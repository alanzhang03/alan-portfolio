import React from "react";
import "../styles/Skills.scss";

const skills = [
	{ name: "JavaScript", icon: "/Assets/js.svg" },
	{ name: "Html", icon: "/Assets/html.svg" },
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
	{ name: "Webpack", icon: "/Assets/webpack.svg" },
	{ name: "Node", icon: "/Assets/nodejs.svg" },
	{ name: "Vite", icon: "/Assets/vitejs.svg" },
	{ name: "Vue", icon: "/Assets/vue.svg" },
	{ name: "Django", icon: "/Assets/django.svg" },
	{ name: "Github", icon: "/Assets/github.svg" },
	{ name: "git", icon: "/Assets/git.svg" },
	{ name: "Microsoft Office", icon: "/Assets/office.svg" },
];

const Skills = () => {
	return (
		<section id="skills" className="main-skills">
			<h1 className="skills-heading">Services and Skills</h1>
			<div className="grid-setup-skills">
				<div className="skillItem item-1">
					<h2>Custom Software Development</h2>
					<p>
						Tailored solutions including SaaS, CRM, and CMS for optimized
						business processes.
					</p>
				</div>
				<div className="skillItem item-2">
					<h2>User-Friendly Dashboards</h2>
					<p>
						Create intuitive and informative dashboards to empower users with
						actionable insights.
					</p>
				</div>
				<div className="skillItem item-3">
					<h2>Responsive Websites</h2>
					<p>
						Design and develop websites that seamlessly adapt to various devices
						for a great user experience.
					</p>
				</div>
				<div className="skillItem item-4">
					<h2>Business Process Streamlining</h2>
					<p>
						Efficiently streamline and automate key business processes for
						enhanced productivity.
					</p>
				</div>
			</div>
			<div className="Skills">
				<h1>Programming Languages</h1>
				<div className="skills-grid">
					{skills.map((skill) => (
						<div className="skill-item" key={skill.name}>
							<img src={skill.icon} alt={skill.name} />
							<p className="skill-name">{skill.name}</p>
						</div>
					))}
				</div>
				<h1>Technologies</h1>
				<div className="technologies-grid">
					{technologies.map((tech) => (
						<div className="technology-item" key={tech.name}>
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
