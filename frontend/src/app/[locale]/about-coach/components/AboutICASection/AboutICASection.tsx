import TextEffect from "@/animations/TextEffect";
import { AboutICAData } from "../../../../../../lib/types/aboutMe.types";
import { useLocale } from "next-intl";
import { Content } from "../../../../../../lib/types/base.types";

const data = [
  {
    title: "About International Coach Academy (ICA)",
    text: "International Coach Academy (ICA) is a globally recognized leader in coach training, accredited by the International Coaching Federation (ICF). ICA’s programs are designed for modern professionals, offering flexible online learning and a rich, international community of coaches. The curriculum blends proven coaching models, practical tools, and real-world application, ensuring graduates are equipped to support clients with integrity, skill, and empathy.",
  },
  {
    title: "What Does It Mean to Be a Professional ICA Coach?",
    text: "As a Professional ICA coach, I have completed rigorous training aligned with the highest industry standards. This means I am committed to ethical practice, continuous learning, and delivering impactful coaching experiences. ICA coaches are known for their ability to create a safe, supportive environment where clients can explore challenges, unlock their potential, and achieve meaningful transformation. Choosing an ICA-certified coach means choosing a partner who is dedicated to your growth, guided by internationally respected principles, and equipped to help you navigate change with confidence.",
  },
];

interface AboutICAProps {
  data?: AboutICAData[];
}

export const AboutICASection = ({ data }: AboutICAProps) => {
  const locale = useLocale();

  return (
    <section className="h-full bg-white px-29 py-29 text-[#242424] flex justify-between">
      <TextEffect>
        <h3 className="max-w-112.5 font-literata text-[40px] font-bold tracking-tight leading-[90%]">
          About International Coach Academy
        </h3>
      </TextEffect>
      <div className="flex flex-col gap-10 max-w-175">
        {data?.map((item, i) => {
          const content = item[`text_${locale}` as keyof AboutICAData] as any;

          return (
            <div key={i} className="flex flex-col gap-3">
              <TextEffect>
                <p className="font-montserrat font-bold text-xl">
                  {content?.title}
                </p>
              </TextEffect>
              <TextEffect>
                <p className="font-montserrat text-gray-700 leading-relaxed">
                  {content?.desc}
                </p>
              </TextEffect>
            </div>
          );
        })}
      </div>
    </section>
  );
};
