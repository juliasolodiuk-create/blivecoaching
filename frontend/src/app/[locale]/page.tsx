import Image from "next/image";
import { HeroSection } from "./components/HeroSection/HeroSection";
import { ProblemsSection } from "./components/ProblemsSection/ProblemsSection";
import dataJson from "../../../db/data.json";
import { BenefitsSection } from "./components/BenefitsSection/BenefitsSection";
import { HowToChooseCoachSection } from "./components/HowToChooseCoachSection/HowToChooseCoachSection";
import { FeedbacksSection } from "./components/FeedbacksSection/FeedbacksSection";
import { FAQSection } from "./components/FAQSection/FAQSection";
import { BlogSection } from "./components/BlogSection/BlogSection";
import { Header } from "@/ui/Header/Header";

import { urlForImage } from "../../../lib/urlForImage";
import {
  getBannerHowToChooseCoach,
  getBenefits,
  getFAQ,
  getFeedbacks,
  getHero,
  getProblems,
} from "../../../lib/api/home.api";
import { getHighlights } from "../../../lib/api/blog.api";
import { BenefitWithUrls } from "../../../lib/types/home.types";
import { BlogWithUrl, HighlightWithUrls } from "../../../lib/types/blog.types";

export default async function Home() {
  const [hero, problems, benefits, banner, feedbacks, faq, highlight] =
    await Promise.all([
      getHero(),
      getProblems(),
      getBenefits(),
      getBannerHowToChooseCoach(),
      getFeedbacks(),
      getFAQ(),
      getHighlights(),
    ]);

  const heroWithUrls = {
    ...hero,
    imageUrl: hero.img
      ? urlForImage(hero.img)?.width(1440).quality(85).format("webp").url() ??
        null
      : null,
  };

  const benefitsWithUrl: BenefitWithUrls = {
    ...benefits,
    // Обрабатываем конкретное изображение из imageSelected
    imageSelected: {
      ...benefits.imageSelected,
      imageUrl: benefits.imageSelected?.img
        ? urlForImage(benefits.imageSelected.img)
            .width(900)
            .quality(85)
            .format("webp")
            .url()
        : null,
    },
    // Если вам нужно также обработать массив картинок в "items"
    items: (benefits.items || []).map((item) => ({
      ...item,
      imageUrl: item.img
        ? urlForImage(item.img).width(300).quality(80).format("webp").url()
        : null,
    })),
  };

  const feedbackWithUrls = {
    ...feedbacks,
    items: (feedbacks || []).map((item) => ({
      ...item,
      imageUrl: item.img
        ? urlForImage(item.img).width(300).quality(80).format("webp").url()
        : null,
    })),
  };

  const highlightsWithUrls: HighlightWithUrls = {
    // Главный пост (тут всё верно)
    highlight: highlight?.highlight
      ? {
          ...highlight.highlight,
          imageUrl: highlight.highlight.img
            ? urlForImage(highlight.highlight.img).width(1200).quality(90).url()
            : null,
        }
      : null,

    // ИСПРАВЛЕНО: item — это уже и есть BlogData
    subhighlights: (highlight?.subhighlights || []).map((item) => {
      return {
        ...item, // берем данные напрямую из item
        imageUrl: item?.img
          ? urlForImage(item.img).width(600).quality(85).url()
          : null,
      } as BlogWithUrl;
    }),
  };

  return (
    <>
      {/* <Header /> */}
      <HeroSection data={heroWithUrls} link="" />
      <ProblemsSection data={problems} />
      <BenefitsSection data={benefitsWithUrl} />
      <HowToChooseCoachSection data={banner} />
      <FeedbacksSection data={feedbackWithUrls.items} />
      <FAQSection data={faq} />
      {/* <BlogSection data={highlightsWithUrls} /> */}
    </>
  );
}
