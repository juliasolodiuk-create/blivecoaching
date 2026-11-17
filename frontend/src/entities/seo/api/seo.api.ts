import { groq } from "next-sanity";
import { client } from "@/shared/lib/client";
import type { SeoData } from "../model/seo.types";

export async function getSeo(): Promise<SeoData> {
	const query = groq`*[_type == "seo"][0]{
        "title": metadata_en.title_en,
        "description": metadata_en.desc_en,
        "ogImage": ogImage.asset->url
    }`;

	const result = await client.fetch(query);
	return result || {};
}
