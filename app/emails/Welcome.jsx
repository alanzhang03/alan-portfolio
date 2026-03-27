import { Html, Heading, Text, Section } from "@react-email/components";
import * as React from "react";

export default function Welcome({ name, email, message }) {
	return (
		<Html>
			<Section style={{ fontFamily: "sans-serif", padding: "24px" }}>
				<Heading as="h2">New message from your portfolio</Heading>
				<Text><strong>Name:</strong> {name}</Text>
				<Text><strong>Email:</strong> {email}</Text>
				<Text><strong>Message:</strong></Text>
				<Text style={{ whiteSpace: "pre-wrap" }}>{message}</Text>
			</Section>
		</Html>
	);
}
