"use client";

import { ChevronRight } from "lucide-react";
import dataJson from "../../../../../db/data.json";
import { Button } from "@/ui/Button/Button";
import TextEffect from "@/animations/TextEffect";
import { ProblemsItems } from "@/ui/ProblemsItem/ProblemsItem";

import { useLocale, useTranslations } from "next-intl";
import { ProblemData } from "../../../../../lib/types/home.types";
import { SharedLink } from "../../../../../lib/types/base.types";

type DataStructure = typeof dataJson;

interface ProblemsSectionProps {
  // Теперь data — это объект, а не массив
  data?: ProblemData;
}

export const ProblemsSection = ({ data }: ProblemsSectionProps) => {
  // console.log("DATA", data);
  const t = useTranslations("problems");
  const locale = useLocale();

  const buttonTitle =
    data?.sharedLink?.[`title_${locale}` as keyof SharedLink] ||
    "Discover more";
  return (
    <section className="h-full w-full  px-28 py-16  bg-[#E7EBFA] text-[#242424] flex flex-col items-center">
      <div>
        <TextEffect>
          <h2 className="tracking-tight text-[64px] font-header font-medium text-center ">
            {t("title")}
          </h2>
        </TextEffect>
        <TextEffect>
          <p className="font-body text-center font-normal ">{t("subTitle")}</p>
        </TextEffect>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3  gap-8 w-full mb-12 mt-16">
        {data?.items?.map((item, index) => (
          <ProblemsItems data={item} key={index} />
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
