import BlurAnimation from "@/animations/BlurAnimation";
import TextEffect from "@/animations/TextEffect";
import { Button } from "@/ui/Button/Button";
import { ChevronRight } from "lucide-react";
import { useLocale } from "next-intl";
import {
  BannerContent,
  SharedLink,
} from "../../../../../../lib/types/base.types";
import { AboutBannerCTAData } from "../../../../../../lib/types/aboutMe.types";

interface CTAProps {
  data?: AboutBannerCTAData;
}

export const CTASection = ({ data }: CTAProps) => {
  const locale = useLocale();
  const bannerContent = data?.item?.[
    `banner_content_${locale}` as keyof typeof data.item
  ] as BannerContent | undefined;

  const buttonTitle =
    data?.sharedLink?.[`title_${locale}` as keyof SharedLink] ||
    "Discover more";
  return (
    <section className="h-full px-29 py-28 bg-[#E7EBFA] text-[#242424] flex flex-col items-center">
      <div className="flex flex-col items-center gap-8">
        <TextEffect>
          <h3 className="max-w-3xl font-literata text-[48px] font-bold tracking-tight leading-[90%] text-center">
            {bannerContent?.title}
          </h3>
        </TextEffect>
        <Button
          title={buttonTitle}
          children={<ChevronRight size={20} />}
          secondary={true}
        />
      </div>
    </section>
  );
};
