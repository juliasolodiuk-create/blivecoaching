import type { Metadata } from "next";
import { getSeo } from "../api/seo.api";

export async function constructMetadata(locale: string): Promise<Metadata> {
	const seo = await getSeo(locale);
	const baseUrl = "https://be-live-coaching.com";

	const title = seo?.title || "Be Live Coaching";
	const description = seo?.description || "Default description";
	const image = seo?.ogImage || "/default-og.png";

	const currentPath = locale === "en" ? "" : `/${locale}`;
	const canonicalUrl = `${baseUrl}${currentPath}`;

	return {
		title,
		description,
		alternates: {
			canonical: canonicalUrl,
			languages: {
				uk: `${baseUrl}/ua`,
				en: `${baseUrl}/en`,
				de: `${baseUrl}/de`,
				"x-default": `${baseUrl}/en`,
			},
		},
		openGraph: {
			title,
			description,
			url: canonicalUrl,
			images: [{ url: image }],
			type: "website",
			locale: locale === "ua" ? "uk_UA" : locale,
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: [image],
		},
		icons: {
			icon: "/favicon.ico",
		},
	};
}
