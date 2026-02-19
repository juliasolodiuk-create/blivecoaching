import type {
	ContentList,
	ImageAsset,
} from "../../src/shared/lib/types/base.types";

export interface HeroContentData {
	title?: string;
	link?: string;
}

export interface HeroData {
	content_ua?: HeroContentData;
	content_en?: HeroContentData;
	content_de?: HeroContentData;
}

export interface PhotoData {
	img?: ImageAsset;
}

export type PhotoWithUrls = Omit<PhotoData, "img"> & {
	imageUrl: string | null;
};

export interface AboutContentData {
	content_ua?: ContentList;
	content_en?: ContentList;
	content_de?: ContentList;
}

export interface AboutData {
	items?: AboutContentData;
	imageSelected?: {
		img?: ImageAsset;
	};
}

export type AboutWithUrls = Omit<AboutData, "imageSelected"> & {
	imageUrl: string | null;
};

export interface HowItWorksData {
	content_ua?: string[];
	content_en?: string[];
	content_de?: string[];
}
