import { FeedbackIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const feedbacks = defineType({
	name: "feedback",
	title: "Відгуки",
	type: "document",
	groups: [
		// { name: "ua", title: "Українська" },
		{ name: "en", title: "English" },
		// { name: "de", title: "Deutsch" },
	],
	icon: FeedbackIcon,
	fields: [
		// defineField({
		// name: "feedback_ua",
		// title: "Відгук",
		// type: "object",
		// group: "ua",
		// fields: [
		// defineField({
		// name: "text",
		// title: "Текст",
		// type: "text",
		// }),

		// defineField({
		// name: "name",
		// title: "Ім'я",
		// type: "string",
		// }),
		// defineField({
		// name: "job",
		// title: "Посада",
		// type: "string",
		// }),
		// ],
		// }),

		defineField({
			name: "feedback_en",
			title: "Feedback",
			type: "object",
			group: "en",
			fields: [
				defineField({
					name: "text",
					title: "Text",
					type: "text",
				}),

				defineField({
					name: "name",
					title: "Name",
					type: "string",
				}),
				defineField({
					name: "job",
					title: "Position",
					type: "string",
				}),
			],
		}),

		// defineField({
		// name: "feedback_de",
		// title: "Zeugnis",
		// type: "object",
		// group: "de",
		// fields: [
		// defineField({
		// name: "text",
		// title: "Text",
		// type: "text",
		// }),

		// defineField({
		// name: "name",
		// title: "Name",
		// type: "string",
		// }),
		// defineField({
		// name: "job",
		// title: "Position",
		// type: "string",
		// }),
		// ],
		// }),
	],
	preview: {
		select: {
			title: "feedback_en.name",
			subtitle: "feedback_en.job",
		},
		prepare(selection) {
			const { title, subtitle } = selection;
			return {
				title: title,
				subtitle: subtitle,
				media: FeedbackIcon,
			};
		},
	},
});
