import type { ImageAsset } from "@/shared/lib/types/base.types";
import { urlForImage } from "@/shared/lib/urlForImage";
import type {
	BenefitData,
	BenefitWithUrls,
	BlogWithUrl,
	ContactData,
	ContactWithUrls,
	FeedbackData,
	FeedbackWithUrls,
	HeroData,
	HeroWithUrls,
	HighlightData,
	HighlightWithUrls,
	ProblemData,
	ProblemWithUrls,
} from "../model/home.types";

const getImageUrl = (
	img: ImageAsset | null | undefined,
	width = 1440,
	quality = 85,
) =>
	img
		? urlForImage(img).width(width).quality(quality).format("webp").url()
		: null;

export const mapHeroWithUrls = (hero: HeroData): HeroWithUrls => ({
	...hero,
	imageUrl: getImageUrl(hero.img),
});

export const mapProblemsWithUrl = (problems: ProblemData): ProblemWithUrls => ({
	...problems,
	items: (problems.items || []).map((item) => ({
		...item,
		imageUrl: getImageUrl(item.img, 500, 80),
	})),
});

export const mapBenefitsWithUrl = (benefits: BenefitData): BenefitWithUrls => ({
	...benefits,
	imageSelected: {
		...benefits.imageSelected,
		imageUrl: getImageUrl(benefits.imageSelected?.img, 900),
	},
	items: (benefits.items || []).map((item) => ({
		...item,
		imageUrl: getImageUrl(item.img, 300, 80),
	})),
});

export const mapFeedbackWithUrls = (
	feedbacks: FeedbackData[],
): FeedbackWithUrls[] =>
	(feedbacks || []).map((item) => ({
		...item,
		imageUrl: getImageUrl(item.img, 300, 80),
	}));

export const mapHighlightsWithUrls = (
	highlight: HighlightData,
): HighlightWithUrls => ({
	highlight: highlight?.highlight
		? {
				...highlight.highlight,
				imageUrl: getImageUrl(highlight.highlight.img, 1200, 90),
			}
		: null,
	subhighlights: (highlight?.subhighlights || []).map(
		(item) =>
			({
				...item,
				imageUrl: getImageUrl(item.img, 600),
			}) as BlogWithUrl,
	),
});

export const mapContactsWithUrl = (contact: ContactData): ContactWithUrls => ({
	...contact,
	imageSelected: {
		...contact.imageSelected,
		imageUrl: getImageUrl(contact.imageSelected?.img),
	},
});
