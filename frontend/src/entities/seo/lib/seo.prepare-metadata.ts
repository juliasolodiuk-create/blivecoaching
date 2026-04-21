import type { Metadata } from "next";
import { getSeo } from "../api/seo.api";

export async function constructMetadata(locale: string): Promise<Metadata> {
	const seo = await getSeo(locale);
	const baseUrl = "https://be-live-coaching.com";

	const title = seo?.title || "Be Live Coaching";
	const description = seo?.description || "Default description";
	const image = seo?.ogImage || "/default-og.png";

	return {
		title,
		description,
		alternates: {
			canonical: `${baseUrl}/${locale}`,
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
			images: [{ url: image }],
			type: "website",
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
