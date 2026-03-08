export function getLocalizedContent<T, R>(
	data: T | null | undefined,
	keyPrefix: string,
	locale: string,
	fallbackLocale = "ua",
): R | undefined {
	if (!data) return undefined;
	const key = `${keyPrefix}_${locale}` as keyof T;
	const fallbackKey = `${keyPrefix}_${fallbackLocale}` as keyof T;
	return (data[key] ?? data[fallbackKey]) as R | undefined;
}
