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
				<h1 className="about-me-header">
					Who Am <span style={{ color: "#a371f7" }}>I?</span>
				</h1>
				<AboutDescrip />
				<ContributionsHeatmap />
				<TextSlider />
				<AboutGrid />
			</section>
		</>
	);
};

export default About;
