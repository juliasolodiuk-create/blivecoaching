"use client";

import { ChevronRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useRef } from "react";
import BlurAnimation from "@/shared/ui/animations/BlurAnimation";
import TextEffect from "@/shared/ui/animations/TextEffect";
import { Button } from "@/shared/ui/components/buttons/Button/Button";
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
		<section className="text-[#242424] min-h-screen gap-8 p-16 bg-[#E7EBFA] flex flex-col items-center">
			<div className="flex flex-col gap-2">
				<TextEffect>
					<h2 className=" tracking-tight text-[54px] font-header font-bold text-center leading-[110%]">
						{t("title")}
					</h2>
				</TextEffect>
				<TextEffect>
					<p className="font-montserrat text-center max-w-200">
						{t("subTitle")}
					</p>
				</TextEffect>
			</div>

			<div className="w-full sm:w-[80%] gap-6 flex flex-col">
				{data.map((item, index) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: <пояснення, чому тут index>
					<div key={index}>
						<BlurAnimation>
							<div>
								<FAQItem data={item} />
							</div>
						</BlurAnimation>
					</div>
				))}
			</div>
			<div className="flex flex-col justify-center items-center">
				<TextEffect>
					<h3 className="font-body text-[36px] font-bold leading-[110%]">
						{t("bottomTitle")}
					</h3>
				</TextEffect>
				<TextEffect>
					<p className="font-montserrat text-center max-w-200">
						{t("bottomSubTitle")}
					</p>
				</TextEffect>
				<Button
					title={t("link")}
					secondary={true}
					// width="w-40"
				>
					<ChevronRight size={20} />
				</Button>
			</div>
		</section>
	);
};
