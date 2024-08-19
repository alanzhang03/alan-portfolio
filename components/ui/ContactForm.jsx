import React from "react";
import "./styles/ContactForm.scss";

const ContactForm = ({ onInputChange }) => {
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
