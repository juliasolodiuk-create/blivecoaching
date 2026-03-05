export const getHeroContent = <T>(
	data: T | null | undefined,
	locale: string,
): string[] | undefined => {
	if (!data) return undefined;

	const key = `desc_${locale}` as keyof T;
	return data[key] as string[] | undefined;
};
