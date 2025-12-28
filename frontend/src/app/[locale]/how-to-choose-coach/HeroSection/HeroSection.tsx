"use client";

import TextEffect from "@/animations/TextEffect";
import TextEffectBlur from "@/animations/TextEffectBlur";
import { Button } from "@/ui/Button/Button";
import { ChevronDown } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

export const HeroSection = () => {
  const t = useTranslations("howToChooseCoach");
  const locale = useLocale();

  return (
    <section className="bg-[#E7EBFA] text-[#242424] h-full px-29 py-48 flex flex-col items-center">
      <div className=" max-w-250 flex flex-col items-center">
        <TextEffect>
          <h2 className="tracking-tight text-[64px] font-literata font-bold text-center leading-[90%]">
            {t("title")}
          </h2>
        </TextEffect>
        <Button
          title={t("link")}
          children={<ChevronDown size={20} />}
          link={`/${locale}/how-to-choose-coach#about_htcc`}
          secondary={true}
        />
      </div>
    </section>
  );
};
