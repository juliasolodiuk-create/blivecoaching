"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { type ReactNode, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

interface TextEffectBlurProps {
	children: ReactNode;
	animateOnScroll?: boolean;
	delay?: number;
	start?: string;
	className?: string;
}

const TextEffectBlur = ({
	children,
	animateOnScroll = true,
	delay = 0,
	start = "top 90%",
	className = "",
}: TextEffectBlurProps) => {
	const containerRef = useRef<HTMLDivElement | null>(null);

	useGSAP(
		() => {
			if (!containerRef.current) return;

			gsap.fromTo(
				containerRef.current,
				{
					autoAlpha: 0,
					filter: "blur(20px)",
					y: 20,
					scale: 1.05,
				},
				{
					autoAlpha: 1,
					filter: "blur(0px)",
					y: 0,
					scale: 1,
					duration: 1.8,
					delay,
					ease: "power3.out",
					scrollTrigger: animateOnScroll
						? {
								trigger: containerRef.current,
								start: start,
								once: true, // Сработает один раз
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
			style={{ willChange: "filter, opacity, transform" }}
		>
			{children}
		</div>
	);
};

export default TextEffectBlur;
