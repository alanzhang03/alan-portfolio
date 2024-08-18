import React from "react";
import "../styles/Contact.scss";
import ContactForm from "./ui/ContactForm";

const Contact = () => {
	return (
		<section id="contact" className="main-contact">
			<h1 className="contact-heading">Contact Me</h1>
			<ContactForm />
		</section>
	);
};

export default Contact;
