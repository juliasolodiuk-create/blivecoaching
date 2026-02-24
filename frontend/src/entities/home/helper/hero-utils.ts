import type { HeroWithUrls } from "../model/home.types";

export const getHeroContent = (
	data: HeroWithUrls | null | undefined,
	locale: string,
): string | undefined => {
	if (!data) return undefined;
	const contentKey = `title_${locale}` as keyof HeroWithUrls;
	return data[contentKey] as string | undefined;
};
