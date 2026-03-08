import * as mappers from "../model/about-me.mappers";
import * as api from "./about-me.api";

export const fetchAboutMeData = async () => {
	const [aboutMe, myWhy, banner, aboutICA, bannerCTA] = await Promise.all([
		api.getAboutMe(),
		api.getMyWhy(),
		api.getAboutBanner(),
		api.getAboutICA(),
		api.getAboutBannerCTA(),
	]);
	return {
		aboutMe: mappers.mapAboutMeWithUrls(aboutMe),
		myWhy: mappers.mapMyWhyWithUrls(myWhy),
		banner,
		aboutICA,
		bannerCTA,
	};
};
