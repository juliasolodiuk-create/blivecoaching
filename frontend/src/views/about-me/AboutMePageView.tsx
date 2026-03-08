import { fetchAboutMeData } from "@/entities/about-me/api/about-me.fetch";
import {
	AboutICASection,
	BannerCTASection,
	CertificateSection,
	HeroSection,
	MyWhySection,
} from "@/widgets/about-me";
import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";

export default async function AboutMePageView() {
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
