import { fetchAboutMeData } from "@/entities/aboutMe/api/aboutMe.fetch";
import {
	AboutICASection,
	BannerCTASection,
	CertificateSection,
	HeroSection,
	MyWhySection,
} from "@/widgets/about";
import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";

export default async function AboutPageView() {
	const data = await fetchAboutMeData();
	return (
		<>
			<Header type="aboutMe" />
			<HeroSection data={data.aboutMe} />
			<MyWhySection data={data.myWhy} />
			<CertificateSection data={data.banner} />
			<AboutICASection data={data.aboutICA} />
			<BannerCTASection data={data.bannerCTA} />

			<Footer type="aboutMe" />
		</>
	);
}
