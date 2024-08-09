"use client";

import { FaLocationArrow } from "react-icons/fa6";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "../styles/HomePage.scss";
import Link from "next/link";
import { FaArrowDownLong } from "react-icons/fa6";
import TextLoop from "./ui/TextLoop";

const HomePage = () => {
	useGSAP(() => {
		gsap.to("#port-intro-gsap span", {
			duration: 2,
			opacity: 1,
			stagger: {
				each: 0.3,
				from: "start",
			},
		});
		gsap.to("#small-intro-gsap", {
			opacity: 1,
			delay: 2,
			duration: 1.5,
		});
		gsap.to("#learn-more-container-gsap", {
			delay: 3,
			opacity: 1,
		});
		gsap.from("#gsap-arrow-down", {
			opacity: 0,
			delay: 4,
			duration: 2,
		});
	}, []);

	return (
		<section id="homePage" className="main-homepage">
			<p className="mini-header">DYNAMIC WEB EXPERIENCE WITH NEXT.JS</p>
			<h1 id="port-intro-gsap" className="port-intro">
				<span>Crafting </span>
				<span>Concepts </span>
				<span>into </span>
				<span>Effortless </span>
				<span className="purple-text"> User Interactions</span>
			</h1>
			<p id="small-intro-gsap" className="small-intro">
				Hi! I'm <span className="purple-text"> Alan Zhang</span>, an aspiring
				<span className="purple-text"> Full-Stack Developer</span>
			</p>
			<nav id="learn-more-container-gsap" className="learn-more-container">
				<Link className="learn-more" href="#about">
					Learn More <FaLocationArrow className="location-arrow" />
				</Link>
			</nav>
			<TextLoop />
			<FaArrowDownLong id="gsap-arrow-down" className="arrow-down" />
		</section>
	);
};

export default HomePage;
