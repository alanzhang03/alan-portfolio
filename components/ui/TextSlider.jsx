"use client";

import React, { useRef, useEffect } from "react";
import "./styles/TextSlider.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const TextSlider = () => {
	const firstText = useRef(null);
	const secondText = useRef(null);
	const slider = useRef(null);
	let xPercent = 0;
	let direction = -1;

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		gsap.to(slider.current, {
			scrollTrigger: {
				trigger: document.documentElement,

				scrub: 0.5,

				start: 0,

				end: window.innerHeight,

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

		xPercent += 0.04 * direction;
	};

	return (
		<main className="text-slider">
			<div className="slider-container">
				<div ref={slider} className="slider">
					<p ref={firstText}>Building Digital Experiences - </p>
					<p ref={secondText}>Building Digital Experiences - </p>
				</div>
			</div>
		</main>
	);
};

export default TextSlider;
