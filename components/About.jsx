import React from "react";
import "../styles/About.scss";
import AboutDescrip from "./ui/AboutDescrip";
import TextSlider from "./ui/TextSlider";

const About = () => {
	return (
		<>
			<section id="about" className="main-about">
				<h1 className="about-me-header">Who Am I?</h1>
				<AboutDescrip />
				<div className="about-me-page-grid-container">
					<div className="item grid-item-1">hi</div>
					<div className="item grid-item-2">Hi</div>
				</div>
				<TextSlider />
			</section>
		</>
	);
};

export default About;
