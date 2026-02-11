import * as mappers from "../model/home.mappers";
import * as api from "./home.api";

export const fetchHomeData = async () => {
	const [hero, problems, benefits, banner, feedbacks, faq, highlight] =
		await Promise.all([
			api.getHero(),
			api.getProblems(),
			api.getBenefits(),
			api.getBannerHowToChooseCoach(),
			api.getFeedbacks(),
			api.getFAQ(),
			api.getHighlights(),
		]);

	return {
		hero: mappers.mapHeroWithUrls(hero),
		problems: mappers.mapProblemsWithUrl(problems),
		benefits: mappers.mapBenefitsWithUrl(benefits),
		banner,
		feedbacks: mappers.mapFeedbackWithUrls(feedbacks),
		faq,
		highlights: mappers.mapHighlightsWithUrls(highlight),
	};
};
