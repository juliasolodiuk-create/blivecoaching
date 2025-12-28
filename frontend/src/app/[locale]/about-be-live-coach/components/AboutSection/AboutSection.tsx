"use client";

import TextEffect from "@/animations/TextEffect";
import useParallax from "@/hooks/useParallax";
import { useRef } from "react";
import {
  AboutContentData,
  AboutWithUrls,
} from "../../../../../../lib/types/aboutBLC.types";
import { useLocale } from "next-intl";
import { ContentList } from "../../../../../../lib/types/base.types";

const data = [
  {
    text: "Being invites a sense of presence and self-awareness. Sometimes, this means simply noticing what you feel—or don’t feel—and allowing space for observation and reflection. It is in these quiet moments that new understanding often emerges.",
  },
  {
    text: "Living encourages a fuller engagement with life. Rather than moving through each day on autopilot, we gently support a shift toward experiencing the present more deeply—seeing, sensing, and exploring beyond familiar boundaries. This is an invitation to move from routine into possibility, to notice the richness of each moment, and to consider what your future might hold.",
  },
  {
    text: "Believing reflects a quiet confidence in each client’s inner strength and capacity for growth. At BLive Coaching, there is a fundamental trust that, even in challenging circumstances, a way forward can be found. While life’s difficulties cannot always be avoided, together we can cultivate resilience and discover new pathways through adversity.",
  },
];

interface AboutProps {
  data?: AboutWithUrls;
}

export const AboutSection = ({ data }: AboutProps) => {
  const smallImageRef = useRef<HTMLDivElement>(null);

  useParallax(smallImageRef, 15, "30%");
  const locale = useLocale();

  const aboutContent = data?.items?.[
    `content_${locale}` as keyof AboutContentData
  ] as ContentList | undefined;

  return (
    <section className="px-29 py-28 bg-white flex justify-between gap-6 text-[#242424]">
      <div className="overflow-hidden w-full xl:w-150 h-160 justify-end hidden sm:flex ">
        <div ref={smallImageRef}>
          {data?.imageUrl && (
            <img
              src={data.imageUrl}
              alt=""
              className={` scale-130 h-full xl:w-auto object-cover object-right rounded-sm`}
            />
          )}
        </div>
      </div>
      <div className="max-w-150 flex flex-col gap-6">
        <TextEffect>
          <h3 className="tracking-tight text-[40px] font-literata font-bold  leading-[90%]">
            {aboutContent?.title}
          </h3>
        </TextEffect>
        <div className="flex flex-col gap-4">
          {aboutContent?.desc?.map((index, i) => (
            <div key={i}>
              <TextEffect>
                <p className="font-montserrat">{index}</p>
              </TextEffect>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
