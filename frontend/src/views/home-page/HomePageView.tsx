import { fetchHomeData } from "@/entities/home/api/home.fetch";
// import { pageLinks, siteMap } from "@/entities/home/model/navigation.data";
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

export const pageLinks = [
	{ title: "Home", href: "#hero" },
	{ title: "Problems", href: "#problems" },
	{ title: "Benefits", href: "#benefits" },
	{ title: "Feedbacks", href: "#feedbacks" },
	{ title: "FAQ", href: "#faq" },
	{ title: "Highlighs", href: "#highlights" },
	{ title: "Contacts", href: "#contacts" },
];

export const siteMap = [
	{ title: "Home", href: "/" },
	{ title: "About", href: "/about-me" },
	{ title: "Blog", href: "/blog" },
	{ title: "How To Choose Coach?", href: "/how-to-choose-coach" },
	{ title: "Be Live Coaching", href: "/about-blc" },
];

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
