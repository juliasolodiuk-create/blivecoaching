import { fetchHowChooseCoachData } from "@/entities/how-to-choose-coach/api/how-to-choose-coach.fetch";
import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";
import { GuideSection, HeroSection } from "@/widgets/how-to-choose-coach";

export default async function HowToChooseCoachPageView() {
	const data = await fetchHowChooseCoachData();

	return (
		<>
			<Header type="howToChooseCoach" />
			<HeroSection />
			<GuideSection data={data.howChooseCoach} />
			<Footer type="howToChooseCoach" />
		</>
	);
}
