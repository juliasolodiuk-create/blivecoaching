import { useLocale } from "next-intl";
import type {
	HowChooseCoachContentData,
	HowChooseCoachData,
} from "@/entities/how-to-choose-coach/model/how-to-choose-coach.types";
import { getLocalizedContent } from "@/shared/lib/getLocalizedContent";
import { TextContent } from "@/shared/ui/components/text/TextContent";
import { SubTitle } from "@/shared/ui/components/titles/SubTitle/SubTitle";

interface GuideSectionProps {
	data: HowChooseCoachData;
}

export const GuideSection = ({ data }: GuideSectionProps) => {
	const locale = useLocale();

	const content = getLocalizedContent<
		HowChooseCoachData,
		HowChooseCoachContentData
	>(data, "guide", locale);
	return (
		<section
			id="guide"
			className="relative h-full bg-white w-screen  p-4 md:p-16 text-[#242424] overflow-clip"
		>
			<div className="flex flex-col lg:flex-row gap-10 sm:gap-20 text-[#242424] justify-center">
				<div className="w-full lg:w-1/2">
					<SubTitle
						title={content?.title}
						description={content?.subTitle}
						className="items-center text-center sm:text-left sm:items-start"
					/>
				</div>
				<div className="w-full lg:w-1/2">
					<TextContent data={content?.desc} />
				</div>
			</div>
		</section>
	);
};
