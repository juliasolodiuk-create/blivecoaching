import { fetchHowChooseCoachData } from "@/entities/how-to-choose-coach/api/how-to-choose-coach.fetch";
import { CookieSection } from "@/widgets/cookie";
import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";

export default async function CookiePolicyPageView() {
	const data = await fetchHowChooseCoachData();

	return (
		<>
			<Header />
			<CookieSection />
			<Footer />
		</>
	);
}
