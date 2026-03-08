import type {
	BannerContentData,
	Content,
	ImageAsset,
	SharedLink,
} from "@/shared/lib/types/base.types";

export interface AboutMeData {
	desc_ua?: string[];
	desc_en?: string[];
	desc_de?: string[];
	img_selected?: ImageAsset | null;
}

export type AboutMeWithUrls = Omit<AboutMeData, "img"> & {
	imageUrl: string | null;
};

export interface MyWhyData {
	desc_ua?: string[];
	desc_en?: string[];
	desc_de?: string[];
	small_img_selected?: ImageAsset | null;
	big_img_selected?: ImageAsset | null;
}

export type MyWhyWithUrls = Omit<
	MyWhyData,
	"small_img_selected" | "big_img_selected"
> & {
	smallImageUrl: string | null;
	bigImageUrl: string | null;
};

export interface AboutBannerData {
	item?: BannerContentData;
}

export interface AboutICAData {
	text_ua?: Content;
	text_en?: Content;
	text_de?: Content;
}

export interface AboutBannerCTAData {
	item?: BannerContentData;
	sharedLink?: SharedLink;
}
