import { UserIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const myWhy = defineType({
	name: "myWhy",
	title: "Моє Чому",
	type: "document",
	groups: [
		{ name: "ua", title: "Українська" },
		{ name: "en", title: "English" },
		{ name: "de", title: "Deutsch" },
	],
	icon: UserIcon,
	fields: [
		defineField({
			name: "big_img_selected",
			type: "image",
			options: {
				hotspot: true,
			},
			title: "Велика Картинка",
		}),
		defineField({
			name: "small_img_selected",
			type: "image",
			options: {
				hotspot: true,
			},
			title: "Маленька Картинка",
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
						Rule.max(300).error("Текст не може перевищувати 300 символів"),
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
						Rule.max(300).error("Текст не може перевищувати 300 символів"),
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
						Rule.max(300).error("Текст не може перевищувати 300 символів"),
				}),
			],
		}),
	],
	preview: {
		prepare() {
			return {
				title: "Моє Чому",
			};
		},
	},
});
