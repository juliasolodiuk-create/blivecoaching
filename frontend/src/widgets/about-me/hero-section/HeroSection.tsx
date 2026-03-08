"use client";

import { useLocale, useTranslations } from "next-intl";
import { useRef } from "react";
import type {
	AboutMeData,
	AboutMeWithUrls,
} from "@/entities/about-me/model/about-me.types";
import useParallax from "@/shared/hooks/useParallax";
import { getLocalizedContent } from "@/shared/lib/getLocalizedContent";
import { ImageContainer } from "@/shared/ui/components/images/ImageContainer/ImageContainer";
import { TextContent } from "@/shared/ui/components/text/TextContent";
import { SectionTitle } from "@/shared/ui/components/titles/SectionTitle/SectionTitle";

interface HeroSectionProps {
	data?: AboutMeWithUrls;
}

export const HeroSection = ({ data }: HeroSectionProps) => {
	const t = useTranslations("aboutMe");

	const locale = useLocale();
	const imgRef = useRef<HTMLDivElement>(null);
	useParallax(imgRef, 15, "30%");

	const content = getLocalizedContent<AboutMeData, string[]>(
		data,
		"desc",
		locale,
	);
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
					<TextContent data={content} />
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
