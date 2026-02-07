import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
	// Игнорируем:
	// 1. Все пути, содержащие точку (файлы: .ico, .png, .jpg, .svg, .css, .js)
	// 2. Служебные папки api, _next, _vercel
	matcher: [
		/*
		 * Match all request paths except for the ones starting with:
		 * - api (API routes)
		 * - _next/static (static files)
		 * - _next/image (image optimization files)
		 * - favicon.ico (favicon file)
		 */
		"/((?!api|_next|favicon.ico|robots.txt|sitemap.xml|.*\\..*).*)",
	],
};
