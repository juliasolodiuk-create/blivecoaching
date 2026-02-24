import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schemaTypes";
import { structure } from "./structure";

export default defineConfig({
	document: {
		actions: (prev, context) => {
			const protectedIds = [
				"hero",
				"seo",
				"problem_one_id",
				"problem_two_id",
				"problem_three_id",
				"shared_problem_link",
			];

			if (protectedIds.includes(context.documentId as string)) {
				return prev.filter(
					(action) =>
						action.action !== "delete" && action.action !== "duplicate",
				);
			}

			return prev;
		},
	},
	name: "default",
	title: "be-live-coaching",

	projectId: "x03vy68c",
	dataset: "production",

	plugins: [structureTool({ structure }), visionTool()],

	schema: {
		types: schemaTypes,
	},
});
