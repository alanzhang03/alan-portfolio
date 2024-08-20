"use client";

import React, { useRef, useEffect } from "react";
import "./styles/TextSlider.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const TextSlider = () => {
	const firstText = useRef(null);
	const secondText = useRef(null);
	const slider = useRef(null);
	const sliderContainer = useRef(null);
	const xPercent = useRef(0);
	const direction = useRef(-1);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		gsap.to(slider.current, {
			scrollTrigger: {
				trigger: sliderContainer.current,
				scrub: 0.5,
				start: "top bottom",
				end: "bottom top",
				onUpdate: (e) => (direction.current = e.direction * -1),
			},
			x: "-500px",
		});

		requestAnimationFrame(animate);
	}, []);

	const animate = () => {
		if (xPercent.current < -100) {
			xPercent.current = 0;
		} else if (xPercent.current > 0) {
			xPercent.current = -100;
		}

		gsap.set(firstText.current, { xPercent: xPercent.current });
		gsap.set(secondText.current, { xPercent: xPercent.current });

		xPercent.current += 0.03 * direction.current;

		requestAnimationFrame(animate);
	};

	return (
		<main className="text-slider">
			<div ref={sliderContainer} className="slider-container">
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
