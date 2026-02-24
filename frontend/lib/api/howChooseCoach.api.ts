import { groq } from "next-sanity";
import { client } from "../client";
import type { HowChooseCoachData } from "../types/howChooseCoach.types";

export async function getHowChooseCoach(): Promise<HowChooseCoachData> {
	const query = groq`*[_type == "guide"][0]{
    guide_ua,
    guide_en,
    guide_de,
  }`;
	return await client.fetch(query, {}, { next: { revalidate: 0 } });
}
