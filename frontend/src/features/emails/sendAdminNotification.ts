import { Resend } from "resend";
import AdminNotification from "./templates/AdminNotification";
import type { SendEmailData } from "./types/types";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendAdminNotification = async (payload: SendEmailData) => {
	try {
		const { data, error } = await resend.emails.send({
			// to: "tishyninpavlo@gmail.com",
			to: "juliasolodiuk@gmail.com",
			from: "Be Live Coaching <info@pavlotishynin.com>",
			subject: `Новая заявка: ${payload.applicantName}`,
			react: AdminNotification({ data: payload }),
		});

		if (error) {
			console.error("Resend API Error:", error);
		} else {
			console.log("Email sent successfully:", data);
		}
	} catch (err) {
		console.error("Unexpected error in sendEmail:", err);
	}
};
