import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const baseUrl = "https://be-live-coaching.com";

	const routes = [
		"",
		"/about-blc",
		"/about-me",
		"/how-to-choose-coach",
		"/privacy-policy",
		"/cookie-policy",
		"/terms-and-conditions",
	];

	const sitemapEntries: MetadataRoute.Sitemap = [];

	routes.forEach((route) => {
		sitemapEntries.push({
			url: `${baseUrl}${route}`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: route === "" ? 1 : 0.8,
		});
	});

	return sitemapEntries;
}
