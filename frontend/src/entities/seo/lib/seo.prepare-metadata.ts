import type { Metadata } from "next";
import { getSeo } from "../api/seo.api";

export async function constructMetadata(locale: string): Promise<Metadata> {
	const seo = await getSeo();
	const baseUrl = "https://be-live-coaching.com";

	const title = seo?.title || "Be Live Coaching";
	const description = seo?.description || "Default description";
	const image = seo?.ogImage || "/default-og.png";

	const canonicalUrl = baseUrl;

	return {
		metadataBase: new URL(baseUrl),
		title,
		description,
		alternates: {
			canonical: canonicalUrl,
		},
		openGraph: {
			title,
			description,
			url: canonicalUrl,
			images: [{ url: image }],
			type: "website",

			locale: "en_US",
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
