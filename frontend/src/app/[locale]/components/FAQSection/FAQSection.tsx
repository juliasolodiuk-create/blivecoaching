"use client";

import BlurAnimation from "@/animations/BlurAnimation";
import TextEffect from "@/animations/TextEffect";
import { Button } from "@/ui/Button/Button";
import { FAQItem } from "@/ui/FAQItem/FAQItem";
import { ChevronRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useRef } from "react";
import { FAQData } from "../../../../../lib/types/home.types";

interface FAQSectionProps {
  data: FAQData[];
}

export const FAQSection = ({ data }: FAQSectionProps) => {
  const faqRefs = useRef<HTMLDivElement[]>([]);
  const t = useTranslations("faq");
  const locale = useLocale();
  return (
    <section className="text-[#242424] min-h-screen gap-8 py-28 px-16 bg-[#E7EBFA] flex flex-col items-center">
      <div>
        <TextEffect>
          <h2 className=" tracking-tight text-[48px] font-literata font-bold text-center ">
            {t("title")}
          </h2>
        </TextEffect>
        <TextEffect>
          <p className="font-montserrat text-center max-w-200">
            {t("subTitle")}
          </p>
        </TextEffect>
      </div>

      <div className="w-full sm:w-[80%] gap-4 flex flex-col">
        {data.map((item, index) => (
          <div key={index}>
            <BlurAnimation>
              <div>
                <FAQItem data={item} />
              </div>
            </BlurAnimation>
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-center items-center">
        <TextEffect>
          <h3 className="font-montserrat font-bold text-[32px]">
            {t("bottomTitle")}
          </h3>
        </TextEffect>
        <TextEffect>
          <p className="font-montserrat text-center max-w-200">
            {t("bottomSubTitle")}
          </p>
        </TextEffect>
        <Button
          title={t("link")}
          children={<ChevronRight size={20} />}
          secondary={true}
          // width="w-40"
        />
      </div>
    </section>
  );
};
