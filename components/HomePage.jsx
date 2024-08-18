"use client";

import { FaLocationArrow } from "react-icons/fa6";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "../styles/HomePage.scss";
import Link from "next/link";
import { FaArrowDownLong } from "react-icons/fa6";
import TextLoop from "./ui/TextLoop";

//Icons
import LinkedIn from "../public/Assets/LinkedInHomepage.svg";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";

const HomePage = () => {
	useGSAP(() => {
		gsap.to(".social-box", {
			delay: 3,
			opacity: 1,
			duration: 1,
			stagger: {
				each: 0.2,
				from: "start",
			},
		});

		gsap.from("#gsap-arrow-down", {
			opacity: 0,
			delay: 5,
			duration: 2,
		});
	}, []);

	const socialLinks = [
		{
			Title: "GitHub",
			Icon: <FaGithub />,
			Link: "https://github.com/alanzhang03",
		},
		{
			Title: "LinkedIn",
			Icon: <CiLinkedin />,
			Link: "https://www.linkedin.com/in/alan-zhang-a254b8233/",
		},
		{
			Title: "Email",
			Icon: <MdOutlineEmail />,
			Link: "mailto:alan.s.zhang04@gmail.com",
		},
		{
			Title: "Twitter",
			Icon: <CiTwitter />,
			Link: "https://twitter.com/cloudeelol",
		},
		{
			Title: "Instagram",
			Icon: <FaInstagram />,
			Link: "https://www.instagram.com/_alanzhang_3/",
		},
	];

	const mapSocialLinks = socialLinks.map((socials) => {
		return (
			<a target="_blank" href={socials.Link} rel="noreferrer">
				<div className="social-box">
					<div className="home-page-icon">{socials.Icon}</div>
					<p className="socials-text">{socials.Title}</p>
				</div>
			</a>
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
