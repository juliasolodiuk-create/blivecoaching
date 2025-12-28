import BlurAnimation from "@/animations/BlurAnimation";
import DrawAnimation from "@/animations/DrawAnimation";
import TextEffect from "@/animations/TextEffect";
import { useLocale } from "next-intl";
import { ProblemContentData } from "../../../lib/types/home.types";
import { Content } from "../../../lib/types/base.types";

interface ProblemItemProps {
  data?: ProblemContentData;
}

export const ProblemsItems = ({ data }: ProblemItemProps) => {
  // console.log("DATA", data);
  const locale = useLocale();
  const problemContent = data?.[
    `problem_content_${locale}` as keyof ProblemContentData
  ] as Content | undefined;
  const solutionContent = data?.[
    `solution_content_${locale}` as keyof ProblemContentData
  ] as Content | undefined;
  return (
    <div className="flex flex-col w-full max-w-125 gap-4 justify-between h-120  mx-auto">
      <div className="font-montserrat gap-5 flex flex-col items-center  text-center">
        <div className="h-15 flex items-center">
          <BlurAnimation>
            <svg
              role="img"
              viewBox="0 0 300 279.48"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 sm:w-15 fill-[#D3C3E0]  "
            >
              <path d={data?.problemIcon?.svgPath} />
            </svg>
          </BlurAnimation>
        </div>
        <div className="flex flex-col gap-2">
          <TextEffect>
            <h6 className="font-bold">{problemContent?.title}</h6>
          </TextEffect>
          <TextEffect>
            <p>{problemContent?.desc}</p>
          </TextEffect>
        </div>
      </div>
      <div className="font-montserrat gap-6 flex flex-col items-center  text-center min-h-60 ">
        <DrawAnimation>
          <svg
            role="img"
            viewBox="0 0 399.05 733.13"
            xmlns="http://www.w3.org/2000/svg"
            className="h-20 w-full fill-none stroke-[#D3C3E0] stroke-[40px] "
          >
            <path d={data?.arrowIcon?.svgPath} />
          </svg>
        </DrawAnimation>
        <div className="flex flex-col gap-2 ">
          <TextEffect>
            <h6 className="font-bold">{solutionContent?.title}</h6>
          </TextEffect>
          <TextEffect>
            <p className="whitespace-pre-line">{solutionContent?.desc}</p>
          </TextEffect>
        </div>
      </div>
    </div>
  );
};
