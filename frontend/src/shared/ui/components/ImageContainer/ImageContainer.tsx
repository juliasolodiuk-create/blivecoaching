import { forwardRef } from "react";

interface ImageContainerProps {
	inset?: string;
	objectPosition: string;
	rounded?: string;
	image: string;
	alt?: string;
	position?: string; // Например, "object-right" или "object-center"
}

export const ImageContainer = forwardRef<HTMLDivElement, ImageContainerProps>(
	({ image, alt = "", position, objectPosition, inset, rounded }, ref) => {
		return (
			<div
				className={`${position} top-0 -z-1 overflow-hidden w-full h-full sm:flex ${rounded}`}
			>
				{/* Привязываем переданный ref к этому div, так как хук useParallax работает с ним */}
				<div ref={ref} className="relative w-full h-full">
					{image && (
						<img
							src={image}
							alt={alt}
							className={`absolute ${inset} w-full h-full object-cover  ${objectPosition} scale-110`}
						/>
					)}
				</div>
			</div>
		);
	},
);

ImageContainer.displayName = "ImageContainer";
