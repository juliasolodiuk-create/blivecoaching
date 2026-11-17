import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/shared/lib/i18n/request.ts");

const nextConfig: NextConfig = {
	async redirects() {
		return [
			{
				source: "/manage",
				destination: "https://coaching-website.sanity.studio/",
				permanent: false,
			},
			// Старі мовні версії → англійська
			// (/en/... → /... next-intl перенаправляє сам)
			{ source: "/ua", destination: "/", permanent: true },
			{ source: "/ua/:path*", destination: "/:path*", permanent: true },
			{ source: "/de", destination: "/", permanent: true },
			{ source: "/de/:path*", destination: "/:path*", permanent: true },
		];
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "cdn.sanity.io",
				port: "",
			},
		],
		qualities: [75, 95, 100],
	},
	turbopack: {
		root: ".",
	},
};

export default withNextIntl(nextConfig);
