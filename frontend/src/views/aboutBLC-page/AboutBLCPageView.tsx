import { fetchAboutBLCData } from "@/entities/aboutBLC/api/aboutBLC.fetch";
import {
	AboutSection,
	HeroSection,
	HowItWorksSection,
	PhotoSection,
} from "@/widgets/aboutBLC";
import { FormSection } from "@/widgets/aboutBLC/form-section/FormSection";
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
