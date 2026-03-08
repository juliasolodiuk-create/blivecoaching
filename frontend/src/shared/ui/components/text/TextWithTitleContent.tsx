"use client";

import { useLocale } from "next-intl";
import type { AboutICAData } from "@/entities/about-me/model/about-me.types";
import { getLocalizedContent } from "@/shared/lib/getLocalizedContent";
import type { Content } from "@/shared/lib/types/base.types";
import TextEffect from "../../animations/TextEffect";

interface TextWithTitleContentProps {
	data?: AboutICAData[];
}

export const TextWithTitleContent = ({ data }: TextWithTitleContentProps) => {
	const locale = useLocale();
	return (
		<div className=" flex flex-col gap-8">
			{data?.map((item, index) => {
				const uniqueKey = `text-${index}-${item.text_en?.title.slice(0, 10)}`;
				const content = getLocalizedContent<AboutICAData, Content>(
					item,
					"text",
					locale,
				);

				return (
					<div key={uniqueKey}>
						<TextEffect>
							<p className="text-center sm:text-left text-[16px] md:text-[18px] font-bold">
								{content?.title}
							</p>
						</TextEffect>
						<TextEffect>
							<p className="text-center sm:text-left text-[16px] md:text-[18px]">
								{content?.desc}
							</p>
						</TextEffect>
					</div>
				);
			})}
		</div>
	);
};
