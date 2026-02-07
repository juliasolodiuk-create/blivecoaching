import { ChevronRight, ScrollText } from "lucide-react";
import { useLocale } from "next-intl";
import BlurAnimation from "@/components/animations/BlurAnimation";
import TextEffect from "@/components/animations/TextEffect";
import { Button } from "@/components/common/Button/Button";
import type {
	BannerContent,
	SharedLink,
} from "../../../../lib/types/base.types";
import type { HomeBannerData } from "../../../../lib/types/home.types";

interface HowToChooseCoachSectionProps {
	data?: HomeBannerData;
}

export const HowToChooseCoachSection = ({
	data,
}: HowToChooseCoachSectionProps) => {
	// console.log("DATA", data);
	const locale = useLocale();
	const bannerContent = data?.item?.[
		`banner_content_${locale}` as keyof typeof data.item
	] as BannerContent | undefined;

	const buttonTitle =
		data?.sharedLink?.[`title_${locale}` as keyof SharedLink] ||
		"Discover more";
	return (
		<section className=" px-16 z-1 bg-white">
			<div className="flex bg-[#E7EBFA] gap-8 text-[#242424] flex-col justify-center items-center px-16 py-8 rounded-xl">
				<div className="flex gap-2 flex-col justify-center items-center">
					{/* <TextEffect> */}
					<h2 className="tracking-tight text-[54px] font-header font-bold text-center leading-[110%]">
						{bannerContent?.title}
					</h2>
					{/* </TextEffect> */}
					<TextEffect>
						<p className="font-body text-center max-w-200">
							{bannerContent?.subTitle}
						</p>
					</TextEffect>
				</div>

				<Button
					title={buttonTitle}
					children={<ChevronRight size={20} />}
					secondary={true}
					width="w-90"
					link="/how-to-choose-coach"
				/>
			</div>
		</section>
	);
};
