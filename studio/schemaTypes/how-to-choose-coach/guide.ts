import { UserIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const guide = defineType({
	name: "guide",
	title: "Як Обрати Коуча",
	type: "document",
	groups: [
		{ name: "ua", title: "Українська" },
		{ name: "en", title: "English" },
		{ name: "de", title: "Deutsch" },
	],
	icon: UserIcon,
	fields: [
		defineField({
			name: "guide_ua",
			title: "Опис",
			type: "object",
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
				defineField({
					name: "desc",
					title: "Опис",
					type: "array",
					validation: (Rule) =>
						Rule.max(5).error("Можна додати не більше 5 описів"),
					of: [
						defineField({
							name: "desc",
							title: "Опис",
							type: "text",
							validation: (Rule) =>
								Rule.max(500).error("Текст не може перевищувати 500 символів"),
						}),
					],
				}),
			],
			group: "ua",
		}),

		defineField({
			name: "guide_en",
			title: "Description",
			type: "object",
			fields: [
				defineField({
					name: "title",
					title: "Title",
					type: "string",
				}),
				defineField({
					name: "subTitle",
					title: "Sub Title",
					type: "string",
				}),
				defineField({
					name: "desc",
					title: "Description",
					type: "array",
					validation: (Rule) =>
						Rule.max(5).error("Можна додати не більше 5 описів"),
					of: [
						defineField({
							name: "desc",
							title: "Description",
							type: "text",
							validation: (Rule) =>
								Rule.max(500).error("Текст не може перевищувати 500 символів"),
						}),
					],
				}),
			],
			group: "en",
		}),
		defineField({
			name: "guide_de",
			title: "Beschreibung",
			type: "object",
			fields: [
				defineField({
					name: "title",
					title: "Titel",
					type: "string",
				}),
				defineField({
					name: "subTitle",
					title: "Halbtitel",
					type: "string",
				}),
				defineField({
					name: "desc",
					title: "Beschreibung",
					type: "array",
					validation: (Rule) =>
						Rule.max(5).error("Можна додати не більше 5 описів"),
					of: [
						defineField({
							name: "desc",
							title: "Beschreibung",
							type: "text",
							validation: (Rule) =>
								Rule.max(500).error("Текст не може перевищувати 500 символів"),
						}),
					],
				}),
			],
			group: "de",
		}),
	],
	preview: {
		prepare() {
			return {
				title: "Про Коуча",
			};
		},
	},
});
