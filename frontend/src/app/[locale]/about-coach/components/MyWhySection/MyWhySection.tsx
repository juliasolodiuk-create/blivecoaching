"use client";

import TextEffect from "@/animations/TextEffect";
import useParallax from "@/hooks/useParallax";
import { useRef } from "react";
import { MyWhyWithUrls } from "../../../../../../lib/types/about.types";
import { useLocale, useTranslations } from "next-intl";

const data = [
  {
    text: "My story is both unique and universally relatable—I have faced significant challenges and traumatic events, including the experience of war and being refugee.",
  },
  {
    text: "These experiences have instilled in me profound empathy and insight into the complexities of human resilience. I understand what it means to navigate adversity, and I am dedicated to helping others discover their own strength and opportunities for growth, even in the most difficult circumstances.",
  },
  {
    text: "As a coach, I offer not only professional knowledge and practical tools, but also genuine understanding and unwavering support for those seeking transformation and healing.",
  },
  {
    text: "My commitment is to empower clients to move forward with confidence, resilience, and purpose.",
  },
];

interface MyWhyProps {
  data?: MyWhyWithUrls;
}

export const MyWhySection = ({ data }: MyWhyProps) => {
  const t = useTranslations("myWhy");
  const locale = useLocale();
  const imageRef = useRef<HTMLDivElement>(null);
  const smallImageRef = useRef<HTMLDivElement>(null);
  useParallax(imageRef, 15, "30%");
  useParallax(smallImageRef, 15, "30%");

  const MyWhyDesc = data?.[`desc_${locale}` as keyof MyWhyWithUrls] as
    | string[]
    | undefined;

  return (
    <section className="h-full px-29 py-28 flex bg-white justify-between text-[#242424]">
      <div className="overflow-hidden w-full xl:w-lg h-204 justify-end hidden sm:flex ">
        <div ref={imageRef}>
          {data?.bigImageUrl && (
            <img
              src={data.bigImageUrl}
              alt=""
              className={` scale-130 w-full xl:w-auto object-cover object-center rounded-sm`}
            />
          )}
        </div>
      </div>
      <div className="w-[384px] flex flex-col gap-20">
        <div>
          <TextEffect>
            <p className="font-montserrat font-semibold">{t("subTitle")}</p>
          </TextEffect>
          <TextEffect>
            <h2 className="font-literata text-[64px] font-bold tracking-tight leading-[90%]">
              {t("title")}
            </h2>
          </TextEffect>
        </div>
        <div className="flex flex-col gap-4">
          {MyWhyDesc?.map((index, i) => (
            <div key={i}>
              <TextEffect>
                <p className="font-montserrat">{index}</p>
              </TextEffect>
            </div>
          ))}
        </div>
      </div>
      <div className="overflow-hidden w-full xl:w-64 h-64 justify-end hidden sm:flex ">
        <div ref={smallImageRef}>
          {data?.smallImageUrl && (
            <img
              src={data.smallImageUrl}
              alt=""
              className={` scale-130 w-full xl:w-auto object-cover object-center rounded-sm`}
            />
          )}
        </div>
      </div>
    </section>
  );
};
