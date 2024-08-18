// components/ContactForm.js
"use client";
import { useState } from "react";
import styles from "./styles/ContactForm.module.scss";

const ContactForm = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});
			if (response.ok) {
				// Handle success (e.g., show a success message, clear the form, etc.)
				console.log("Message sent successfully");
			} else {
				// Handle error
				console.log("Error sending message");
			}
		} catch (error) {
			console.log("Error:", error);
		}
	};

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<div>
				<label htmlFor="name">Name:</label>
				<input
					type="text"
					id="name"
					name="name"
					value={formData.name}
					onChange={handleChange}
					required
				/>
			</div>
			<div>
				<label htmlFor="email">Email:</label>
				<input
					type="email"
					id="email"
					name="email"
					value={formData.email}
					onChange={handleChange}
					required
				/>
			</div>
			<div>
				<label htmlFor="message">Message:</label>
				<textarea
					id="message"
					name="message"
					value={formData.message}
					onChange={handleChange}
					required
				></textarea>
			</div>
			<button type="submit">Send Message</button>
		</form>
	);
};

export default ContactForm;
