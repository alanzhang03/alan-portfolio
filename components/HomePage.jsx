"use client";

import { FaLocationArrow } from "react-icons/fa6";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "../styles/HomePage.scss";
import Link from "next/link";
import { FaArrowDownLong } from "react-icons/fa6";
import TextLoop from "./ui/TextLoop";
import Image from "next/image";

//Icons
import LinkedIn from "../public/Assets/LinkedInHomepage.svg";

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

	const socialLinks = [
		{
			Title: "GitHub",
			Icon: "",
			Link: "",
		},
		{
			Title: "LinkedIn",
			Icon: LinkedIn,
			Link: "",
		},
		{
			Title: "Email",
			Icon: "",
			Link: "",
		},
		{
			Title: "Twitter",
			Icon: "",
			Link: "",
		},
		{
			Title: "Instagram",
			Icon: "",
			Link: "",
		},
	];

	const mapSocialLinks = socialLinks.map((socials) => {
		return (
			<div className="social-box">
				<Image className="home-page-icon" src={socials.Icon}></Image>
				<p className="socials-text">{socials.Title}</p>
			</div>
		);
	});

	return (
		<section id="homePage" className="main-homepage">
			<p className="mini-header">DYNAMIC WEB EXPERIENCE WITH NEXT.JS</p>
			<h1 className="home-page-header">Welcome to my Portfolio</h1>
			<h1 className="home-page-header">
				I'm <span className="home-page-name">Alan Zhang</span>
			</h1>

			<div className="socials-container">{mapSocialLinks}</div>

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
