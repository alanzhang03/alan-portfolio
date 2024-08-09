"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import React from "react";
import "./styles/AboutDescrip.scss";
import Link from "next/link";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutDescrip = () => {
	useGSAP(() => {
		gsap.to("#gsap-about-me-description span", {
			scrollTrigger: ".about-me-description",
			duration: 2,
			delay: 0.5,
			opacity: 1,
			stagger: {
				each: 0.175,
				from: "start",
			},
		});

		gsap.to(".section-2-divider span", {
			scrollTrigger: ".section-2-divider",
			duration: 2,
			delay: 2.6,
			opacity: 1,
			stagger: {
				each: 0.175,
				from: "start",
			},
		});
	}, []);

	return (
		<>
			<p id="gsap-about-me-description" className="about-me-description">
				<span>Aspiring</span>
				<span className="purple-text"> Full-Stack developer </span>
				<span>and current undergrad student majoring in</span>
				<span className="purple-text">
					{" "}
					<a target="_blank" href="https://www.cs.umd.edu/">
						{" "}
						Computer Science{" "}
					</a>{" "}
				</span>{" "}
				<span>at the</span>
				<span className="purple-text">
					{" "}
					<a target="_blank" href="https://www.cs.umd.edu/">
						{" "}
						University of Maryland, College Park{" "}
					</a>{" "}
				</span>{" "}
				<span>(Expected grad in May 2025). </span>
				<span>I have developed a wide range of</span>
				<span className="purple-text">
					<Link href="#projects"> interactive web applications </Link>
				</span>
				<span>which you can view in the</span>
				<span className="purple-text">
					<Link href="#projects"> projects section </Link>
				</span>
				<span>of this portfolio!</span>
			</p>
			<div className="about-section-2">
				<div className="section-2-divider">
					<span className="number">3</span>+ Years Of Experience
				</div>
				<div className="section-2-divider">
					<span className="number">100</span>% Client Satisfaction
				</div>
				<div className="section-2-divider">
					<span className="number">15</span>+ Completed Projects
				</div>
			</div>
		</>
	);
};

export default AboutDescrip;