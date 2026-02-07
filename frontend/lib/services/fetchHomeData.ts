import { getHighlights } from "../api/blog.api";
import {
	getBannerHowToChooseCoach,
	getBenefits,
	getFAQ,
	getFeedbacks,
	getHero,
	getProblems,
} from "../api/home.api";
import type { BlogWithUrl, HighlightWithUrls } from "../types/blog.types";
import type { BenefitWithUrls, ProblemWithUrls } from "../types/home.types";
import { urlForImage } from "../urlForImage";

export const fetchHomeData = async () => {
	const [hero, problems, benefits, banner, feedbacks, faq, highlight] =
		await Promise.all([
			getHero(),
			getProblems(),
			getBenefits(),
			getBannerHowToChooseCoach(),
			getFeedbacks(),
			getFAQ(),
			getHighlights(),
		]);

	const heroWithUrls = {
		...hero,
		imageUrl: hero.img
			? (urlForImage(hero.img)?.width(1440).quality(85).format("webp").url() ??
				null)
			: null,
	};

	const problemsWithUrl: ProblemWithUrls = {
		...problems,

		items: (problems.items || []).map((item) => ({
			...item,
			imageUrl: item.img
				? urlForImage(item.img).width(500).quality(80).format("webp").url()
				: null,
		})),
	};

	const benefitsWithUrl: BenefitWithUrls = {
		...benefits,

		imageSelected: {
			...benefits.imageSelected,
			imageUrl: benefits.imageSelected?.img
				? urlForImage(benefits.imageSelected.img)
						.width(900)
						.quality(85)
						.format("webp")
						.url()
				: null,
		},

		items: (benefits.items || []).map((item) => ({
			...item,
			imageUrl: item.img
				? urlForImage(item.img).width(300).quality(80).format("webp").url()
				: null,
		})),
	};

	const feedbackWithUrls = {
		...feedbacks,
		items: (feedbacks || []).map((item) => ({
			...item,
			imageUrl: item.img
				? urlForImage(item.img).width(300).quality(80).format("webp").url()
				: null,
		})),
	};

	const highlightsWithUrls: HighlightWithUrls = {
		highlight: highlight?.highlight
			? {
					...highlight.highlight,
					imageUrl: highlight.highlight.img
						? urlForImage(highlight.highlight.img).width(1200).quality(90).url()
						: null,
				}
			: null,

		subhighlights: (highlight?.subhighlights || []).map((item) => {
			return {
				...item,
				imageUrl: item?.img
					? urlForImage(item.img).width(600).quality(85).url()
					: null,
			} as BlogWithUrl;
		}),
	};
	return {
		hero: heroWithUrls,
		problems: problemsWithUrl,
		benefits: benefitsWithUrl,
		banner,
		feedbacks: feedbackWithUrls.items,
		faq,
		highlights: highlightsWithUrls,
	};
};
