import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "./env";

console.log("Токен загружен:", !!process.env.SANITY_WRITE_TOKEN);
// Этот клиент имеет права на запись
export const writeClient = createClient({
	projectId,
	dataset,
	apiVersion,
	useCdn: false,
	token: process.env.SANITY_WRITE_TOKEN,
});
