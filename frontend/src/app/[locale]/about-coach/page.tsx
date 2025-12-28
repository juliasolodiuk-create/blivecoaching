import { Header } from "@/ui/Header/Header";
import { AboutICASection } from "./components/AboutICASection/AboutICASection";
import { CertificateSection } from "./components/CertificateSection/CertificateSection";
import { CTASection } from "./components/CTASection/CTASection";
import { HeroSection } from "./components/HeroSection/HeroSection";
import { MyWhySection } from "./components/MyWhySection/MyWhySection";
import {
  getAboutBanner,
  getAboutBannerCTA,
  getAboutICA,
  getAboutMe,
  getMyWhy,
} from "../../../../lib/api/about.api";
import { urlForImage } from "../../../../lib/urlForImage";

export default async function Page() {
  const [aboutMe, myWhy, banner, aboutICA, bannerCTA] = await Promise.all([
    getAboutMe(),
    getMyWhy(),
    getAboutBanner(),
    getAboutICA(),
    getAboutBannerCTA(),
  ]);

  const aboutMeWithUrls = {
    ...aboutMe,
    imageUrl: aboutMe.img_selected
      ? urlForImage(aboutMe.img_selected)
          ?.width(500)
          .quality(85)
          .format("webp")
          .url() ?? null
      : null,
  };

  const myWhyWithUrls = {
    ...myWhy,
    smallImageUrl: myWhy.small_img_selected
      ? urlForImage(myWhy.small_img_selected)
          ?.width(500)
          .quality(85)
          .format("webp")
          .url() ?? null
      : null,

    bigImageUrl: myWhy.big_img_selected
      ? urlForImage(myWhy.big_img_selected)
          ?.width(500)
          .quality(85)
          .format("webp")
          .url() ?? null
      : null,
  };

  // console.log("MY WHY", myWhy);
  // console.log("MY WH2Y", aboutICA);

  return (
    <>
      <Header />
      <HeroSection data={aboutMeWithUrls} />
      <MyWhySection data={myWhyWithUrls} />
      <CertificateSection data={banner} />
      <AboutICASection data={aboutICA} />
      <CTASection data={bannerCTA} />
    </>
  );
}
