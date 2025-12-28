import BlurAnimation from "@/animations/BlurAnimation";
import TextEffect from "@/animations/TextEffect";
import { AboutBannerData } from "../../../../../../lib/types/about.types";
import { useLocale } from "next-intl";
import { BannerContent } from "../../../../../../lib/types/base.types";

interface CertificateSection {
  data?: AboutBannerData;
}

export const CertificateSection = ({ data }: CertificateSection) => {
  const locale = useLocale();

  const bannerContent = data?.item?.[
    `banner_content_${locale}` as keyof typeof data.item
  ] as BannerContent | undefined;
  return (
    <section className="h-full px-29 py-28 bg-[#E7EBFA] text-[#242424] flex flex-col items-center">
      <div className="flex flex-col items-center max-w-200 ">
        <div className="h-15 flex items-center ">
          <BlurAnimation>
            <svg
              role="img"
              viewBox="0 0 270 265"
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 sm:w-20 sm:h-20 fill-[#D3C3E0]"
            >
              <path d={data?.item?.icon?.svgPath} />
            </svg>
          </BlurAnimation>
        </div>
        <TextEffect>
          <h3 className="font-montserrat font-semibold text-[40px] leading-[120%] text-center">
            {bannerContent?.title}
          </h3>
        </TextEffect>
      </div>
    </section>
  );
};
