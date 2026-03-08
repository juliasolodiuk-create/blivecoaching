"use client";

import { useTranslations } from "next-intl";
import { useRef } from "react";
import type { AboutICAData } from "@/entities/about-me/model/about-me.types";
import useParallax from "@/shared/hooks/useParallax";
import { TextWithTitleContent } from "@/shared/ui/components/text/TextWithTitleContent";
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
