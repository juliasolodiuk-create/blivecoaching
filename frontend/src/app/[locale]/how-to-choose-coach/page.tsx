import { Header } from "@/ui/Header/Header";
import { AboutSection } from "./AboutSection/AboutSection";
import { HeroSection } from "./HeroSection/HeroSection";
import { getHowChooseCoach } from "../../../../lib/api/howChooseCoach.api";

export default async function Page() {
  const [howChooseCoach] = await Promise.all([getHowChooseCoach()]);
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection data={howChooseCoach} />
    </>
  );
}
