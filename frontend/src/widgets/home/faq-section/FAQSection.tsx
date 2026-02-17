"use client";

import { ChevronRight, Section } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useRef } from "react";
import BlurAnimation from "@/shared/ui/animations/BlurAnimation";
import ButtonShow from "@/shared/ui/animations/ButtonShow";
import DivEffect from "@/shared/ui/animations/DivEffects";
import TextEffect from "@/shared/ui/animations/TextEffect";
import { Button } from "@/shared/ui/components/buttons/Button/Button";
import { SecondaryTitle } from "@/shared/ui/components/titles/SecondaryTItle/SecondaryTitle";
import { SectionTitle } from "@/shared/ui/components/titles/SectionTitle/SectionTitle";
import type { FAQData } from "../../../entities/home/model/home.types";
import { FAQItem } from "./ui/FAQItem";

interface FAQSectionProps {
	data: FAQData[];
}

export const FAQSection = ({ data }: FAQSectionProps) => {
	const _faqRefs = useRef<HTMLDivElement[]>([]);
	const t = useTranslations("faq");
	const _locale = useLocale();
	return (
		<section
			id="faq"
			className="text-[#242424] min-h-screen gap-8 p-16 bg-[#E7EBFA] flex flex-col items-center"
		>
			<SectionTitle
				title={t("title")}
				description={t("subTitle")}
				className="items-center text-center"
			/>

			<div className="w-full sm:w-[80%] gap-6 flex flex-col">
				{data.map((item, index) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: <пояснення, чому тут index>
					<div key={index}>
						<DivEffect>
							<div>
								<FAQItem data={item} />
							</div>
						</DivEffect>
					</div>
				))}
			</div>
			<div className="flex flex-col justify-center items-center">
				<SecondaryTitle
					title={t("bottomTitle")}
					description={t("bottomSubTitle")}
					className="items-center text-center"
				/>

				<ButtonShow>
					<Button
						title={t("link")}
						secondary={true}
						// width="w-40"
					>
						<ChevronRight size={20} />
					</Button>
				</ButtonShow>
			</div>
		</section>
	);
};
