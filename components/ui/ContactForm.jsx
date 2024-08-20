"use client";

import React from "react";
import "./styles/ContactForm.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ContactForm = ({ onInputChange }) => {
	useGSAP(() => {
		gsap.to(".contact-form-container span", {
			scrollTrigger: ".contact-form-container",
			opacity: 1,
			delay: 0.5,
			duration: 1,
			stagger: {
				from: "start",
				each: 0.25,
			},
		});

		gsap.to(".contact-form-container input,textarea", {
			scrollTrigger: ".contact-form-container",
			opacity: 1,
			delay: 1.5,
			duration: 1,
			stagger: {
				from: "start",
				each: 0.25,
			},
		});
	}, []);

	return (
		<form className="contact-form-container">
			<span>Name</span>
			<input
				type="text"
				name="name"
				placeholder="Your Name"
				onChange={onInputChange}
				required
			/>
			<span>Email</span>
			<input
				type="email"
				name="email"
				placeholder="Your Email"
				onChange={onInputChange}
				required
			/>
			<span>Subject</span>
			<input
				type="text"
				name="subject"
				placeholder="Subject"
				onChange={onInputChange}
				required
			/>

			<span>Message</span>
			<textarea
				name="message"
				placeholder="Your Message"
				onChange={onInputChange}
				required
			></textarea>
		</form>
	);
};

export default ContactForm;
