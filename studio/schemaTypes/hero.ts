import { PresentationIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const hero = defineType({
	name: "hero",
	title: "Початкова секція",
	type: "document",
	groups: [
		{ name: "ua", title: "Українська" },
		{ name: "en", title: "English" },
		{ name: "de", title: "Deutsch" },
	],
	icon: PresentationIcon,
	fields: [
		defineField({
			name: "img",
			type: "image",
			options: {
				hotspot: true,
			},
			title: "Картинка",
		}),
		defineField({
			name: "title_ua",
			title: "Заголовок",
			type: "string",
			validation: (Rule) => Rule.max(50).error("Заголовок занадто довгий"),
			group: "ua",
		}),
		defineField({
			name: "title_en",
			title: "Title",
			type: "string",
			validation: (Rule) => Rule.max(50).error("Заголовок занадто довгий"),
			group: "en",
		}),
		defineField({
			name: "title_de",
			title: "Titel",
			type: "string",
			validation: (Rule) => Rule.max(50).error("Заголовок занадто довгий"),
			group: "de",
		}),
	],
	preview: {
		select: {
			title: "title_ua",
		},
		prepare(selection) {
			const { title } = selection;
			return {
				title: title,
			};
		},
	},
});
