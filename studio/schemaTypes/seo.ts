import { CogIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const seo = defineType({
	name: "seo",
	title: "SEO Налаштування",
	type: "document",
	groups: [
		{ name: "ua", title: "Українська" },
		{ name: "en", title: "English" },
		{ name: "de", title: "Deutsch" },
	],
	icon: CogIcon,
	fields: [
		defineField({
			name: "metadata_ua",
			title: "Metadata UA",
			type: "object",
			group: "ua",
			fields: [
				defineField({
					name: "title_ua",
					title: "Title",
					type: "string",
				}),
				defineField({
					name: "desc_ua",
					title: "Description",
					type: "string",
				}),
			],
		}),
		defineField({
			name: "metadata_en",
			title: "Metadata EN",
			type: "object",
			group: "en",
			fields: [
				defineField({
					name: "title_en",
					title: "Title",
					type: "string",
				}),
				defineField({
					name: "desc_en",
					title: "Description",
					type: "string",
				}),
			],
		}),
		defineField({
			name: "metadata_de",
			title: "Metadata DE",
			type: "object",
			group: "de",
			fields: [
				defineField({
					name: "title_de",
					title: "Title",
					type: "string",
				}),
				defineField({
					name: "desc_de",
					title: "Description",
					type: "string",
				}),
			],
		}),
	],
	preview: {
		select: {
			title: "metadata_ua.title",
		},
		prepare() {
			return {
				title: "SEO Налаштування",
			};
		},
	},
});
