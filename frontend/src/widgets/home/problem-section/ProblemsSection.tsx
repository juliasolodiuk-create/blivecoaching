"use client";

import { ChevronRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { getButtonContent } from "@/entities/home/helper/button-utils";
import ButtonShow from "@/shared/ui/animations/ButtonShow";
import { Button } from "@/shared/ui/components/buttons/Button/Button";
import { SectionTitle } from "@/shared/ui/components/titles/SectionTitle/SectionTitle";
import type { ProblemWithUrls } from "../../../entities/home/model/home.types";
import { ProblemCard } from "./ui";

interface ProblemsSectionProps {
	data?: ProblemWithUrls;
}

export const ProblemsSection = ({ data }: ProblemsSectionProps) => {
	const t = useTranslations("problems");
	const locale = useLocale();

	const buttonContent = getButtonContent<ProblemWithUrls>(data, locale);

	return (
		<section
			id="problems"
			className="z-1 h-full w-full  p-4 sm:px-16 sm:py-16  bg-[#E7EBFA] text-[#242424] flex flex-col items-center"
		>
			<SectionTitle
				title={t("title")}
				description={t("subTitle")}
				className="items-center text-center"
			/>

			<div className="grid grid-cols-1 lg:grid-cols-3  gap-8 w-full mb-12 mt-16">
				{data?.items?.map((item, index) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: <>
					<ProblemCard data={item} key={index} />
				))}
			</div>

			<ButtonShow>
				<Button
					title={buttonContent}
					secondary={true}
					link="/about-be-live-coach"
				>
					<ChevronRight size={20} />
				</Button>
			</ButtonShow>
		</section>
	);
};
