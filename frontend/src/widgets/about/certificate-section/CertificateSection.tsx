import { useLocale } from "next-intl";
import { getCertificateContent } from "@/entities/aboutMe/helper/certificate-utils";
import type { AboutBannerData } from "@/entities/aboutMe/model/aboutMe.types";
import type { BannerContentData } from "@/shared/lib/types/base.types";
import { CertificateTitle } from "@/shared/ui/components/titles/CertificateTitle/CertificateTitle";

interface CertificateSectionProps {
	data?: AboutBannerData;
}

export const CertificateSection = ({ data }: CertificateSectionProps) => {
	const _locale = useLocale();

	const guideContent = getCertificateContent<BannerContentData>(
		data?.item,
		_locale,
	);

	return (
		<section id="certificate" className=" p-4 md:px-16 z-1 bg-white">
			<div className="flex bg-[#E7EBFA] gap-8 text-[#242424] flex-col justify-center items-center px-4 py-8 md:px-16 md:py-28 rounded-xl">
				<div className="max-w-3xl">
					<CertificateTitle
						title={guideContent?.title}
						description={guideContent?.subTitle}
						className="items-center text-center"
					/>
				</div>
			</div>
		</section>
	);
};
