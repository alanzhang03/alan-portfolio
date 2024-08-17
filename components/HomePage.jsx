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
import { FaGithub } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";

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
			Icon: <FaGithub />,
			Link: "",
		},
		{
			Title: "LinkedIn",
			Icon: <CiLinkedin />,
			Link: "",
		},
		{
			Title: "Email",
			Icon: <MdOutlineEmail />,
			Link: "",
		},
		{
			Title: "Twitter",
			Icon: <CiTwitter />,
			Link: "",
		},
		{
			Title: "Instagram",
			Icon: <FaInstagram />,
			Link: "",
		},
	];

	const mapSocialLinks = socialLinks.map((socials) => {
		return (
			<div className="social-box">
				<div className="home-page-icon">{socials.Icon}</div>
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

			<TextLoop />
			<FaArrowDownLong id="gsap-arrow-down" className="arrow-down" />
		</section>
	);
};

export default HomePage;
