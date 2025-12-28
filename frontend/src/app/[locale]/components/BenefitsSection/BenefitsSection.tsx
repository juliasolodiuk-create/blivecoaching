"use client";

import Image from "next/image";
import dataJson from "../../../../../db/data.json";
import { useRef } from "react";
import useParallax from "@/hooks/useParallax";
import { ChevronRight, MessagesSquare } from "lucide-react";
import { Button } from "@/ui/Button/Button";
import { BenefitsItem } from "@/ui/BenefitsItem/BenefitsItem";
import { useLocale } from "next-intl";
import { BenefitWithUrls } from "../../../../../lib/types/home.types";
import { SharedLink } from "../../../../../lib/types/base.types";

type DataStructure = typeof dataJson;

interface BenefitsSectionProps {
  data?: BenefitWithUrls;
}

export const BenefitsSection = ({ data }: BenefitsSectionProps) => {
  const imgRef = useRef<HTMLDivElement>(null);
  const pngRef = useRef<HTMLDivElement>(null);
  const locale = useLocale();
  useParallax(pngRef, 15, "30%");
  useParallax(imgRef, 15, "30%");
  // console.log("DATA", data);

  const buttonTitle =
    data?.sharedLink?.[`title_${locale}` as keyof SharedLink] ||
    "Discover more";

  return (
    <section className="min-h-screen p-16 bg-white">
      <div className="flex flex-col lg:flex-row items-start gap-10">
        <div className="w-full lg:w-2/5 lg:sticky lg:top-16 block">
          <div className="overflow-hidden w-full flex items-end  ">
            <div ref={imgRef}>
              {data?.imageSelected.imageUrl && (
                <img
                  src={data?.imageSelected.imageUrl}
                  alt=""
                  className={` scale-130 w-full xl:w-auto object-cover object-center rounded-sm`}
                />
              )}
            </div>
          </div>
        </div>

        <div className=" flex flex-col gap-8 justify-center p-10 w-full lg:w-3/5 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-6">
            {data?.items?.map((item, index) => {
              // Проверяем: четный индекс (0, 2, 4...) или нечетный (1, 3, 5...)
              const isEven = index % 2 === 0;

              const currentPosition = isEven
                ? { top: "-30%", left: "-30%" } // Для 1-го, 3-го и т.д.
                : { top: "-30%", right: "-30%" }; // Для 2-го, 4-го и т.д.

              return (
                <BenefitsItem
                  data={item}
                  key={index}
                  position={currentPosition}
                />
              );
            })}
          </div>
          <Button
            title={buttonTitle}
            children={<ChevronRight size={20} />}
            secondary={true}
            border={true}
            width="w-90"
            link="/about-be-live-coach"
          />
        </div>
      </div>
    </section>
  );
};
