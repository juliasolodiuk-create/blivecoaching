import { fetchHowChooseCoachData } from "@/entities/how-to-choose-coach/api/how-to-choose-coach.fetch";
import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";
import { PolicySection } from "@/widgets/policy";

export default async function PrivacyPolicyPageView() {
	const data = await fetchHowChooseCoachData();

	return (
		<>
			<Header type="policy" />
			<PolicySection />
			<Footer />
		</>
	);
}
