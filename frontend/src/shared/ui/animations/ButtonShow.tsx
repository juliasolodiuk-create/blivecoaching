"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { type ReactNode, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

interface ButtonShowProps {
	children: ReactNode;
	animateOnScroll?: boolean;
	delay?: number;
	start?: string;
	className?: string;
}

const ButtonShow = ({
	children,
	animateOnScroll = true,
	delay = 0,
	start = "top bottom",
	className = "",
}: ButtonShowProps) => {
	const containerRef = useRef<HTMLDivElement | null>(null);

	useGSAP(
		() => {
			if (!containerRef.current) return;

			gsap.from(
				containerRef.current,

				{
					// autoAlpha: 1,
					y: 150,
					opacity: 0.4,
					rotateZ: "15deg",
					duration: 1,
					delay,
					ease: "bounce.out",
					scrollTrigger: animateOnScroll
						? {
								trigger: containerRef.current,
								start: start,
								once: true, // Сработает один раз
								// markers: true,
							}
						: null,
				},
			);
		},
		{ scope: containerRef, dependencies: [] },
	);

	return (
		<div
			ref={containerRef}
			className={className}
			// style={{ willChange: "filter, opacity, transform" }}
		>
			{children}
		</div>
	);
};

export default ButtonShow;
