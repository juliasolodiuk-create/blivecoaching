"use client";

import { ChevronRight } from "lucide-react";
import dataJson from "../../../../../db/data.json";
import { Button } from "@/ui/Button/Button";
import TextEffect from "@/animations/TextEffect";

import { useLocale, useTranslations } from "next-intl";
import {
  ProblemData,
  ProblemWithUrls,
} from "../../../../../lib/types/home.types";
import { SharedLink } from "../../../../../lib/types/base.types";
import { ProblemItems } from "@/ui/ProblemsItem/ProblemItem";

type DataStructure = typeof dataJson;

interface ProblemsSectionProps {
  // Теперь data — это объект, а не массив
  data?: ProblemWithUrls;
}

export const ProblemsSection = ({ data }: ProblemsSectionProps) => {
  // console.log("DATA", data);
  const t = useTranslations("problems");
  const locale = useLocale();

  const buttonTitle =
    data?.sharedLink?.[`title_${locale}` as keyof SharedLink] ||
    "Discover more";
  return (
    <section className="z-1 h-full w-full  px-16 py-16  bg-[#E7EBFA] text-[#242424] flex flex-col items-center">
      <div>
        <TextEffect>
          <h2 className="tracking-tight text-[54px] font-header font-bold text-center leading-[110%]">
            {t("title")}
          </h2>
        </TextEffect>
        <TextEffect>
          <p className="font-body text-center font-normal ">{t("subTitle")}</p>
        </TextEffect>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3  gap-8 w-full mb-12 mt-16">
        {data?.items?.map((item, index) => (
          <ProblemItems data={item} key={index} />
        ))}
      </div>

      <Button
        title={buttonTitle}
        children={<ChevronRight size={20} />}
        secondary={true}
        link="/about-be-live-coach"
      />
    </section>
  );
};
