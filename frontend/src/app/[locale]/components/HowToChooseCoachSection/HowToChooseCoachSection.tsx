import BlurAnimation from "@/animations/BlurAnimation";
import TextEffect from "@/animations/TextEffect";
import { Button } from "@/ui/Button/Button";
import { ChevronRight, ScrollText } from "lucide-react";

import { useLocale } from "next-intl";
import { HomeBannerData } from "../../../../../lib/types/home.types";
import { BannerContent, SharedLink } from "../../../../../lib/types/base.types";

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
    <section className="flex bg-[#E7EBFA] gap-8 text-[#242424] flex-col justify-center items-center px-16 py-28">
      <div className="h-15 flex items-center">
        <BlurAnimation>
          <svg
            role="img"
            viewBox="0 0 703.52 701.25"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 sm:w-15 fill-[#D3C3E0]"
          >
            <path d={data?.item?.icon?.svgPath} />
          </svg>
        </BlurAnimation>
      </div>
      <TextEffect>
        <h2 className="tracking-tight text-[48px] font-literata font-bold text-center ">
          {bannerContent?.title}
        </h2>
      </TextEffect>
      <TextEffect>
        <p className="font-montserrat text-center max-w-200">
          {bannerContent?.subTitle}
        </p>
      </TextEffect>
      <Button
        title={buttonTitle}
        children={<ChevronRight size={20} />}
        secondary={true}
        width="w-90"
        link="/how-to-choose-coach"
      />
    </section>
  );
};
