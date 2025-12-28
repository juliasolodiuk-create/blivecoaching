import TextEffect from "@/animations/TextEffect";
import {
  HowChooseCoachContentData,
  HowChooseCoachData,
} from "../../../../../lib/types/howChooseCoach.types";
import { useLocale } from "next-intl";

interface AboutProps {
  data?: HowChooseCoachData;
}

export const AboutSection = ({ data }: AboutProps) => {
  const locale = useLocale();
  const AboutDesc = data?.[`guide_${locale}` as keyof HowChooseCoachData] as
    | HowChooseCoachContentData
    | undefined;

  return (
    <section
      id="about_htcc"
      className="px-29 py-28 bg-white text-[#242424] h-full flex justify-between"
    >
      <div className="max-w-150 flex flex-col gap-6">
        <TextEffect>
          <h3 className="tracking-tight text-[40px] font-literata font-bold  leading-[90%]">
            {AboutDesc?.title}
          </h3>
        </TextEffect>
        <TextEffect>
          <p className="font-montserrat ">{AboutDesc?.subTitle}</p>
        </TextEffect>
      </div>

      <div className="flex flex-col gap-8 max-w-150">
        {AboutDesc?.desc?.map((index, i) => (
          <div key={i}>
            <TextEffect>
              <p className="font-montserrat">{index}</p>
            </TextEffect>
          </div>
        ))}
      </div>
    </section>
  );
};
