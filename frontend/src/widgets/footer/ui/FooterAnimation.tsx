"use client";

import { useRef } from "react";
import { useSvgDraw } from "@/shared/hooks/useSvgDraw";

export const FooterAnimation = () => {
	const animationContainerRef = useRef<HTMLDivElement>(null);

	const { setContainerRef } = useSvgDraw({
		url: "/assets/footer-2.svg",
		scope: animationContainerRef,
		strokeWidth: 70,
	});

	return (
		<div
			ref={animationContainerRef}
			className="relative inset-0 z-0 overflow-hidden pointer-events-none h-screen w-screen"
		>
			<div
				ref={setContainerRef}
				className="absolute inset-0 z-0 flex -left-60 -bottom-50 items-center justify-center p-10 [&>svg]:max-w-full [&>svg]:max-h-2/3 [&>svg]:w-auto [&>svg]:h-auto opacity-20"
			/>
		</div>
	);
};
