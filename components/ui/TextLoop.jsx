"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./styles/TextLoop.scss";

const TextLoop = () => {
	const containerRef = useRef(null);

	const splitTextToLetters = (text) => {
		return text.split("").map((char, index) => (
			<span key={index} className="letter">
				{char}
			</span>
		));
	};

	useEffect(() => {
		let vSlide;
		let elementHeight = document.querySelector(".v-slide").clientHeight;
		animateTitle(elementHeight);

		window.addEventListener("resize", function () {
			elementHeight = document.querySelector(".v-slide").clientHeight;
			animateTitle(elementHeight);
		});

		function animateTitle(height) {
			const vsOpts = {
				slides: document.querySelectorAll(".v-slide"),
				list: document.querySelector(".v-slides"),
				duration: 0.5,
				lineHeight: height,
			};

			const progress = vSlide ? vSlide.progress() : 0;
			if (vSlide) {
				vSlide.revert();
			}
			vSlide = gsap.timeline({
				repeat: -1,
			});

			vsOpts.slides.forEach(function (slide, i) {
				const letters = slide.querySelectorAll(".letter");
				gsap.set(slide, { y: i * -2 * vsOpts.lineHeight, opacity: 0 });

				let label = "slide" + i;
				vSlide.add(label);

				if (i > 0) {
					vSlide.to(
						vsOpts.list,
						{
							duration: vsOpts.duration,
							y: i * 1 * vsOpts.lineHeight,
						},
						label
					);

					vSlide.to(
						slide,
						{
							duration: vsOpts.duration,
							opacity: 1,
						},
						label
					);

					vSlide.from(
						letters,
						{
							duration: vsOpts.duration,
							y: -height,
							stagger: vsOpts.duration / 10,
						},
						label
					);
				}

				if (i < vsOpts.slides.length - 1) {
					vSlide.to(
						letters,
						{
							duration: vsOpts.duration,
							y: height,
							stagger: vsOpts.duration / 10,
						},
						"+=1"
					);

					vSlide.to(
						slide,
						{
							duration: vsOpts.duration,
							opacity: 0,
						},
						"+=1"
					);
				}
			});

			vSlide.to({}, { duration: 3 });

			return vSlide.progress(progress);
		}
	}, []);

	return (
		<div className="container" ref={containerRef}>
			<ul className="v-slides">
				<li className="v-slide">
					{splitTextToLetters("Interactive Web Apps")}
				</li>
				<li className="v-slide">{splitTextToLetters("User Portals")}</li>
				<li className="v-slide">
					{splitTextToLetters("Full-Stack Applications")}
				</li>
				<li className="v-slide">{splitTextToLetters("Community Platforms")}</li>
				<li className="v-slide">{splitTextToLetters("Digital Marketing")}</li>
				<li className="v-slide">{splitTextToLetters("Custom Plugins")}</li>
				<li className="v-slide">
					{splitTextToLetters("Interactive Web Apps")}
				</li>
			</ul>
		</div>
	);
};

export default TextLoop;
