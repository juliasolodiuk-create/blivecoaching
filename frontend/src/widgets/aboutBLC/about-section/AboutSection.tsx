"use client";

import { useLocale } from "next-intl";
import { useRef } from "react";
import { getAboutContent } from "@/entities/aboutBLC/helper/about-utils";
import type {
	AboutContentData,
	AboutWithUrls,
} from "@/entities/aboutBLC/model/aboutBLC.types";
import useParallax from "@/shared/hooks/useParallax";
import { ImageContainer } from "@/shared/ui/components/images/ImageContainer/ImageContainer";
import { TextContent } from "@/shared/ui/components/text/TextContent";
import { SubTitle } from "@/shared/ui/components/titles/SubTitle/SubTitle";

interface AboutSectionProps {
	data: AboutWithUrls;
}

export const AboutSection = ({ data }: AboutSectionProps) => {
	const _locale = useLocale();
	const imgRef = useRef<HTMLDivElement>(null);
	useParallax(imgRef, 15, "30%");

	const guideContent = getAboutContent<AboutContentData>(data?.items, _locale);
	return (
		<section
			id="about"
			className="relative h-full bg-white w-screen  p-4 md:p-16 text-[#242424] overflow-clip"
		>
			<div className="flex flex-col lg:flex-row gap-10 sm:gap-20 text-[#242424] justify-center">
				<div className="w-1/2">
					<div className="w-full lg:max-w-161  lg:sticky lg:top-16 hidden lg:block">
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
				<div className="w-full lg:w-1/2 flex flex-col gap-10">
					<SubTitle
						title={guideContent?.title}
						className="items-center text-center sm:text-left sm:items-start"
					/>
					<TextContent data={guideContent?.desc} />
				</div>
			</div>
		</section>
	);
};
