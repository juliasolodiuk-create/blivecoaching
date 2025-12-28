import { Header } from "@/ui/Header/Header";
import { AboutSection } from "./components/AboutSection/AboutSection";
import { CTASection } from "./components/CTASection/CTASection";
import { HeroSection } from "./components/HeroSection/HeroSection";
import { HowItWorksSection } from "./components/HowItWorksSection/HowItWorksSection";
import {
  getAbout,
  getHero,
  getHowItWorks,
  getPhoto,
} from "../../../../lib/api/aboutBLC.api";
import { urlForImage } from "../../../../lib/urlForImage";
import { AboutWithUrls } from "../../../../lib/types/aboutBLC.types";

export default async function Page() {
  const [hero, photo, about, howItWorks] = await Promise.all([
    getHero(),
    getPhoto(),
    getAbout(),
    getHowItWorks(),
  ]);

  const photoWithUrls = {
    ...photo,
    imageUrl: photo?.img
      ? urlForImage(photo.img)?.width(1440).quality(85).format("webp").url() ??
        null
      : null,
  };

  const aboutWithUrl: AboutWithUrls = {
    ...about,
    // Обрабатываем конкретное изображение из imageSelected
    imageUrl: about.imageSelected?.img
      ? urlForImage(about.imageSelected.img)
          .width(900)
          .quality(85)
          .format("webp")
          .url()
      : null,
  };

  return (
    <>
      <Header />
      <HeroSection data={hero} photo={photoWithUrls} />
      <AboutSection data={aboutWithUrl} />
      <HowItWorksSection data={howItWorks} />
      <CTASection />
    </>
  );
}
