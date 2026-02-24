"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { type ReactNode, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

interface DivEffectProps {
	children: ReactNode;
	animateOnScroll?: boolean;
	delay?: number;
	start?: string;
	className?: string;
}

const DivEffect = ({
	children,
	animateOnScroll = true,
	delay = 0,
	start = "top bottom",
	className = "",
}: DivEffectProps) => {
	const containerRef = useRef<HTMLDivElement | null>(null);

	useGSAP(
		() => {
			if (!containerRef.current) return;

			gsap.from(
				containerRef.current,

				{
					y: 150,
					opacity: 0.4,
					duration: 1,
					delay,
					ease: "expo.out",
					scrollTrigger: animateOnScroll
						? {
								trigger: containerRef.current,
								start: start,
								once: true,
								// markers: true,
							}
						: null,
				},
			);
		},
		{ scope: containerRef, dependencies: [] },
	);

	return (
		<div ref={containerRef} className={className}>
			{children}
		</div>
	);
};

export default DivEffect;
