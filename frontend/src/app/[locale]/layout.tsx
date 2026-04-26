import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { NuqsAdapter } from "nuqs/adapters/next";
import { constructMetadata } from "@/entities/seo/lib/seo.prepare-metadata";

export async function generateMetadata({ params }: RootLayoutProps) {
	const { locale } = await params;
	return await constructMetadata(locale);
}

interface RootLayoutProps {
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}

export default async function RootLayout({
	children,
	params,
}: RootLayoutProps): Promise<React.ReactNode> {
	const { locale } = await params;
	if (locale === "favicon.ico") return null;

	const messages = await getMessages();

	const htmlLang = locale === "ua" ? "uk" : locale;

	return (
		<html lang={htmlLang}>
			<body className={`antialiased`}>
				<NextIntlClientProvider locale={locale} messages={messages}>
					<NuqsAdapter>{children}</NuqsAdapter>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
