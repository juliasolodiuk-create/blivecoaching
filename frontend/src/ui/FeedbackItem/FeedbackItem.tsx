import TextEffect from "@/animations/TextEffect";
import { Star } from "lucide-react";
import Image from "next/image";

import { useLocale } from "next-intl";
import {
  FeedbackContentData,
  FeedbackWithUrls,
} from "../../../lib/types/home.types";

interface FeedbackItemProps {
  data: FeedbackWithUrls;
}

export const FeedbackItem = ({ data }: FeedbackItemProps) => {
  const locale = useLocale();
  const feedbackContent = data?.[
    `feedback_${locale}` as keyof FeedbackWithUrls
  ] as FeedbackContentData | undefined;
  return (
    <div className="min-w-full flex justify-center text-[#242424]">
      <div className="max-w-200 flex-col flex items-center gap-8">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              // Красим звезду, если ее индекс меньше, чем рейтинг
              fill="#242424"
              color="#242424"
            />
          ))}
        </div>
        <TextEffect>
          <p className="font-montserrat font-bold text-[16px] md:text-[24px] text-center">
            {feedbackContent?.text}
          </p>
        </TextEffect>
        <div className="flex gap-5 items-center">
          <div className="relative w-16 h-16 overflow-hidden rounded-full border border-gray-100">
            {data.imageUrl && feedbackContent && (
              <Image
                src={data.imageUrl}
                alt={feedbackContent?.name || "User feedback"}
                fill
                className="object-cover"
              />
            )}
          </div>

          <div>
            <h4 className="font-semibold leading-[90%]">
              {feedbackContent?.name}
            </h4>
            <h4>{feedbackContent?.job}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
