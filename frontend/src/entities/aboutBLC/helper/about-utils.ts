import type { ContentList } from "@/shared/lib/types/base.types";

export const getAboutContent = <T>(
	data: T | null | undefined,
	locale: string,
): ContentList | undefined => {
	if (!data) return undefined;

	const key = `content_${locale}` as keyof T;
	return data[key] as ContentList | undefined;
};
