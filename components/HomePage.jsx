"use client";

import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "../styles/HomePage.scss";
import StarField from "./ui/StarField";

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
		<section className="main">
			<p className="mini-header">DYNAMIC WEB EXPERIENCE WITH NEXT.JS</p>
			<h1 className="port-intro">
				Crafting Concepts into Effortless
				<span className="purple-text"> User Interactions</span>
			</h1>
			<p className="small-intro">
				I'm Alan Zhang, an aspiring Full-Stack Developer!
			</p>
		</section>
	);
};

export default HomePage;
