"use client";

import TextEffect from "@/animations/TextEffect";
import { HowItWorksData } from "../../../../../../lib/types/aboutBLC.types";
import { useLocale, useTranslations } from "next-intl";

interface HowItWorksProps {
  data?: HowItWorksData;
}

export const HowItWorksSection = ({ data }: HowItWorksProps) => {
  const t = useTranslations("howItWorks");
  const locale = useLocale();

  const howItWorksContent = data?.[
    `content_${locale}` as keyof HowItWorksData
  ] as string[] | undefined;
  return (
    <section className="px-29 py-28 bg-[#E7EBFA] text-[#242424] h-full flex justify-between">
      <TextEffect>
        <h3 className="tracking-tight text-[40px] font-literata font-bold  leading-[90%]">
          {t("title")}
        </h3>
      </TextEffect>
      <div className="flex flex-col gap-4 max-w-183">
        {howItWorksContent?.map((index, i) => (
          <div key={i}>
            <TextEffect>
              <p className="font-montserrat">{index}</p>
            </TextEffect>
          </div>
        ))}
      </div>
    </section>
  );
};
