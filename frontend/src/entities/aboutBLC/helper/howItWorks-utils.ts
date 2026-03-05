export const getHowItWorksContent = <T>(
	data: T | null | undefined,
	locale: string,
): string[] | undefined => {
	if (!data) return undefined;

	const key = `content_${locale}` as keyof T;
	return data[key] as string[] | undefined;
};
