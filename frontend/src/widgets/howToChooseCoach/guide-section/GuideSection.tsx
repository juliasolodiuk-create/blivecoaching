import { useLocale } from "next-intl";
import { getGuideContent } from "@/entities/howChooseCoach/helper/guide-utils";
import type { HowChooseCoachData } from "@/entities/howChooseCoach/model/howChooseCoach.types";
import TextEffect from "@/shared/ui/animations/TextEffect";
import { SectionTitle } from "@/shared/ui/components/titles/SectionTitle/SectionTitle";

interface GuideSectionProps {
	data: HowChooseCoachData;
}

export const GuideSection = ({ data }: GuideSectionProps) => {
	const _locale = useLocale();

	const guideContent = getGuideContent<HowChooseCoachData>(data, _locale);
	return (
		<section
			id="guide"
			className="relative h-full bg-white w-screen  p-4 md:p-16 text-[#242424] overflow-clip"
		>
			<div className="flex flex-col lg:flex-row gap-10 sm:gap-20 text-[#242424] justify-center">
				<div className="w-full lg:w-1/2">
					<SectionTitle
						title={guideContent?.title}
						description={guideContent?.subTitle}
						className="items-center text-center sm:text-left sm:items-start"
					/>
				</div>
				<div className="w-full lg:w-1/2 flex flex-col gap-10">
					{guideContent?.desc?.map((item) => (
						<div key={item}>
							<TextEffect>
								<p className="text-center sm:text-left text-[16px] md:text-[18px]">
									{item}
								</p>
							</TextEffect>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
