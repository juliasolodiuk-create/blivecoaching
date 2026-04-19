"use server";

import { client } from "@/shared/lib/client";
import { writeClient } from "@/shared/lib/sanity.write";
import { sendAdminNotification } from "../emails/sendAdminNotification";
import { sendApplicantConfirmation } from "../emails/sendApplicantConfirmation";

export async function SubmitApplication(prevState: any, formData: FormData) {
	console.log("ACTION STARTED", Object.fromEntries(formData.entries()));
	const fullName = formData.get("fullName") as string;
	const email = formData.get("email") as string;
	const planName = formData.get("planId") as string;

	try {
		const planDoc = await client.fetch(
			`*[_type == "plan" && (title == $name )][0]`,
			{ name: planName },
		);
		if (!planDoc) {
			return { success: false, message: "План с таким названием не найден" };
		}
		await writeClient.create({
			_type: "application",
			fullName,
			email,
			plan: {
				_type: "reference",
				_ref: planDoc._id,
			},
			status: "new",
			createdAt: new Date().toISOString(),
		});
		await sendApplicantConfirmation({
			applicantName: fullName,
			applicantPlan: planName,
			applicantEmail: email,
		});
		await sendAdminNotification({
			applicantName: fullName,
			applicantPlan: planName,
			applicantEmail: email,
		});

		return { success: true };
	} catch (error) {
		console.error("Ошибка:", error);
		return { success: false, message: "Ошибка при отправке заявки" };
	}
}
