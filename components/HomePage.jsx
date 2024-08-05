"use client";
import { FaLocationArrow } from "react-icons/fa6";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "../styles/HomePage.scss";
import Link from "next/link";

const HomePage = () => {
	useGSAP(() => {
		gsap.to(".port-intro", {
			opacity: 1,
			stagger: {
				opacity: 1,
				duration: 3,
			},
		});
	}, []);

	return (
		<section id="homePage" className="main">
			<p className="mini-header">DYNAMIC WEB EXPERIENCE WITH NEXT.JS</p>
			<h1 className="port-intro">
				Crafting Concepts into Effortless
				<span className="purple-text"> User Interactions</span>
			</h1>
			<p className="small-intro">
				I'm Alan Zhang, an aspiring Full-Stack Developer!
			</p>
			<nav className="learn-more-container">
				<Link className="learn-more" href="#about">
					Learn More <FaLocationArrow className="location-arrow" />
				</Link>
			</nav>
		</section>
	);
};

export default HomePage;
