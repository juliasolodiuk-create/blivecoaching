"use server";

import { writeClient } from "@/shared/lib/sanity.write";

export async function SubmitCallbackForm(prevState: any, formData: FormData) {
	const fullName = formData.get("fullName") as string;
	const email = formData.get("email") as string;
	const message = formData.get("message") as string;

	if (!fullName || !email || !message) {
		return {
			success: false,
			message: "Будь ласка, заповніть усі обов'язкові поля",
		};
	}

	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailRegex.test(email)) {
		return {
			success: false,
			message: "Будь ласка, введіть коректну адресу електронної пошти",
		};
	}

	try {
		await writeClient.create({
			_type: "callbackRequest",
			fullName,
			email,
			message,
			createdAt: new Date().toISOString(),
		});

		return { success: true };
	} catch (error) {
		console.error("Помилка форми:", error);
		return {
			success: false,
			message: "Виникла помилка при відправці. Спробуйте пізніше",
		};
	}
}
