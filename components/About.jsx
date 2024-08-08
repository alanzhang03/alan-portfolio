import React from "react";
import "../styles/About.scss";
import Link from "next/link";

const About = () => {
	return (
		<section id="about" className="main-about">
			<h1 className="about-me-header">Who Am I?</h1>
			<p id="gsap-about-me-description" className="about-me-description">
				Aspiring
				<span> Full-Stack developer. </span>
				current undergrad student majoring in
				<span>
					{" "}
					<a target="_blank" href="https://www.cs.umd.edu/">
						{" "}
						Computer Science{" "}
					</a>{" "}
				</span>{" "}
				at the
				<span>
					{" "}
					<a target="_blank" href="https://www.cs.umd.edu/">
						{" "}
						University of Maryland, College Park{" "}
					</a>{" "}
				</span>{" "}
				(Expected grad in May 2025) I have developed a wide range of
				<span> interactive web applications </span>
				using various programming languages which you can view in the
				<span>
					<Link href="#projects"> projects section </Link>
				</span>
				of this portfolio!
			</p>
			<div className="about-me-page-grid-container">
				<div className="item grid-item-1">hi</div>
				<div className="item grid-item-2">Hi</div>
			</div>
		</section>
	);
};

export default About;
