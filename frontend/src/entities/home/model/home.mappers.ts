import { urlForImage } from "../../../../lib/urlForImage";
import type {
	BenefitData,
	BenefitWithUrls,
	BlogWithUrl,
	ContactData,
	ContactWithUrls,
	FeedbackData,
	FeedbacksSectionData,
	FeedbackWithUrls,
	HeroData,
	HeroWithUrls,
	HighlightData,
	HighlightWithUrls,
	ProblemData,
	ProblemWithUrls,
} from "../model/home.types";

export const mapHeroWithUrls = (hero: HeroData): HeroWithUrls => ({
	...hero,
	imageUrl: hero.img
		? (urlForImage(hero.img)?.width(1440).quality(85).format("webp").url() ??
			null)
		: null,
});

export const mapProblemsWithUrl = (problems: ProblemData): ProblemWithUrls => ({
	...problems,

	items: (problems.items || []).map((item) => ({
		...item,
		imageUrl: item.img
			? urlForImage(item.img).width(500).quality(80).format("webp").url()
			: null,
	})),
});

export const mapBenefitsWithUrl = (benefits: BenefitData): BenefitWithUrls => ({
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
});

export const mapFeedbackWithUrls = (
	feedbacks: FeedbackData[],
): FeedbackWithUrls[] => {
	return (feedbacks || []).map((item) => ({
		...item,
		imageUrl: item.img
			? urlForImage(item.img).width(300).quality(80).format("webp").url()
			: null,
	}));
};

export const mapHighlightsWithUrls = (
	highlight: HighlightData,
): HighlightWithUrls => ({
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
});

export const mapContactsWithUrl = (contact: ContactData): ContactWithUrls => ({
	...contact,

	imageSelected: {
		...contact.imageSelected,
		imageUrl: contact.imageSelected?.img
			? urlForImage(contact.imageSelected.img)
					.width(1440)
					.quality(85)
					.format("webp")
					.url()
			: null,
	},
});
