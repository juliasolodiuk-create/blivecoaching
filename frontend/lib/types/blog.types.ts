import type { ImageAsset } from "../../src/shared/lib/types/base.types";

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
