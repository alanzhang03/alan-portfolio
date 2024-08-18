"use client";

import React from "react";
import "../styles/Contact.scss";
import ContactForm from "./ui/ContactForm";

const Contact = () => {
	return (
		<section id="contact" className="main-contact">
			<h1 className="contact-heading">Contact Me</h1>
			<ContactForm />
			<button
				className="test-button"
				onClick={async () => {
					await fetch("/api/emails", { method: "POST" });
				}}
			>
				Send Button
			</button>
		</section>
	);
};

export default Contact;
