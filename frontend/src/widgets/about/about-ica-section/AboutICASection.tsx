"use client";

import { useLocale, useTranslations } from "next-intl";
import { useRef } from "react";
import { getHowItWorksContent } from "@/entities/aboutBLC/helper/howItWorks-utils";
import type { HowItWorksData } from "@/entities/aboutBLC/model/aboutBLC.types";
import { getAboutICAContent } from "@/entities/aboutMe/helper/about-ica-utils";
import type { AboutICAData } from "@/entities/aboutMe/model/aboutMe.types";
import useParallax from "@/shared/hooks/useParallax";
import { TextContent } from "@/shared/ui/components/text/TextContent";
import { TextWithTitleContent } from "@/shared/ui/components/text/TextWithTitleContent";
import { SectionTitle } from "@/shared/ui/components/titles/SectionTitle/SectionTitle";
import { SubTitle } from "@/shared/ui/components/titles/SubTitle/SubTitle";

interface AboutICASectionProps {
	data?: AboutICAData[];
}

export const AboutICASection = ({ data }: AboutICASectionProps) => {
	const t = useTranslations("aboutICA");

	const imgRef = useRef<HTMLDivElement>(null);
	useParallax(imgRef, 15, "30%");

	return (
		<section
			id="aboutICA"
			className="relative h-full bg-white w-screen  py-16  px-4 md:p-16 text-[#242424] overflow-clip"
		>
			<div className=" flex flex-col lg:flex-row gap-10 lg:gap-20 text-[#242424] justify-center">
				<div className=" w-full lg:w-1/3">
					<SubTitle
						title={t("title")}
						className="items-center text-center sm:text-left sm:items-start"
					/>
				</div>
				<div className="w-full lg:w-2/3">
					<TextWithTitleContent data={data} />
				</div>
			</div>
		</section>
	);
};
