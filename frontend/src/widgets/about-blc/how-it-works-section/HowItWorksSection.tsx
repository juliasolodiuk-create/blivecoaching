"use client";

import { useLocale, useTranslations } from "next-intl";
import { useRef } from "react";
import type { HowItWorksData } from "@/entities/about-blc/model/about-blc.types";
import useParallax from "@/shared/hooks/useParallax";
import { getLocalizedContent } from "@/shared/lib/getLocalizedContent";
import { TextContent } from "@/shared/ui/components/text/TextContent";
import { SubTitle } from "@/shared/ui/components/titles/SubTitle/SubTitle";

interface HowItWorksSectionProps {
	data: HowItWorksData;
}

export const HowItWorksSection = ({ data }: HowItWorksSectionProps) => {
	const t = useTranslations("howItWorks");

	const locale = useLocale();
	const imgRef = useRef<HTMLDivElement>(null);
	useParallax(imgRef, 15, "30%");

	const content = getLocalizedContent<HowItWorksData, string[]>(
		data,
		"content",
		locale,
	);
	return (
		<section
			id="howItWorks"
			className="relative h-full bg-[#E7EBFA] w-screen  py-16  px-4 md:p-16 text-[#242424] overflow-clip"
		>
			<div className=" flex flex-col lg:flex-row gap-10 lg:gap-20 text-[#242424] justify-center">
				<div className=" w-full lg:w-1/3">
					<SubTitle
						title={t("title")}
						className="items-center text-center sm:text-left sm:items-start"
					/>
				</div>
				<div className="w-full lg:w-2/3">
					<TextContent data={content} />
				</div>
			</div>
		</section>
	);
};
