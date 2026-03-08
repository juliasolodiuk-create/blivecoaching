import { ChevronRight } from "lucide-react";
import { useLocale } from "next-intl";
import type { AboutBannerCTAData } from "@/entities/about-me/model/about-me.types";
import { getLocalizedContent } from "@/shared/lib/getLocalizedContent";
import type {
	BannerContent,
	BannerContentData,
	SharedLink,
} from "@/shared/lib/types/base.types";
import ButtonShow from "@/shared/ui/animations/ButtonShow";
import { Button } from "@/shared/ui/components/buttons/Button/Button";
import { SubTitle } from "@/shared/ui/components/titles/SubTitle/SubTitle";

interface BannerCTASectionProps {
	data?: AboutBannerCTAData;
}

export const BannerCTASection = ({ data }: BannerCTASectionProps) => {
	const locale = useLocale();

	const bannerContent = getLocalizedContent<BannerContentData, BannerContent>(
		data?.item,
		"banner_content",
		locale,
	);
	const buttonContent = getLocalizedContent<SharedLink, string>(
		data?.sharedLink,
		"title",
		locale,
	);
	return (
		<section className=" p-4 md:px-16 z-1 bg-white">
			<div className="flex bg-[#E7EBFA] gap-8 text-[#242424] flex-col justify-center items-center p-4 md:px-16 md:py-8 rounded-xl">
				<div className="flex flex-col items-center max-w-161">
					<SubTitle
						title={bannerContent?.title}
						description={bannerContent?.subTitle}
						className="items-center text-center"
					/>

					<ButtonShow>
						<Button
							title={buttonContent}
							secondary={true}
							width="max-w-90"
							link="/about-blc"
						>
							<ChevronRight size={20} />
						</Button>
					</ButtonShow>
				</div>
			</div>
		</section>
	);
};
