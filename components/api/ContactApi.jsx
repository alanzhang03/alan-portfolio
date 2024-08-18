// pages/api/contact.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
	if (req.method === "POST") {
		const { name, email, message } = req.body;

		// Set up Nodemailer transporter
		const transporter = nodemailer.createTransport({
			service: "gmail", // You can use other services as well, like 'SendGrid', 'Mailgun', etc.
			auth: {
				user: process.env.EMAIL_USER, 
				pass: process.env.EMAIL_PASS, // Your Gmail app password (not your regular password)
			},
		});

		// Define the email options
		const mailOptions = {
			from: email, // Sender's email address (form input)
			to: "alan.s.zhang04@gmail.com", // Your email address where you want to receive messages
			subject: `New message from ${name}`, // Email subject
			text: message, // Email body
			html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong><br/>${message}</p>`, // HTML formatted email body
		};

		try {
			// Send the email
			await transporter.sendMail(mailOptions);
			res.status(200).json({ message: "Message sent successfully" });
		} catch (error) {
			console.error(error);
			res.status(500).json({ message: "Failed to send message" });
		}
	} else {
		res.setHeader("Allow", ["POST"]);
		res.status(405).end(`Method ${req.method} not allowed`);
	}
}
