import type { BlogContentData, BlogWithUrl } from "../model/home.types";

export const getBlogContent = (
	data: BlogWithUrl | null | undefined,
	locale: string,
): BlogContentData | undefined => {
	if (!data) return undefined;
	const contentKey = `blog_${locale}` as keyof BlogWithUrl;
	return (data[contentKey] || data.blog_ua) as BlogContentData;
};
