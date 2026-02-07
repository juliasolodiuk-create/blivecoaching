import { BenefitsSection } from "@/components/sections/BenefitsSection/BenefitsSection";
import { BlogSection } from "@/components/sections/BlogSection/BlogSection";
import { ContactSection } from "@/components/sections/ContactSection/ContactSection";
import { FAQSection } from "@/components/sections/FAQSection/FAQSection";
import { FeedbacksSection } from "@/components/sections/FeedbacksSection/FeedbacksSection";
import { Footer } from "@/components/sections/Footer/Footer";
import { HeroSection } from "@/components/sections/HeroSection/HeroSection";
import { HowToChooseCoachSection } from "@/components/sections/HowToChooseCoachSection/HowToChooseCoachSection";
import { ProblemsSection } from "@/components/sections/ProblemsSection/ProblemsSection";
import { fetchHomeData } from "../../../lib/services/fetchHomeData";

export default async function HomePageView() {
	const data = await fetchHomeData();

	return (
		<>
			{/* <Header /> */}
			<HeroSection data={data.hero} link="" />
			<ProblemsSection data={data.problems} />
			<BenefitsSection data={data.benefits} />
			<HowToChooseCoachSection data={data.banner} />
			<FeedbacksSection data={data.feedbacks} />
			<FAQSection data={data.faq} />
			<BlogSection data={data.highlights} />
			<ContactSection />
			<Footer />
		</>
	);
}
