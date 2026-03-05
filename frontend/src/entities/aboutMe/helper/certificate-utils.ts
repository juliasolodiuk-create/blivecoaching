import type { BannerContent } from "@/shared/lib/types/base.types";

export const getCertificateContent = <T>(
	data: T | null | undefined,
	locale: string,
): BannerContent | undefined => {
	if (!data) return undefined;

	const key = `banner_content_${locale}` as keyof T;
	return data[key] as BannerContent | undefined;
};
