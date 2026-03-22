import { BookIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const aboutICA = defineType({
	name: "aboutICA",
	title: "Про ICA",
	type: "document",
	groups: [
		{ name: "ua", title: "Українська" },
		{ name: "en", title: "English" },
		{ name: "de", title: "Deutsch" },
	],
	icon: BookIcon,
	fields: [
		defineField({
			name: "text_ua",
			title: "Текст",
			type: "object",
			group: "ua",
			fields: [
				{
					name: "title",
					type: "string",
					title: "Заголовок",
				},
				{
					name: "desc",
					title: "Опис",
					type: "text",
					validation: (Rule) =>
						Rule.max(700).error("Текст не може перевищувати 700 символів"),
				},
			],
		}),

		defineField({
			name: "text_en",
			title: "Text",
			type: "object",
			group: "en",
			fields: [
				{
					name: "title",
					type: "string",
					title: "Title",
				},
				{
					name: "desc",
					title: "Опис",
					type: "text",
					validation: (Rule) =>
						Rule.max(700).error("Текст не може перевищувати 700 символів"),
				},
			],
		}),
		defineField({
			name: "text_de",
			title: "Text",
			type: "object",
			group: "de",
			fields: [
				{
					name: "title",
					type: "string",
					title: "Titel",
				},
				{
					name: "desc",
					title: "Опис",
					type: "text",
					validation: (Rule) =>
						Rule.max(700).error("Текст не може перевищувати 700 символів"),
				},
			],
		}),
	],
	preview: {
		select: {
			title: "text_ua.title",
			subTitle: "text_ua.desc",
		},
		prepare(selection) {
			const { title, subTitle } = selection;
			return {
				title: title,
				subtitle: subTitle,
			};
		},
	},
});
