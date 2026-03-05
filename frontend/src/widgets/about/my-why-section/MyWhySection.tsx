"use client";

import { useLocale, useTranslations } from "next-intl";
import { useRef } from "react";
import { getHeroContent } from "@/entities/aboutMe/helper/hero-utils";
import type {
	AboutMeData,
	AboutMeWithUrls,
	MyWhyData,
	MyWhyWithUrls,
} from "@/entities/aboutMe/model/aboutMe.types";
import useParallax from "@/shared/hooks/useParallax";
import TextEffect from "@/shared/ui/animations/TextEffect";
import { ImageContainer } from "@/shared/ui/components/images/ImageContainer/ImageContainer";
import { TextContent } from "@/shared/ui/components/text/TextContent";
import { SectionTitle } from "@/shared/ui/components/titles/SectionTitle/SectionTitle";
import { SubTitle } from "@/shared/ui/components/titles/SubTitle/SubTitle";

interface MyWhySectionProps {
	data?: MyWhyWithUrls;
}

export const MyWhySection = ({ data }: MyWhySectionProps) => {
	const t = useTranslations("myWhy");

	const _locale = useLocale();
	const bigImgRef = useRef<HTMLDivElement>(null);
	const smallImgRef = useRef<HTMLDivElement>(null);
	useParallax(bigImgRef, 15, "30%");
	useParallax(smallImgRef, 15, "30%");

	const guideContent = getHeroContent<MyWhyData>(data, _locale);
	return (
		<section
			id="myWhy"
			className="relative h-full bg-white w-screen  p-4 md:px-16 lg:py-24 text-[#242424] overflow-clip"
		>
			<div className="flex flex-col-reverse lg:flex-row gap-10 text-[#242424] justify-between ">
				<div className="w-full flex justify-end">
					<div className="w-full lg:max-w-140  lg:sticky lg:top-16 hidden lg:block ">
						{data?.bigImageUrl && (
							<ImageContainer
								objectPosition="object-right"
								rounded="rounded-xl"
								ref={bigImgRef}
								alt="Benefits Picture"
								image={data.bigImageUrl}
							/>
						)}
					</div>
				</div>
				<div className="w-full  flex flex-col gap-10 ">
					<SectionTitle
						subTitle={t("subTitle")}
						title={t("title")}
						className="items-center text-center sm:text-left sm:items-start"
					/>
					<TextContent data={guideContent} />
				</div>
				<div className=" flex justify-end ">
					<div className="w-screen h-150 lg:w-64 lg:h-64 lg:sticky lg:top-16">
						{data?.smallImageUrl && (
							<ImageContainer
								objectPosition="object-center"
								rounded="rounded-xl"
								ref={smallImgRef}
								alt="Benefits Picture"
								image={data.smallImageUrl}
								className="h-full w-full"
							/>
						)}
					</div>
				</div>
			</div>
		</section>
	);
};
