import {
  BannerContent,
  BannerContentData,
  Content,
  ImageAsset,
  SharedLink,
  SVGContent,
} from "./base.types";

export interface HeroData {
  title_ua?: string;
  title_en?: string;
  title_de?: string;
  img?: ImageAsset | null;
}

export type HeroWithUrls = Omit<HeroData, "img"> & {
  imageUrl: string | null;
};

export interface ProblemContentData {
  problemIcon?: SVGContent;
  arrowIcon?: SVGContent;
  problem_content_ua?: Content;
  problem_content_en?: Content;
  problem_content_de?: Content;
  solution_content_ua?: Content;
  solution_content_en?: Content;
  solution_content_de?: Content;
}

export interface ProblemData {
  items?: ProblemContentData[];
  sharedLink?: SharedLink;
}

export interface BenefitContentData {
  img: ImageAsset;
  benefit_content_ua: Content;
  benefit_content_en: Content;
  benefit_content_de: Content;
}

export interface BenefitData {
  items?: BenefitContentData[];
  sharedLink?: SharedLink;
  imageSelected?: {
    img?: ImageAsset;
  };
}

export type BenefitWithUrls = Omit<BenefitData, "items" | "imageSelected"> & {
  imageSelected: {
    imageUrl: string | null;
  };
  items: (Omit<BenefitContentData, "img"> & { imageUrl: string | null })[];
};

export interface HomeBannerData {
  item?: BannerContentData;
  sharedLink?: SharedLink;
}

export interface FeedbackContentData {
  job?: string;
  name?: string;
  text?: string;
}

export interface FeedbackData {
  img: ImageAsset;
  feedback_ua?: FeedbackContentData;
  feedback_en?: FeedbackContentData;
  feedback_de?: FeedbackContentData;
}

export type FeedbackWithUrls = Omit<FeedbackData, "img"> & {
  imageUrl: string | null;
};

export interface FAQContentData {
  question?: string;
  answer?: string;
}

export interface FAQData {
  question_ua?: FAQContentData;
  question_en?: FAQContentData;
  question_de?: FAQContentData;
}
