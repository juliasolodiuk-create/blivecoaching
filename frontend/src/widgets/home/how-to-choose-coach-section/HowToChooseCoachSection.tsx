import { ChevronRight } from "lucide-react";
import { useLocale } from "next-intl";
import { getBannerContent } from "@/entities/home/helper/banner-utils";
import { getButtonContent } from "@/entities/home/helper/button-utils";
import ButtonShow from "@/shared/ui/animations/ButtonShow";
import { Button } from "@/shared/ui/components/buttons/Button/Button";
import { SectionTitle } from "@/shared/ui/components/titles/SectionTitle/SectionTitle";

import type { HomeBannerData } from "../../../entities/home/model/home.types";

interface HowToChooseCoachSectionProps {
	data?: HomeBannerData;
}

export const HowToChooseCoachSection = ({
	data,
}: HowToChooseCoachSectionProps) => {
	const locale = useLocale();
	const bannerContent = getBannerContent<HomeBannerData>(data, locale);
	const buttonContent = getButtonContent<HomeBannerData>(data, locale);
	return (
		<section id="how" className=" px-16 z-1 bg-white">
			<div className="flex bg-[#E7EBFA] gap-8 text-[#242424] flex-col justify-center items-center px-16 py-8 rounded-xl">
				<SectionTitle
					title={bannerContent?.title}
					description={bannerContent?.subTitle}
					className="items-center text-center"
				/>

				<ButtonShow>
					<Button
						title={buttonContent}
						secondary={true}
						width="w-90"
						link="/how-to-choose-coach"
					>
						<ChevronRight size={20} />
					</Button>
				</ButtonShow>
			</div>
		</section>
	);
};
