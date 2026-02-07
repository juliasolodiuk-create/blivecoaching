import { UserIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const aboutMe = defineType({
	name: "aboutMe",
	title: "Про Мене",
	type: "document",
	groups: [
		{ name: "ua", title: "Українська" },
		{ name: "en", title: "English" },
		{ name: "de", title: "Deutsch" },
	],
	icon: UserIcon,
	fields: [
		defineField({
			name: "img_selected",
			type: "image",
			options: {
				hotspot: true,
			},
			title: "Картинка",
		}),
		defineField({
			name: "desc_ua",
			title: "Опис",
			type: "array",
			group: "ua",
			validation: (Rule) =>
				Rule.max(4).error("Можна додати не більше 4 описів"),
			of: [
				defineField({
					name: "desc",
					title: "Опис",
					type: "text",
					validation: (Rule) =>
						Rule.max(450).error("Текст не може перевищувати 450 символів"),
				}),
			],
		}),

		defineField({
			name: "desc_en",
			title: "Description",
			type: "array",
			group: "en",
			validation: (Rule) =>
				Rule.max(4).error("Можна додати не більше 4 описів"),
			of: [
				defineField({
					name: "desc",
					title: "Description",
					type: "text",
					validation: (Rule) =>
						Rule.max(450).error("Текст не може перевищувати 450 символів"),
				}),
			],
		}),
		defineField({
			name: "desc_de",
			title: "Beschreibung",
			type: "array",
			group: "de",
			validation: (Rule) =>
				Rule.max(4).error("Можна додати не більше 4 описів"),
			of: [
				defineField({
					name: "desc",
					title: "Beschreibung",
					type: "text",
					validation: (Rule) =>
						Rule.max(450).error("Текст не може перевищувати 450 символів"),
				}),
			],
		}),
	],
	preview: {
		select: {
			title: "desc_ua",
		},
		prepare(selection) {
			const { title } = selection;
			return {
				title: "Про Мене",
			};
		},
	},
});
