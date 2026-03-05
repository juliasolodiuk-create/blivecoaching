"use client";

import { useLocale, useTranslations } from "next-intl";
import { useRef } from "react";
import { getHeroContent } from "@/entities/aboutMe/helper/hero-utils";
import type {
	AboutMeData,
	AboutMeWithUrls,
} from "@/entities/aboutMe/model/aboutMe.types";
import useParallax from "@/shared/hooks/useParallax";
import TextEffect from "@/shared/ui/animations/TextEffect";
import { ImageContainer } from "@/shared/ui/components/images/ImageContainer/ImageContainer";
import { TextContent } from "@/shared/ui/components/text/TextContent";
import { SectionTitle } from "@/shared/ui/components/titles/SectionTitle/SectionTitle";
import { SubTitle } from "@/shared/ui/components/titles/SubTitle/SubTitle";

interface HeroSectionProps {
	data?: AboutMeWithUrls;
}

export const HeroSection = ({ data }: HeroSectionProps) => {
	const t = useTranslations("aboutMe");

	const _locale = useLocale();
	const imgRef = useRef<HTMLDivElement>(null);
	useParallax(imgRef, 15, "30%");

	const guideContent = getHeroContent<AboutMeData>(data, _locale);
	return (
		<section
			id="about"
			className="relative h-full bg-[#E7EBFA] w-screen  p-4 md:px-16 pt-24 lg:py-24 text-[#242424] overflow-clip"
		>
			<div className="flex flex-col lg:flex-row gap-10 text-[#242424] justify-between ">
				<div className="w-full  flex flex-col gap-10">
					<SectionTitle
						title={t("title")}
						className="items-center text-center sm:text-left sm:items-start"
					/>
					<TextContent data={guideContent} />
				</div>
				<div className="w-full flex justify-end">
					<div className="w-full lg:max-w-140  lg:sticky lg:top-16 hidden lg:block ">
						{data?.imageUrl && (
							<ImageContainer
								objectPosition="object-right"
								rounded="rounded-xl"
								ref={imgRef}
								alt="Benefits Picture"
								image={data.imageUrl}
							/>
						)}
					</div>
				</div>
			</div>
		</section>
	);
};
