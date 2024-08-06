import React from "react";
import "../styles/Skills.scss";

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
		</section>
	);
};

export default Skills;
