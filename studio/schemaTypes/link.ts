import { LinkIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const link = defineType({
	name: "link",
	type: "document",
	groups: [
		{ name: "ua", title: "Українська" },
		{ name: "en", title: "English" },
		{ name: "de", title: "Deutsch" },
	],
	icon: LinkIcon,
	fields: [
		defineField({
			name: "title_ua",
			type: "string",
			title: "Заголовок",
			group: "ua",
		}),
		defineField({
			name: "title_en",
			type: "string",
			title: "Title",
			group: "en",
		}),
		defineField({
			name: "title_de",
			type: "string",
			title: "Titel",
			group: "de",
		}),
		defineField({
			name: "link",
			type: "url",
			title: "URL",
			group: ["ua", "en", "de"],
		}),
	],
	preview: {
		select: {
			title: "title_ua",
		},
		prepare(selection) {
			const { title } = selection;
			return {
				title: title || "Посилання",
			};
		},
	},
});
