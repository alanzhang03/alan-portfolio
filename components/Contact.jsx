import React from "react";
import "../styles/Contact.scss";
import ContactForm from "./ui/ContactForm";
import Email from "../emails/Email";

const Contact = () => {
	return (
		<section id="contact" className="main-contact">
			<h1 className="contact-heading">Contact Me</h1>
			<ContactForm />
			<Email />
		</section>
	);
};

export default Contact;
