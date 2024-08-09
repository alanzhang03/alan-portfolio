"use client";

import React, { useRef, useEffect } from "react";
import "./styles/TextSlider.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const TextSlider = () => {
	const firstText = useRef(null);
	const secondText = useRef(null);
	const slider = useRef(null);
	const sliderContainer = useRef(null); // New ref for the container
	let xPercent = 0;
	let direction = -1;

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		gsap.to(slider.current, {
			scrollTrigger: {
				trigger: sliderContainer.current, // Updated trigger to the container

				scrub: 0.5,

				start: "top bottom", // Start when the top of the container hits the bottom of the viewport

				end: "bottom top", // End when the bottom of the container hits the top of the viewport

				onUpdate: (e) => (direction = e.direction * -1),
			},

			x: "-500px",
		});

		requestAnimationFrame(animate);
	}, []);

	const animate = () => {
		if (xPercent < -100) {
			xPercent = 0;
		} else if (xPercent > 0) {
			xPercent = -100;
		}

		gsap.set(firstText.current, { xPercent: xPercent });

		gsap.set(secondText.current, { xPercent: xPercent });

		requestAnimationFrame(animate);

		xPercent += 0.05 * direction;
	};

	return (
		<main className="text-slider">
			<div ref={sliderContainer} className="slider-container">
				{" "}
				{/* Added ref to the container */}
				<div ref={slider} className="slider">
					<p className="text-slider-text" ref={firstText}>
						Crafting Visions Into Realities -
					</p>
					<p className="text-slider-text" ref={secondText}>
						Crafting Visions Into Realities -
					</p>
				</div>
			</div>
		</main>
	);
};

export default TextSlider;
