import { ImageIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const img = defineType({
	name: "img",
	type: "document",

	icon: ImageIcon,
	fields: [
		defineField({
			name: "img",
			type: "image",
			options: {
				hotspot: true,
			},
			title: "Картинка",
		}),
	],
	preview: {
		select: {
			image: "img",
		},

		prepare(selection) {
			const { image } = selection;
			return {
				title: "Картинка",
				media: image,
			};
		},
	},
});
