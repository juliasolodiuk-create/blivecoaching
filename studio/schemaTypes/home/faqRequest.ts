import { FaceHappyIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const faqRequest = defineType({
	name: "faqRequest",
	title: "Запитання від клієнтів",
	type: "document",
	icon: FaceHappyIcon,
	fields: [
		defineField({
			name: "message",
			title: "Message",
			type: "text",
			validation: (Rule) =>
				Rule.max(450).error("Текст не може перевищувати 450 символів"),
		}),

		defineField({
			name: "createdAt",
			title: "Дата подачі",
			type: "datetime",
			initialValue: () => new Date().toISOString(),
		}),
	],
	preview: {
		select: {
			title: "message",
			createdAt: "createdAt",
		},
		prepare(selection) {
			const { title, createdAt } = selection;

			return {
				title: title || "Без назви",
				subtitle: createdAt,
			};
		},
	},
});
