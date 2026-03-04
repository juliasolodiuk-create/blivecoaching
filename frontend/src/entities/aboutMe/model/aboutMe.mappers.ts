import type { ImageAsset } from "@/shared/lib/types/base.types";
import { urlForImage } from "@/shared/lib/urlForImage";
import type {
	AboutMeData,
	AboutMeWithUrls,
	MyWhyData,
	MyWhyWithUrls,
} from "./aboutMe.types";

const getImageUrl = (
	img: ImageAsset | null | undefined,
	width = 1440,
	quality = 85,
) =>
	img
		? urlForImage(img).width(width).quality(quality).format("webp").url()
		: null;

export const mapAboutMeWithUrls = (aboutMe: AboutMeData): AboutMeWithUrls => ({
	...aboutMe,
	imageUrl: getImageUrl(aboutMe.img_selected),
});

export const mapMyWhyWithUrls = ({
	small_img_selected,
	big_img_selected,
	...rest
}: MyWhyData): MyWhyWithUrls => ({
	...rest,
	smallImageUrl: getImageUrl(small_img_selected),
	bigImageUrl: getImageUrl(big_img_selected),
});
