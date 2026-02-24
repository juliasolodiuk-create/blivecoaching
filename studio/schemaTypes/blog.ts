import { ListIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const blog = defineType({
	name: "blog",
	title: "Блог",
	type: "document",
	groups: [
		{ name: "ua", title: "Українська" },
		{ name: "en", title: "English" },
		{ name: "de", title: "Deutsch" },
	],
	icon: ListIcon,
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
			name: "blog_ua",
			title: "Пост",
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
					title: "Підзаголовк",
					type: "string",
				}),
				defineField({
					name: "text",
					title: "Текст",
					type: "text",
				}),
			],
		}),

		defineField({
			name: "blog_en",
			title: "Пост",
			type: "object",
			group: "en",
			fields: [
				defineField({
					name: "title",
					title: "Заголовок",
					type: "string",
				}),

				defineField({
					name: "subTitle",
					title: "Підзаголовк",
					type: "string",
				}),
				defineField({
					name: "text",
					title: "Текст",
					type: "text",
				}),
			],
		}),
		defineField({
			name: "blog_de",
			title: "Пост",
			type: "object",
			group: "de",
			fields: [
				defineField({
					name: "title",
					title: "Заголовок",
					type: "string",
				}),

				defineField({
					name: "subTitle",
					title: "Підзаголовк",
					type: "string",
				}),
				defineField({
					name: "text",
					title: "Текст",
					type: "text",
				}),
			],
		}),
	],
	preview: {
		select: {
			title: "blog_ua.title",
			subtitle: "blog_ua.subTitle",
			image: "img",
		},
		prepare(selection) {
			const { title, subtitle, image } = selection;
			return {
				title: title,
				subtitle: subtitle,
				media: image,
			};
		},
	},
});
