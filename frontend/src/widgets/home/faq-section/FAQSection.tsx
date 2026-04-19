"use client";

import { useTranslations } from "next-intl";
import DivEffect from "@/shared/ui/animations/DivEffects";
import { SecondaryTitle } from "@/shared/ui/components/titles/SecondaryTItle/SecondaryTitle";
import { SectionTitle } from "@/shared/ui/components/titles/SectionTitle/SectionTitle";
import type { FAQData } from "../../../entities/home/model/home.types";
import { FAQCard, FAQFooter, QuestionModal } from "./ui";

interface FAQSectionProps {
	data: FAQData[];
}

export const FAQSection = ({ data }: FAQSectionProps) => {
	const t = useTranslations("faq");

	return (
		<section
			id="faq"
			className="text-[#242424] min-h-screen gap-8 p-4 md:p-16 bg-[#E7EBFA] flex flex-col items-center"
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
								<FAQCard data={item} />
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

				<FAQFooter linkTitle={t("link")} />
			</div>
			<QuestionModal />
		</section>
	);
};
