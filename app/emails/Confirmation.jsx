import { Html, Heading, Text, Section } from "@react-email/components";
import * as React from "react";

export default function Confirmation({ name }) {
	return (
		<Html>
			<Section style={{ fontFamily: "sans-serif", padding: "24px" }}>
				<Heading as="h2">Thanks for reaching out, {name}!</Heading>
				<Text>I received your message and will get back to you as soon as possible.</Text>
				<Text>— Alan Zhang</Text>
			</Section>
		</Html>
	);
}
