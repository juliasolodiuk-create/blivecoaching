import { CogIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const seo = defineType({
	name: "seo",
	title: "SEO Налаштування",
	type: "document",
	icon: CogIcon,
	groups: [
		{ name: "ua", title: "Українська" },
		{ name: "en", title: "English" },
		{ name: "de", title: "Deutsch" },
	],
	fields: [
		defineField({
			name: "ogImage",
			title: "Зображення для соцмереж (1200x630)",
			type: "image",
			options: { hotspot: true },
		}),
		defineField({
			name: "metadata_ua",
			title: "Metadata UA",
			type: "object",
			group: "ua",
			fields: [
				defineField({
					name: "title_ua",
					title: "Title (SEO)",
					type: "string",
				}),
				defineField({
					name: "desc_ua",
					title: "Description (SEO)",
					type: "text",
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
					title: "Title (SEO)",
					type: "string",
				}),
				defineField({
					name: "desc_en",
					title: "Description (SEO)",
					type: "text",
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
					title: "Title (SEO)",
					type: "string",
				}),
				defineField({
					name: "desc_de",
					title: "Description (SEO)",
					type: "text",
				}),
			],
		}),
	],
	preview: {
		prepare() {
			return {
				title: "Глобальні SEO налаштування",
				subtitle: "UA / EN / DE",
			};
		},
	},
});
