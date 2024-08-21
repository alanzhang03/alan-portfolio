"use client";

import React, { useState } from "react";
import "../styles/Contact.scss";
import ContactForm from "./ui/ContactForm";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
	useGSAP(() => {
		gsap.from(".submit-contact-form-button", {
			scrollTrigger: ".submit-contact-form-button",
			opacity: 0,
			delay: 2.5,
		});

		gsap.to(".submit-contact-form-button", {
			scrollTrigger: ".submit-contact-form-button",
			opacity: 1,
			delay: 2.5,
		});
	}, []);

	const [formData, setFormData] = useState({
		email: "",
		name: "",
		subject: "",
		message: "",
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = async () => {
		if (
			!formData.email ||
			!formData.name ||
			!formData.subject ||
			!formData.message
		) {
			alert("All fields are required.");
			return;
		}

		if (!validateEmail(formData.email)) {
			alert("Please enter a valid email address.");
			return;
		}

		try {
			const response = await fetch("/api/emails", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			const result = await response.json();
			if (response.ok) {
				alert("Email sent successfully!");
			} else {
				alert(`Failed to send email: ${result.message}`);
			}
		} catch (error) {
			console.error("Error:", error);
			alert("An error occurred while sending the email.");
		}
	};

	const validateEmail = (email) => {
		const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return re.test(String(email).toLowerCase());
	};

	return (
		<section id="contact" className="main-contact">
			<h1 className="contact-heading">Contact Me</h1>
			<ContactForm onInputChange={handleInputChange} />
			<button className="submit-contact-form-button" onClick={handleSubmit}>
				Submit
			</button>
		</section>
	);
};

export default Contact;
