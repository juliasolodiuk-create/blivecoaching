import Image from "next/image";
import { forwardRef } from "react";

interface ImageContainerProps {
	inset?: string;
	objectPosition: string;
	rounded?: string;
	image: string;
	alt?: string;
	position?: string;
	className?: string;
}

export const ImageContainer = forwardRef<HTMLDivElement, ImageContainerProps>(
	(
		{
			image,
			alt = "",
			position = "",
			objectPosition,
			inset = "",
			rounded = "rounded-xl",
			className = "aspect-4/5 sm:h-[600px]",
		},
		ref,
	) => {
		return (
			<div
				className={`overflow-hidden w-full flex items-end ${rounded} ${position} relative sm:aspect-auto ${className}`}
			>
				<div ref={ref} className="relative w-full h-full ">
					{image && (
						<Image
							src={image}
							alt={alt}
							quality={100}
							priority
							unoptimized
							fill
							className={`object-cover ${objectPosition} scale-130 w-full xl:w-auto ${inset}`}
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						/>
					)}
				</div>
			</div>
		);
	},
);

ImageContainer.displayName = "ImageContainer";

ImageContainer.displayName = "ImageContainer";
