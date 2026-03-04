import { fetchHowChooseCoachData } from "@/entities/howChooseCoach/api/howChooseCoach.fetch";
import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";
import { GuideSection, HeroSection } from "@/widgets/howToChooseCoach";

export default async function HowToChooseCoachView() {
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
