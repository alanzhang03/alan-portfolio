import React from "react";
import "../styles/About.scss";
import AboutDescrip from "./ui/AboutDescrip";
import AboutGrid from "./ui/AboutGrid";
import TextSlider from "./ui/TextSlider";
import ContributionsHeatmap from "./ui/ContributionsHeatmap";

const About = () => {
	return (
		<>
			<section id="about" className="main-about">
				<h1 className="about-me-header">Who Am I?</h1>
				<AboutDescrip />
				<ContributionsHeatmap />
				<TextSlider />
				<AboutGrid />
			</section>
		</>
	);
};

export default About;
