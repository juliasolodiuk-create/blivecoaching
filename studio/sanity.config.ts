import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schemaTypes";
import { structure } from "./structure";

export default defineConfig({
	document: {
		// prev — это массив стандартных действий (publish, delete, duplicate и т.д.)
		// context — содержит информацию о текущем документе (id, type)
		actions: (prev, context) => {
			// Список ID документов, которые нельзя удалять
			const protectedIds = [
				"hero",
				"seo",
				"problem_one_id",
				"problem_two_id",
				"problem_three_id",
				"shared_problem_link",
			];

			// Если ID текущего документа есть в списке защищенных
			if (protectedIds.includes(context.documentId as string)) {
				// Оставляем все действия, кроме 'delete' и 'duplicate'
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
