import { useLocale } from "next-intl";
import { getGuideContent } from "@/entities/howChooseCoach/helper/guide-utils";
import type { HowChooseCoachData } from "@/entities/howChooseCoach/model/howChooseCoach.types";
import TextEffect from "@/shared/ui/animations/TextEffect";
import { TextContent } from "@/shared/ui/components/text/TextContent";
import { SectionTitle } from "@/shared/ui/components/titles/SectionTitle/SectionTitle";
import { SubTitle } from "@/shared/ui/components/titles/SubTitle/SubTitle";

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
					<SubTitle
						title={guideContent?.title}
						description={guideContent?.subTitle}
						className="items-center text-center sm:text-left sm:items-start"
					/>
				</div>
				<div className="w-full lg:w-1/2">
					<TextContent data={guideContent?.desc} />
				</div>
			</div>
		</section>
	);
};
