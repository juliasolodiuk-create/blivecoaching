"use client";

import { useLocale } from "next-intl";
import { getAboutICAContent } from "@/entities/aboutMe/helper/about-ica-utils";
import type { AboutICAData } from "@/entities/aboutMe/model/aboutMe.types";
import type { Content } from "@/shared/lib/types/base.types";
import TextEffect from "../../animations/TextEffect";

interface TextWithTitleContentProps {
	data?: AboutICAData[];
}

export const TextWithTitleContent = ({ data }: TextWithTitleContentProps) => {
	const _locale = useLocale();
	return (
		<div className=" flex flex-col gap-8">
			{data?.map((item, index) => {
				// Создаем ключ, который выглядит как строка,
				// но гарантированно уникален за счет индекса
				const uniqueKey = `text-${index}-${item.text_en?.title.slice(0, 10)}`;
				const guideContent = getAboutICAContent<AboutICAData>(item, _locale);

				return (
					<div key={uniqueKey}>
						<TextEffect>
							<p className="text-center sm:text-left text-[16px] md:text-[18px] font-bold">
								{guideContent?.title}
							</p>
						</TextEffect>
						<TextEffect>
							<p className="text-center sm:text-left text-[16px] md:text-[18px]">
								{guideContent?.desc}
							</p>
						</TextEffect>
					</div>
				);
			})}
		</div>
	);
};
