import { defineField, defineType } from "sanity";

export const icons = defineType({
	name: "icons",
	title: "Icons",
	type: "document",
	fields: [
		defineField({ name: "name", type: "string", title: "Name" }),
		defineField({ name: "svgPath", type: "string", title: "SVG Path" }),
	],
});
