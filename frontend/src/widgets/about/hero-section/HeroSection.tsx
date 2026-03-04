import { useLocale, useTranslations } from "next-intl";
import TextEffect from "@/shared/ui/animations/TextEffect";

export const HeroSection = () => {
	const t = useTranslations("aboutMe");
	const _locale = useLocale();
	return (
		<section className="w-screen h-screen bg-[#E7EBFA] p-16">
			<TextEffect>
				<h1 className="text-[64px] text-[#242424] font-bold font-header tracking-tight">
					{t("title")}
				</h1>
			</TextEffect>
		</section>
	);
};
