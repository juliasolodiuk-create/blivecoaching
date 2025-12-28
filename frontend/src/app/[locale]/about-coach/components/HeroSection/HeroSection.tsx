"use client";

import TextEffect from "@/animations/TextEffect";
import useParallax from "@/hooks/useParallax";
import { useLocale, useTranslations } from "next-intl";
import { useRef } from "react";
import { AboutMeWithUrls } from "../../../../../../lib/types/about.types";

const data = [
  {
    text: "With a foundation as a philologist and language educator, my lifelong passion for psychology began with supporting children in educational settings as a teacher.",
  },
  {
    text: "This passion evolved as I transitioned into the business world, where I spent over 15 years supporting organizations and teams in corporate and retail HR, training, and development.",
  },
  {
    text: "My professional journey also includes interpreter experience in clinics in Germany and Finland, working closely with severely ill patients and their families to provide compassionate support during challenging times.My professional journey also includes interpreter experience in clinics in Germany and Finland, working closely with severely ill patients and their families to provide compassionate support during challenging times.",
  },
  {
    text: "My approach is further enriched by advanced studies in Gestalt Therapy and professional coaching with the International Coach Academy, allowing me to integrate diverse methodologies and perspectives into my practice.",
  },
];

interface HeroSectionProps {
  data?: AboutMeWithUrls;
}

export const HeroSection = ({ data }: HeroSectionProps) => {
  const t = useTranslations("aboutMe");
  const locale = useLocale();
  const imageRef = useRef<HTMLDivElement>(null);
  useParallax(imageRef, 15, "30%");

  const AboutMeDesc = data?.[`desc_${locale}` as keyof AboutMeWithUrls] as
    | string[]
    | undefined;
  return (
    <section className="py-28 bg-[#E7EBFA] h-full flex  text-[#242424] justify-between">
      <div className="max-w-192.5 pl-32 pr-20 py-18.5 flex flex-col gap-6">
        <TextEffect>
          <h2 className="font-literata text-[64px] font-bold tracking-tight leading-[90%]">
            {t("title")}
          </h2>
        </TextEffect>
        <div className="flex flex-col gap-4">
          {AboutMeDesc?.map((index, i) => (
            <div key={i}>
              <TextEffect delay={0.4 * i}>
                <p className="font-montserrat">{index}</p>
              </TextEffect>
            </div>
          ))}
        </div>
      </div>
      <div className="overflow-hidden w-full xl:w-151 h-180 justify-end hidden sm:flex ">
        <div ref={imageRef}>
          {data?.imageUrl && (
            <img
              src={data.imageUrl}
              alt=""
              className={` scale-130 w-full xl:w-auto object-cover object-center rounded-sm`}
            />
          )}
        </div>
      </div>
    </section>
  );
};
