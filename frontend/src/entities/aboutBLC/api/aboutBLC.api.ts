import { groq } from "next-sanity";
import { client } from "@/shared/lib/client";
import type {
	AboutData,
	HeroData,
	HowItWorksData,
	PhotoData,
} from "../model/aboutBLC.types";

export async function getHero(): Promise<HeroData> {
	const query = groq`*[_id == "beLiveCoaching_heroTitleScroll"][0] { 
      content_ua, 
      content_en, 
      content_de
  }`;
	return await client.fetch(query, {}, { next: { revalidate: 0 } });
}

export async function getPhoto(): Promise<PhotoData> {
	const query = groq`*[_id == "beLiveCoaching_img"][0] { 
      img
  }`;
	return await client.fetch(query, {}, { next: { revalidate: 0 } });
}

export async function getAbout(): Promise<AboutData> {
	const query = groq`{
    "items": *[_type == "aboutBLC"][0] {
       content_ua, 
       content_en,
       content_de
    },
    "imageSelected": *[_id == "aboutBLC_img"][0] { 
      img,
    }
  }`;
	return await client.fetch(query, {}, { next: { revalidate: 0 } });
}

export async function getHowItWorks(): Promise<HowItWorksData> {
	const query = groq`*[_type == "howItWorks"][0] {
       content_ua, 
       content_en,
       content_de
    }
  `;
	return await client.fetch(query, {}, { next: { revalidate: 0 } });
}
