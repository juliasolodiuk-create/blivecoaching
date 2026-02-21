import { TrendUpwardIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const benefits = defineType({
	name: "benefits",
	title: "Проблема",
	type: "document",
	groups: [
		{ name: "ua", title: "Українська" },
		{ name: "en", title: "English" },
		{ name: "de", title: "Deutsch" },
	],
	icon: TrendUpwardIcon,
	fields: [
		defineField({
			name: "benefit_content_ua",
			title: "Зміст переваги",
			type: "object",
			group: "ua",
			fields: [
				{
					name: "title",
					type: "string",
					title: "Заголовок",
					validation: (Rule) => Rule.max(50).error("Заголовок занадто довгий"),
				},
				{
					name: "desc",
					type: "text",
					title: "Опис",
					validation: (Rule) =>
						Rule.max(300).error("Текст не може перевищувати 200 символів"),
				},
			],
		}),
		defineField({
			name: "benefit_content_en",
			title: "Content of the advantage",
			type: "object",
			group: "en",
			fields: [
				{
					name: "title",
					type: "string",
					title: "Title",
					validation: (Rule) => Rule.max(50).error("Заголовок занадто довгий"),
				},
				{
					name: "desc",
					type: "text",
					title: "Description",
					validation: (Rule) =>
						Rule.max(300).error("Текст не може перевищувати 200 символів"),
				},
			],
		}),

		defineField({
			name: "benefit_content_de",
			title: "Inhalt des Vorteils",
			type: "object",
			group: "de",
			fields: [
				{
					name: "title",
					type: "string",
					title: "Titel",
					validation: (Rule) => Rule.max(50).error("Заголовок занадто довгий"),
				},
				{
					name: "desc",
					type: "text",
					title: "Beschreibung",
					validation: (Rule) =>
						Rule.max(300).error("Текст не може перевищувати 200 символів"),
				},
			],
		}),
	],
	preview: {
		select: {
			title: "benefit_content_ua.title",
			image: "img",
		},

		prepare(selection) {
			const { title, image } = selection;
			return {
				title: title || "Нова Перевага (пусто)",
				media: image,
			};
		},
	},
});
