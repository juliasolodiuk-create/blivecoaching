import { fetchHowChooseCoachData } from "@/entities/how-to-choose-coach/api/how-to-choose-coach.fetch";
import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";
import { TermsSection } from "@/widgets/terms";

export default async function TermsAndConditionsPageView() {
	const data = await fetchHowChooseCoachData();

	return (
		<>
			<Header />
			<TermsSection />
			<Footer />
		</>
	);
}
