import { FaceHappyIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const application = defineType({
	name: "application",
	title: "Заявки від клієнтів",
	type: "document",
	icon: FaceHappyIcon,
	fields: [
		defineField({
			name: "fullName",
			title: "Ім'я та Прізвище",
			type: "string",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "email",
			title: "Email",
			type: "string",
			validation: (Rule) => Rule.required().email(),
		}),
		defineField({
			name: "plan",
			title: "Вибраний план",
			type: "reference",
			to: [{ type: "plan" }],
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "status",
			title: "Статус заявки",
			type: "string",
			initialValue: "new",
			options: {
				list: [
					{ title: "Нова", value: "new" },
					{ title: "Зв'язалися", value: "contacted" },
					{ title: "Оплачено", value: "paid" },
				],
			},
		}),
		defineField({
			name: "createdAt",
			title: "Дата подачі",
			type: "datetime",
			initialValue: () => new Date().toISOString(),
		}),
	],
	preview: {
		select: {
			title: "fullName",
			status: "status",
		},
		prepare(selection) {
			const { title, status } = selection;
			const statusLabels: Record<string, string> = {
				new: "🆕 Нова",
				contacted: "📞 Зв'язалися",
				paid: "✅ Оплачено",
			};
			return {
				title: title || "Без назви",
				subtitle: `Статус: ${statusLabels[status] || status}`,
			};
		},
	},
});
