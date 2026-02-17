import Image from "next/image";
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
	(
		{
			image,
			alt = "",
			position = "",
			objectPosition,
			inset = "",
			rounded = "rounded-xl",
		},
		ref,
	) => {
		return (
			/* 1. Добавляем flex и items-end как в старом коде.
               2. Добавляем aspect-[4/5] sm:aspect-square (или auto), 
                  чтобы у контейнера была высота для работы Image fill 
            */
			<div
				className={`overflow-hidden w-full flex items-end ${rounded} ${position} relative aspect-[4/5] sm:aspect-auto sm:h-[600px]`}
			>
				{/* Этот div получает ref для параллакса. 
                   Он должен быть relative и занимать 100% высоты.
                */}
				<div ref={ref} className="relative w-full h-full">
					{image && (
						<Image
							src={image}
							alt={alt}
							quality={100} // Максимальное качество
							priority
							unoptimized
							fill
							// scale-130 как в старом коде
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
