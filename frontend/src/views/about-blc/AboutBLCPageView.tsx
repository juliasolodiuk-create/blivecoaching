import { fetchAboutBLCData } from "@/entities/about-blc/api/about-blc.fetch";
import {
	AboutSection,
	FormSection,
	HeroSection,
	HowItWorksSection,
	PhotoSection,
} from "@/widgets/about-blc";
import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";

export default async function AboutBLCPageView() {
	const data = await fetchAboutBLCData();

	return (
		<>
			<Header type="aboutBLC" />
			<HeroSection data={data.hero} />
			<PhotoSection data={data.photo} />
			<AboutSection data={data.about} />
			<HowItWorksSection data={data.howItWorks} />
			<FormSection />
			<Footer type="aboutBLC" />
		</>
	);
}
