import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const baseUrl = "https://be-live-coaching.com";
	const locales = ["ua", "en", "de"];

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

	locales.forEach((locale) => {
		routes.forEach((route) => {
			sitemapEntries.push({
				url: `${baseUrl}/${locale}${route}`,
				lastModified: new Date(),
				changeFrequency: "monthly",
				priority: route === "" ? 1 : 0.8,

				alternates: {
					languages: {
						uk: `${baseUrl}/ua${route}`,
						en: `${baseUrl}/en${route}`,
						de: `${baseUrl}/de${route}`,
					},
				},
			});
		});
	});

	return sitemapEntries;
}
