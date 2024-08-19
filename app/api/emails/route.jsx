import { Resend } from "resend";
import Welcome from "@/app/emails/Welcome";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
	console.log("API route triggered");

	try {
		const { email, name, subject, message } = await request.json();
		console.log("Received form data:", { email, name, subject, message });

		await resend.emails.send({
			from: "onboarding@resend.dev",
			to: "alan.s.zhang@gmail.com",
			subject: subject || "No Subject Provided",
			react: Welcome({ name, message }),
		});

		return NextResponse.json(
			{ message: "Email sent successfully" },
			{ status: 200 }
		);
	} catch (error) {
		console.error("Error sending email:", error);

		return NextResponse.json(
			{ message: "Failed to send email", error: error.message },
			{ status: 500 }
		);
	}
}
