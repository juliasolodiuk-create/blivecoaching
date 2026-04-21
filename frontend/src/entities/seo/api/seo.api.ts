import { groq } from "next-sanity";
import { client } from "@/shared/lib/client";
import type { SeoData } from "../model/seo.types";

export async function getSeo(locale: string): Promise<SeoData> {
	const query = groq`*[_type == "seo"][0]{
        "data": select(
            $locale == "ua" => metadata_ua {
                "title": title_ua,
                "description": desc_ua,
                "ogImage": ogImage.asset->url
            },
            $locale == "en" => metadata_en {
                "title": title_en,
                "description": desc_en,
                "ogImage": ogImage.asset->url
            },
            $locale == "de" => metadata_de {
                "title": title_de,
                "description": desc_de,
                "ogImage": ogImage.asset->url
            }
        )
    }.data`;

	const result = await client.fetch(query, { locale });
	return result || {};
}
