import Image from "next/image";
import { forwardRef } from "react";

interface ImageBackgroundProps {
	objectPosition: string;
	rounded?: string;
	image: string;
	alt?: string;
	position?: string;
}

export const ImageBackground = forwardRef<HTMLDivElement, ImageBackgroundProps>(
	({ image, alt = "", position, objectPosition, rounded }, ref) => {
		return (
			<div
				className={`${position} top-0 -z-1 overflow-hidden aspect-[4/5] sm:aspect-auto w-full h-full sm:flex ${rounded}`}
			>
				<div ref={ref} className="relative w-full h-full">
					{image && (
						<Image
							src={image}
							alt={alt}
							quality={95}
							priority
							unoptimized
							fill
							className={`object-cover ${objectPosition} scale-110`}
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 100vw"
						/>
					)}
				</div>
			</div>
		);
	},
);

ImageBackground.displayName = "ImageBackground";
