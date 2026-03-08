import * as mappers from "../model/about-blc.mappers";
import * as api from "./about-blc.api";

export const fetchAboutBLCData = async () => {
	const [hero, photo, aboutBLC, howItWorks] = await Promise.all([
		api.getHero(),
		api.getPhoto(),
		api.getAbout(),
		api.getHowItWorks(),
	]);
	return {
		hero,
		photo: mappers.mapPhotoWithUrls(photo),
		about: mappers.mapAboutBLCWithUrls(aboutBLC),
		howItWorks,
	};
};
