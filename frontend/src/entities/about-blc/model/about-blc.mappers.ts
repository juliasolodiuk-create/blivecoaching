import type { ImageAsset } from "@/shared/lib/types/base.types";
import { urlForImage } from "@/shared/lib/urlForImage";
import type {
	AboutData,
	AboutWithUrls,
	PhotoData,
	PhotoWithUrls,
} from "./about-blc.types";

const getImageUrl = (
	img: ImageAsset | null | undefined,
	width = 1440,
	quality = 85,
) =>
	img
		? urlForImage(img).width(width).quality(quality).format("webp").url()
		: null;

export const mapPhotoWithUrls = (photoData: PhotoData): PhotoWithUrls => {
	const { img, ...rest } = photoData;

	return {
		...rest,
		imageUrl: getImageUrl(img),
	};
};

export const mapAboutBLCWithUrls = ({
	imageSelected,
	...rest
}: AboutData): AboutWithUrls => ({
	...rest,
	imageUrl: getImageUrl(imageSelected?.img, 1200),
});
