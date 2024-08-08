"use client";

import React, { useRef, useEffect } from "react";
import "./styles/TextSlider.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const TextSlider = () => {
	const firstText = useRef(null);
	const secondText = useRef(null);
	const slider = useRef(null);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: document.documentElement,
				scrub: 0.5,
				start: 0,
				end: window.innerHeight,
				onUpdate: (e) => {
					const progress = e.progress * 100;
					const offset = -500 + progress * 5;
					gsap.set(slider.current, { x: `${offset}px` });
				},
			},
		});

		gsap.set([firstText.current, secondText.current], { opacity: 1 });

		gsap.to([firstText.current, secondText.current], {
			xPercent: -100,
			repeat: -1,
			duration: 10,
			ease: "none",
			modifiers: {
				xPercent: gsap.utils.unitize((x) => parseFloat(x) % 100), // Ensure smooth looping
			},
		});
	}, []);

	return (
		<main className="text-slider">
			<div className="slider-container">
				<div ref={slider} className="slider">
					<p ref={firstText}>Crafting Visions Into Realities -</p>
					<p ref={secondText}>Crafting Visions Into Realities -</p>
				</div>
			</div>
		</main>
	);
};

export default TextSlider;
