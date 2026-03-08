import { fetchHomeData } from "@/entities/home/api/home.fetch";
import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";
import {
	BenefitsSection,
	BlogSection,
	ContactSection,
	FAQSection,
	FeedbacksSection,
	HeroSection,
	HowToChooseCoachSection,
	ProblemsSection,
} from "@/widgets/home";

export default async function HomePageView() {
	const data = await fetchHomeData();

	return (
		<>
			<Header type="home" />
			<HeroSection data={data.hero} link="" />
			<ProblemsSection data={data.problems} />
			<BenefitsSection data={data.benefits} />
			<HowToChooseCoachSection data={data.banner} />
			<FeedbacksSection data={data.feedbacks} />
			<FAQSection data={data.faq} />
			<BlogSection data={data.highlights} />
			<ContactSection data={data.contact} />
			<Footer type="home" />
		</>
	);
}
