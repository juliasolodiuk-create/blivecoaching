"use server";

import { writeClient } from "@/shared/lib/sanity.write";

export async function SubmitQuestionForm(prevState: any, formData: FormData) {
	const message = formData.get("message") as string;

	if (!message) {
		return { success: false, message: "Будьласка заповніть всі поля" };
	}

	try {
		await writeClient.create({
			_type: "faqRequest",
			message,
			createdAt: new Date().toISOString(),
		});

		return { success: true };
	} catch (error) {
		console.error("Помилка форми", error);
		return { success: false, message: "Помилка при відправленні повідомлення" };
	}
}
