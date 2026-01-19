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
import { BenefitItem } from "@/ui/BenefitsItem/BenefitItem";
import DrawAnimation from "@/animations/DrawAnimation";

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
    <section className="relative min-h-screen p-16 bg-white ">
      <div className="absolute inset-0 flex items-center justify-center w-screen opacity-20">
        <DrawAnimation start="top 30%" duration={6} direction="end">
          <svg
            role="img"
            viewBox="0 0 3500 3500"
            xmlns="http://www.w3.org/2000/svg"
            className=" w-full fill-none stroke-[#D3C3E0] stroke-[100px] "
          >
            <path d="M3905.34,3140.45c3.1-93.07-4.82-281.13-120.6-467.92-51.68-83.37-162.45-262.08-356.97-299.08-128.18-24.38-234.77,23.8-395.56,96.48-163.34,73.84-152.36,105.92-347.32,202.6-200.97,99.66-343.73,130.58-390.74,139.89-115.64,22.92-186.38,36.94-279.79,19.3-159.64-30.16-263.75-129.82-328.02-192.96-135.41-133-111.12-190.55-236.37-347.32-118.96-148.9-245.31-227.69-390.74-318.38-138.66-86.47-277.11-171-477.57-207.43-130.92-23.79-258.51-46.97-361.79,28.94-103.09,75.77-124.3,207.87-135.07,274.96-12.61,78.56-30.66,190.94,33.77,279.79,91.66,126.41,293.03,126.24,414.85,92.24,149.55-41.74,234.03-149.74,313.55-251.43,113.52-145.15,154.51-284.57,173.66-352.14,37.41-132.02,79.51-280.56,19.3-438.97-25.07-65.95-63.34-111.5-139.89-202.6-76.12-90.59-174.31-207.45-332.85-299.08-158.5-91.61-220.16-67.18-294.26-159.19-71.18-88.4-78.68-190.95-82.01-236.37-3.58-48.97-18.25-249.51,120.6-361.79,112.5-90.98,257.65-68.9,361.79-53.06,47.72,7.26,169.98,27.3,284.61,115.77,103.28,79.72,132.97,162.96,202.6,289.43,101.31,184,228.21,414.46,448.62,549.92,29.52,18.14,190.19,114.15,414.85,120.6,215.33,6.18,373.65-73.23,525.8-149.54,111.38-55.86,168.06-85.11,217.08-149.54,131.35-172.68,70.69-396.72,62.71-424.5-7.09-24.68-94.95-317.24-284.61-323.2-149.7-4.71-261.1,172.34-299.08,289.43-36.49,112.5-16.76,205.28,14.47,352.14,35.83,168.5,68.09,320.21,188.13,463.09,118.35,140.88,256.69,195.39,434.15,265.31,111.42,43.9,269.85,104.56,482.39,101.3,91.3-1.4,225.5-4.98,371.44-82.01,77.78-41.05,133.63-89.63,169.34-125.42" />
          </svg>
        </DrawAnimation>
      </div>
      <div className="flex flex-col lg:flex-row items-start gap-10 z-1">
        <div className="w-full lg:w-161 lg:sticky lg:top-16 block ">
          <div className="overflow-hidden w-full flex items-end rounded-xl ">
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

        <div className=" flex flex-col gap-8 justify-between w-full lg:w-3/5 z-1 ">
          <div className="flex flex-col gap-8 md:gap-6">
            {data?.items?.map((item, index) => (
              <BenefitItem data={item} key={index} />
            ))}
          </div>
          <div>
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
      </div>
    </section>
  );
};
