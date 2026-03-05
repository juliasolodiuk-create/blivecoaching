import type { HeroContentData } from "../model/aboutBLC.types";

export const getHeroContent = <T>(
	data: T | null | undefined,
	locale: string,
): HeroContentData | undefined => {
	if (!data) return undefined;

	const key = `content_${locale}` as keyof T;
	return data[key] as HeroContentData | undefined;
};
