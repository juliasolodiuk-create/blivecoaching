import { HeroSection } from "@/widgets/about";
import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";

export default async function AboutPageView() {
	return (
		<>
			<Header />
			<HeroSection />

			<Footer />
		</>
	);
}
