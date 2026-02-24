import type {
	BannerContent,
	BannerContentData,
} from "../../../shared/lib/types/base.types";

export const getBannerContent = <T extends { item?: BannerContentData }>(
	data: T | null | undefined,
	locale: string,
): BannerContent | undefined => {
	if (!data?.item) return undefined;
	const contentKey = `banner_content_${locale}` as keyof BannerContentData;
	return data.item[contentKey] as BannerContent | undefined;
};
