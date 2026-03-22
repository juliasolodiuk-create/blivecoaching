import { SparkleIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const faq = defineType({
	name: "faq",
	title: "Запитання",
	type: "document",
	groups: [
		{ name: "ua", title: "Українська" },
		{ name: "en", title: "English" },
		{ name: "de", title: "Deutsch" },
	],
	icon: SparkleIcon,
	fields: [
		defineField({
			name: "question_ua",
			title: "Запитання",
			type: "object",
			group: "ua",
			fields: [
				defineField({
					name: "question",
					title: "Запитання",
					type: "string",
				}),

				defineField({
					name: "answer",
					title: "Відповідь",
					type: "text",
				}),
			],
		}),

		defineField({
			name: "question_en",
			title: "Question",
			type: "object",
			group: "en",
			fields: [
				defineField({
					name: "question",
					title: "Question",
					type: "string",
				}),

				defineField({
					name: "answer",
					title: "Answer",
					type: "text",
				}),
			],
		}),

		defineField({
			name: "question_de",
			title: "Frage",
			type: "object",
			group: "de",
			fields: [
				defineField({
					name: "question",
					title: "Frage",
					type: "string",
				}),

				defineField({
					name: "answer",
					title: "Antwort",
					type: "text",
				}),
			],
		}),
	],
	preview: {
		select: {
			question: "question_ua.question",
			subtitle: "question_ua.answer",
		},
		prepare(selection) {
			const { question, subtitle } = selection;
			return {
				title: question,
				subtitle: subtitle,
			};
		},
	},
});
