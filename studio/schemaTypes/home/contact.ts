import { EnvelopeIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const contact = defineType({
	name: "contact",
	title: "Контактна інформація",
	type: "document",
	icon: EnvelopeIcon,
	fields: [
		defineField({
			name: "content",
			title: "Контент",
			type: "object",
			fields: [
				defineField({
					name: "email",
					title: "Email",
					type: "string",
				}),
				defineField({
					name: "phone",
					title: "Phone",
					type: "string",
				}),
			],
		}),
	],
	preview: {
		prepare() {
			return {
				title: "Контактна Інформація",
			};
		},
	},
});
