import { FaceHappyIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const callbackRequest = defineType({
	name: "callbackRequest",
	title: "Зворотній звʼязок",
	type: "document",
	icon: FaceHappyIcon,
	fields: [
		defineField({
			name: "fullName",
			title: "Ім'я та Прізвище",
			type: "string",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "email",
			title: "Email",
			type: "string",
			validation: (Rule) => Rule.required().email(),
		}),
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
			title: "fullName",
			subTitle: "email",
		},
		prepare(selection) {
			const { title, subTitle } = selection;

			return {
				title: title || "Без назви",
				subtitle: subTitle,
			};
		},
	},
});
