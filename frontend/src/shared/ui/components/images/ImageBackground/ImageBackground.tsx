import Image from "next/image";
import { forwardRef } from "react";

interface ImageBackgroundProps {
	inset?: string;
	objectPosition: string;
	rounded?: string;
	image: string;
	alt?: string;
	position?: string; // Например, "object-right" или "object-center"
}

export const ImageBackground = forwardRef<HTMLDivElement, ImageBackgroundProps>(
	({ image, alt = "", position, objectPosition, inset, rounded }, ref) => {
		return (
			<div
				className={`${position} top-0 -z-1 overflow-hidden aspect-[4/5] sm:aspect-auto w-full h-full sm:flex ${rounded}`}
			>
				{/* Привязываем переданный ref к этому div, так как хук useParallax работает с ним */}
				<div ref={ref} className="relative w-full h-full">
					{image && (
						<Image
							src={image}
							alt={alt}
							quality={95}
							priority
							unoptimized
							fill // Заменяет absolute inset-0 w-full h-full
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
