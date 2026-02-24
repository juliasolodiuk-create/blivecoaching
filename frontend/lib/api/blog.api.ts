import { groq } from "next-sanity";
import { client } from "../client";
import type { HighlightData } from "../types/blog.types";

export async function getHighlights(): Promise<HighlightData> {
	const query = groq`*[_type == "highlight"][0]{
    "highlight": highlight->{
      img,
      blog_ua,
      blog_en,
      blog_de
    },
    "subhighlights": subhighlights[]->{
      img,
      blog_ua,
      blog_en,
      blog_de
    }
  }`;
	return await client.fetch(query, {}, { next: { revalidate: 0 } });
}
