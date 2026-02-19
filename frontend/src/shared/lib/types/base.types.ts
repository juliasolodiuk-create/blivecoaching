export interface ImageAsset {
	asset: { _ref: string; _type: "reference" };
	alt?: string;
}

export interface Content {
	title: string;
	desc: string;
}

export interface ContentList {
	title?: string;
	desc?: string[];
}

export interface BannerContent {
	title: string;
	subTitle: string;
}

export interface BannerContentData {
	icon?: SVGContent;
	banner_content_ua?: BannerContent;
	banner_content_en?: BannerContent;
	banner_content_de?: BannerContent;
}

export interface SharedLink {
	title_ua?: string;
	title_en?: string;
	title_de?: string;
	url?: string;
}

export interface SVGContent {
	name: string;
	svgPath: string;
}
