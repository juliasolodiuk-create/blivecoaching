"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/shared/lib/i18n/navigation";

interface LocaleSwitcherProps {
	color?: string;
}

export default function LocaleSwitcher({ color }: LocaleSwitcherProps) {
	const locale = useLocale();
	const router = useRouter();
	const pathname = usePathname();

	const switchLocale = (newLocale: string) => {
		if (newLocale !== locale) {
			router.replace(pathname, { locale: newLocale });
			router.refresh();
		}
	};

	return (
		<>
			<label htmlFor="locale-switcher" className="sr-only">
				Select language
			</label>

			<select
				id="locale-switcher"
				style={{ color: `${color}` }}
				className="open-cursor cursor-pointer"
				value={locale}
				onChange={(e) => switchLocale(e.target.value)}
			>
				<option value="en">EN</option>
				<option value="ua">UA</option>
				<option value="de">DE</option>
			</select>
		</>
	);
}
