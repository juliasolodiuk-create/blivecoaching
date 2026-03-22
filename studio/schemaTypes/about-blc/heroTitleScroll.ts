import { PresentationIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const heroTitleScroll = defineType({
	name: "heroTitleScroll",
	title: "Початкова секція з скролом",
	type: "document",
	groups: [
		{ name: "ua", title: "Українська" },
		{ name: "en", title: "English" },
		{ name: "de", title: "Deutsch" },
	],
	icon: PresentationIcon,
	fields: [
		defineField({
			name: "content_ua",
			title: "Контент",
			type: "object",
			fields: [
				defineField({
					name: "title",
					title: "Заголовок",
					type: "string",
				}),
				defineField({
					name: "link",
					title: "Текст для Сролла",
					type: "string",
					validation: (Rule) => Rule.max(50).error("Текст занадто довгий"),
				}),
			],
			group: "ua",
		}),

		defineField({
			name: "content_en",
			title: "Content",
			type: "object",
			fields: [
				defineField({
					name: "title",
					title: "Title",
					type: "string",
				}),
				defineField({
					name: "link",
					title: "Text for Scroll",
					type: "string",
					validation: (Rule) => Rule.max(50).error("Текст занадто довгий"),
				}),
			],
			group: "en",
		}),
		defineField({
			name: "content_de",
			title: "Inhalt",
			type: "object",
			fields: [
				defineField({
					name: "title",
					title: "Titel",
					type: "string",
				}),
				defineField({
					name: "link",
					title: "Text für Scrollen",
					type: "string",
					validation: (Rule) => Rule.max(50).error("Текст занадто довгий"),
				}),
			],
			group: "de",
		}),
	],
	preview: {
		select: {
			title: "content_ua.title",
		},
		prepare(selection) {
			const { title } = selection;
			return {
				title: title,
			};
		},
	},
});
