"use client";

import { ChevronRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useRef } from "react";
import BlurAnimation from "@/components/animations/BlurAnimation";
import TextEffect from "@/components/animations/TextEffect";
import { Button } from "@/components/common/Button/Button";
import { FAQItem } from "@/components/common/FAQItem/FAQItem";
import type { FAQData } from "../../../../lib/types/home.types";

interface FAQSectionProps {
	data: FAQData[];
}

export const FAQSection = ({ data }: FAQSectionProps) => {
	const faqRefs = useRef<HTMLDivElement[]>([]);
	const t = useTranslations("faq");
	const locale = useLocale();
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
					children={<ChevronRight size={20} />}
					secondary={true}
					// width="w-40"
				/>
			</div>
		</section>
	);
};
