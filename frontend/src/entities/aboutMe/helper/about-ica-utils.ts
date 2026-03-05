import type { Content } from "@/shared/lib/types/base.types";

export const getAboutICAContent = <T>(
	data: T | null | undefined,
	locale: string,
): Content | undefined => {
	if (!data) return undefined;

	const key = `text_${locale}` as keyof T;
	return data[key] as Content | undefined;
};
