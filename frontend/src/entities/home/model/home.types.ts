import type {
	BannerContentData,
	Content,
	ImageAsset,
	SharedLink,
	SVGContent,
} from "../../../shared/lib/types/base.types";

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
	img: ImageAsset;
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

export type ProblemWithUrls = Omit<ProblemData, "items"> & {
	items: (Omit<ProblemContentData, "img"> & { imageUrl: string | null })[];
};

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

export interface FeedbacksSectionData {
	items: FeedbackWithUrls[];
}

export interface FAQContentData {
	question?: string;
	answer?: string;
}

export interface FAQData {
	question_ua?: FAQContentData;
	question_en?: FAQContentData;
	question_de?: FAQContentData;
}

export interface BlogContentData {
	title?: string;
	subTitle?: string;
	text?: string;
}

export interface BlogData {
	blog_ua?: BlogContentData;
	blog_en?: BlogContentData;
	blog_de?: BlogContentData;
	img?: ImageAsset;
}

export type BlogWithUrl = Omit<BlogData, "img"> & {
	imageUrl: string | null;
};

export interface HighlightContentData {
	highlight?: BlogData;
}

export interface HighlightData {
	highlight?: BlogData;
	subhighlights?: BlogData[];
}

export interface HighlightWithUrls {
	highlight: BlogWithUrl | null;
	subhighlights: BlogWithUrl[];
}

export interface PlanContent {
	description: string[];
}

export interface Plans {
	isMostPopular: boolean;
	content_ua: PlanContent;
	content_en: PlanContent;
	content_de: PlanContent;
	title: string;
	isNonActive: boolean;
}

export interface ContactContentData {
	content: {
		email: string;
		phone: string;
	};
}
export interface ContactData {
	items?: ContactContentData;
	imageSelected?: {
		img?: ImageAsset;
	};
}

export type ContactWithUrls = Omit<ContactData, "imageSelected"> & {
	imageSelected: {
		imageUrl: string | null;
	};
};
