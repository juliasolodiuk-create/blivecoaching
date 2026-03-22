import { PackageIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const plan = defineType({
	name: "plan",
	title: "План",
	type: "document",
	icon: PackageIcon,
	groups: [
		{ name: "ua", title: "Українська" },
		{ name: "en", title: "English" },
		{ name: "de", title: "Deutsch" },
	],
	fields: [
		defineField({
			name: "isMostPopular",
			title: "Найпопулярніший вибір",
			type: "boolean",
			description:
				"Увімкніть тільки для одного плану. Якщо інший план вже має цей статус, його потрібно вимкнути вручну.",
			initialValue: false,
		}),
		defineField({
			name: "isNonActive",
			title: "Неактивне",
			type: "boolean",
			description: "Увімкніть тільки для неактивного плану",
			initialValue: false,
		}),
		defineField({
			name: "price",
			title: "Вартість",
			type: "number",
		}),
		defineField({
			name: "title",
			title: "Назва плану",
			type: "string",
			validation: (Rule) => Rule.required(),
		}),

		defineField({
			name: "content_ua",
			title: "Контент",
			type: "object",
			group: "ua",
			fields: [
				defineField({
					name: "description",
					title: "Опис",
					type: "array",
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
			],
		}),
		defineField({
			name: "content_en",
			title: "Content",
			type: "object",
			group: "en",
			fields: [
				defineField({
					name: "description",
					title: "Description",
					type: "array",
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
			],
		}),
		defineField({
			name: "content_de",
			title: "Контент",
			type: "object",
			group: "de",
			fields: [
				defineField({
					name: "description",
					title: "Beschreibung",
					type: "array",
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
		}),
	],
	preview: {
		select: {
			title: "title",
			isPopular: "isMostPopular",
			isNonActive: "isNonActive",
		},
		prepare({ title, isPopular, isNonActive }) {
			const status = [
				isPopular ? "⭐ POPULAR" : "",
				isNonActive ? "🚫 HIDDEN" : "",
			]
				.filter(Boolean)
				.join(" | ");
			return {
				title: title || "Без назви",
				subtitle: `${status ? `(${status})` : ""}`,
			};
		},
	},
});
