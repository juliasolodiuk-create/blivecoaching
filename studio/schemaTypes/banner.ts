import { PresentationIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const banner = defineType({
	name: "banner",
	title: "Баннер",
	type: "document",
	groups: [
		{ name: "ua", title: "Українська" },
		{ name: "en", title: "English" },
		{ name: "de", title: "Deutsch" },
	],
	icon: PresentationIcon,
	fields: [
		defineField({
			name: "banner_content_ua",
			title: "Контент",
			type: "object",
			group: "ua",
			fields: [
				defineField({
					name: "title",
					title: "Заголовок",
					type: "string",
				}),
				defineField({
					name: "subTitle",
					title: "Підзаголовок",
					type: "string",
				}),
			],
		}),
		defineField({
			name: "banner_content_en",
			title: "Content",
			type: "object",
			group: "en",
			fields: [
				defineField({
					name: "title",
					title: "Title",
					type: "string",
				}),
				defineField({
					name: "subTitle",
					title: "Subtitle",
					type: "string",
				}),
			],
		}),
		defineField({
			name: "banner_content_de",
			title: "Inhalt",
			type: "object",
			group: "de",
			fields: [
				defineField({
					name: "title",
					title: "Titel",
					type: "string",
				}),
				defineField({
					name: "subTitle",
					title: "Untertitel",
					type: "string",
				}),
			],
		}),
	],
	preview: {
		select: {
			title: "title_ua",
		},
		prepare(selection) {
			const { title } = selection;
			return {
				title: title || "Баннер",
			};
		},
	},
});
