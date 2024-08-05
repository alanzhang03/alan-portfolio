"use client";
import { FaLocationArrow } from "react-icons/fa6";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "../styles/HomePage.scss";
import Link from "next/link";
import { FaArrowDownLong } from "react-icons/fa6";

const HomePage = () => {
	useGSAP(() => {
		gsap.to("#port-intro-gsap", {
			opacity: 1,
			duration: 2,
		});
		gsap.to("#small-intro-gsap", {
			opacity: 1,
			delay: 1,
			duration: 1.5,
		});
		gsap.to("#learn-more-container-gsap", {
			delay: 2,
			opacity: 1,
		});
	}, []);

	return (
		<section id="homePage" className="main">
			<p className="mini-header">DYNAMIC WEB EXPERIENCE WITH NEXT.JS</p>
			<h1 id="port-intro-gsap" className="port-intro">
				Crafting Concepts into Effortless
				<span className="purple-text"> User Interactions</span>
			</h1>
			<p id="small-intro-gsap" className="small-intro">
				I'm Alan Zhang, an aspiring Full-Stack Developer!
			</p>
			<nav id="learn-more-container-gsap" className="learn-more-container">
				<Link className="learn-more" href="#about">
					Learn More <FaLocationArrow className="location-arrow" />
				</Link>
			</nav>
			<FaArrowDownLong className="arrow-down" />
		</section>
	);
};

export default HomePage;
