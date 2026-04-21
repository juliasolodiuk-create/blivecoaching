import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/shared/lib/i18n/request.ts");

const nextConfig: NextConfig = {
	async redirects() {
		return [
			{
				source: "/studio",
				destination: "https://blive-coaching.sanity.studio/",
				permanent: true,
			},
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
	},
	turbopack: {
		root: ".",
	},
};

export default withNextIntl(nextConfig);
