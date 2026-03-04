import { groq } from "next-sanity";
import { client } from "@/shared/lib/client";
import type {
	BenefitData,
	ContactData,
	FAQData,
	FeedbackData,
	HeroData,
	HighlightData,
	HomeBannerData,
	ProblemData,
} from "../model/home.types";

export async function getHero(): Promise<HeroData> {
	const query = groq`*[_type == "hero"][0]{
    title_ua,
    title_en,
    title_de,
    img
  }`;
	return await client.fetch(query, {}, { next: { revalidate: 0 } });
}

export async function getProblems(): Promise<ProblemData> {
	const query = groq`{
    "items": *[_type == "problems"] {
       img,
       "problemIcon": problemIcon-> { name, svgPath },
       "arrowIcon": arrowIcon-> { name, svgPath },
       problem_content_ua, solution_content_ua,
       problem_content_en, solution_content_en,
       problem_content_de, solution_content_de
    },
    "sharedLink": *[_id == "shared_problem_link"][0] { 
      title_ua, title_en, title_de, url 
    }
  }`;
	return await client.fetch(query, {}, { next: { revalidate: 0 } });
}

export async function getBenefits(): Promise<BenefitData> {
	const query = groq`{
    "items": *[_type == "benefits"] {
       img,
       benefit_content_ua, 
       benefit_content_en,
       benefit_content_de
    },
    "sharedLink": *[_id == "shared_benefit_link"][0] { 
      title_ua, title_en, title_de, url 
    },
    "imageSelected": *[_id == "benefit_img"][0] { 
      img,
    }
  }`;
	return await client.fetch(query, {}, { next: { revalidate: 0 } });
}

export async function getBannerHowToChooseCoach(): Promise<HomeBannerData> {
	const query = groq`{"item": *[_type == "banner" && _id == "home_bannerCTA"][0]{
    banner_content_ua,
    banner_content_en,
    banner_content_de,
    "icon": icon-> { name, svgPath },
  }, "sharedLink": *[_id == "home_bannerCTA_link"][0] { 
      title_ua, title_en, title_de, url 
    }}`;
	return await client.fetch(query, {}, { next: { revalidate: 0 } });
}

export async function getFeedbacks(): Promise<FeedbackData[]> {
	const query = groq`*[_type == "feedback"]{
    feedback_ua,
      feedback_en,
      feedback_de,
    img
  }`;
	return await client.fetch(query, {}, { next: { revalidate: 0 } });
}

export async function getFAQ(): Promise<FAQData[]> {
	const query = groq`*[_type == "faq"]{
     question_ua,
      question_en,
      question_de
  }`;
	return await client.fetch(query, {}, { next: { revalidate: 0 } });
}

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

export async function getContacts(): Promise<ContactData> {
	const query = groq`{"items": *[_type == "contact"][0]{
  content
  },
  "imageSelected": *[_id == "contact_img"][0] { 
      img,
    }}`;
	return await client.fetch(query, {}, { next: { revalidate: 0 } });
}
