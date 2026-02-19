import type { SharedLink } from "../../../shared/lib/types/base.types";

export const getButtonContent = <T extends { sharedLink?: SharedLink }>(
	data: T | null | undefined,
	locale: string,
): string | undefined => {
	if (!data) return undefined;
	const contentKey = (`title_${locale}` as keyof SharedLink) || "Discover more";
	return data?.sharedLink?.[contentKey] as string | undefined;
};
