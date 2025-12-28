"use client";

import TextEffect from "@/animations/TextEffect";
import TextEffectBlur from "@/animations/TextEffectBlur";
import useParallax from "@/hooks/useParallax";
import { Button } from "@/ui/Button/Button";
import { ChevronDown } from "lucide-react";
import { useRef } from "react";
import {
  HeroContentData,
  HeroData,
  PhotoWithUrls,
} from "../../../../../../lib/types/aboutBLC.types";
import { useLocale } from "next-intl";

interface HeroProps {
  data?: HeroData;
  photo?: PhotoWithUrls;
}

export const HeroSection = ({ data, photo }: HeroProps) => {
  const smallImageRef = useRef<HTMLDivElement>(null);
  const locale = useLocale();

  const heroContent = data?.[`content_${locale}` as keyof HeroData] as
    | HeroContentData
    | undefined;

  useParallax(smallImageRef, 15, "30%");
  return (
    <section className="bg-[#E7EBFA] text-[#242424] h-full">
      <div className="px-29 pt-29 pb-20 max-w-250">
        <TextEffect>
          <h2 className="tracking-tight text-[64px] font-literata font-bold  leading-[90%]">
            {heroContent?.title}
          </h2>
        </TextEffect>
        <Button
          title={heroContent?.link}
          children={<ChevronDown size={20} />}
          secondary={true}
        />
      </div>
      {photo?.imageUrl && (
        <div className="overflow-hidden w-full xl:w-screen h-200 justify-end hidden sm:flex ">
          <div ref={smallImageRef}>
            <img
              src={photo?.imageUrl}
              alt=""
              className={` scale-130 w-full xl:w-auto object-cover object-center rounded-sm`}
            />
          </div>
        </div>
      )}
    </section>
  );
};
