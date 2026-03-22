import { Resend } from "resend";
import ApplicationNotification from "./templates/ApplicationNotification";
import type { SendEmailData } from "./types/types";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendApplicantConfirmation = async (payload: SendEmailData) => {
	try {
		const { data, error } = await resend.emails.send({
			to: payload.applicantEmail,
			from: "Be Live Coaching <info@pavlotishynin.com>",
			subject: "Ми отримали вашу заявку! | Be Live Coaching",
			react: ApplicationNotification({ data: payload }),
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
