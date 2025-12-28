import BlurAnimation from "@/animations/BlurAnimation";
import TextEffect from "@/animations/TextEffect";
import { BlogItem } from "@/ui/BlogItem/BlogItem";
import { Button } from "@/ui/Button/Button";
import { ChevronRight } from "lucide-react";
import { HighlightWithUrls } from "../../../../../lib/types/blog.types";

interface BlogSectionProps {
  data?: HighlightWithUrls;
}

export const BlogSection = ({ data }: BlogSectionProps) => {
  return (
    <section className="min-h-screen bg-white text-[#242424] py-28 px-16 flex flex-col gap-20 items-center">
      <div className="flex flex-col items-center gap-4">
        <TextEffect>
          <p className="font-montserrat text-center max-w-200">Blog</p>
        </TextEffect>
        <TextEffect>
          <h2 className="tracking-tight text-[48px] font-literata font-bold text-center leading-[90%]">
            Some my thoughts that I want to share with you
          </h2>
        </TextEffect>
      </div>
      <div className="flex gap-8 min-h-190">
        <BlurAnimation>
          <BlogItem data={data?.highlight} />
        </BlurAnimation>
        <div className="flex flex-col gap-8">
          {data?.subhighlights.map((item, index) => (
            <BlurAnimation key={index}>
              <BlogItem
                data={item}
                flex="flex"
                height="h-[325px]"
                padding="p-[24px]"
                text="text-[24px]"
              />
            </BlurAnimation>
          ))}

          <Button
            children={<ChevronRight size={20} />}
            title="View More Posts"
            primary={true}
            width="w-50"
          />
        </div>
      </div>
    </section>
  );
};
