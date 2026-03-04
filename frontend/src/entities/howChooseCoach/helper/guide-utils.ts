import type { HowChooseCoachContentData } from "../model/howChooseCoach.types";

export const getGuideContent = <T>(
	data: T | null | undefined,
	locale: string,
): HowChooseCoachContentData | undefined => {
	if (!data) return undefined;

	const key = `guide_${locale}` as keyof T;
	return data[key] as HowChooseCoachContentData | undefined;
};
