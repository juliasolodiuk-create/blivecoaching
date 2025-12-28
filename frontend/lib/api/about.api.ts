import { groq } from "next-sanity";
import { client } from "../client";
import {
  AboutBannerCTAData,
  AboutBannerData,
  AboutICAData,
  AboutMeData,
  MyWhyData,
} from "../types/about.types";

export async function getAboutMe(): Promise<AboutMeData> {
  const query = groq`*[_type == "aboutMe"][0]{
    desc_ua,
    desc_en,
    desc_de,
    img_selected
  }`;
  return await client.fetch(query, {}, { next: { revalidate: 0 } });
}

export async function getMyWhy(): Promise<MyWhyData> {
  const query = groq`*[_type == "myWhy"][0]{
    desc_ua,
    desc_en,
    desc_de,
    small_img_selected,
    big_img_selected
  }`;
  return await client.fetch(query, {}, { next: { revalidate: 0 } });
}

export async function getBanner(): Promise<MyWhyData> {
  const query = groq`*[_type == "myWhy"][0]{
    desc_ua,
    desc_en,
    desc_de,
    small_img_selected,
    big_img_selected
  }`;
  return await client.fetch(query, {}, { next: { revalidate: 0 } });
}

export async function getAboutBanner(): Promise<AboutBannerData> {
  const query = groq`{"item": *[_type == "banner" && _id == "about_banner"][0]{
    banner_content_ua,
    banner_content_en,
    banner_content_de,
    "icon": icon-> { name, svgPath },
  }}`;
  return await client.fetch(query, {}, { next: { revalidate: 0 } });
}

export async function getAboutICA(): Promise<AboutICAData[]> {
  const query = groq`*[_type == "aboutICA"] {
      
       text_ua,
       text_en,
       text_de,
    
}`;
  return await client.fetch(query, {}, { next: { revalidate: 0 } });
}

export async function getAboutBannerCTA(): Promise<AboutBannerCTAData> {
  const query = groq`{"item": *[_type == "banner" && _id == "about_bannerCTA"][0]{
    banner_content_ua,
    banner_content_en,
    banner_content_de,
    "icon": icon-> { name, svgPath },
  },
    "sharedLink": *[_id == "about_bannerCTA_link"][0] { 
      title_ua, title_en, title_de, url 
    }}`;
  return await client.fetch(query, {}, { next: { revalidate: 0 } });
}
