"use client";

import { useRef } from "react";
import type { PhotoWithUrls } from "@/entities/about-blc/model/about-blc.types";
import useParallax from "@/shared/hooks/useParallax";
import { ImageBackground } from "@/shared/ui/components/images/ImageBackground/ImageBackground";

interface PhotoSectionProps {
	data: PhotoWithUrls;
}

export const PhotoSection = ({ data }: PhotoSectionProps) => {
	const imgRef = useRef<HTMLDivElement>(null);
	useParallax(imgRef, 15, "30%");
	return (
		<section className="relative h-screen w-full overflow-x-clip">
			{data.imageUrl && (
				<ImageBackground
					objectPosition="object-right"
					ref={imgRef}
					image={data?.imageUrl}
					alt="Hero Background"
					position="absolute"
				/>
			)}
		</section>
	);
};
