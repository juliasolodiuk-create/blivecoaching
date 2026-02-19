export const getFaqContent = <T, R>(
	data: T | undefined | null,
	prefix: string,
	locale: string,
): R | undefined => {
	if (!data) return undefined;
	const key = `${prefix}_${locale}` as keyof T;
	return (data[key] || data[`${prefix}_ua` as keyof T]) as R;
};
