"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

interface UseButtonShowOptions {
	animateOnScroll?: boolean;
	delay?: number;
	start?: string;
}

export const useButtonShow = <T extends HTMLElement>({
	animateOnScroll = true,
	delay = 0,
	start = "top 95%",
}: UseButtonShowOptions = {}) => {
	const elementRef = useRef<T | null>(null);

	useGSAP(
		() => {
			if (!elementRef.current) return;

			gsap.set(elementRef.current, {
				y: 150,
				opacity: 0,
				rotateZ: "15deg",
			});

			gsap.to(elementRef.current, {
				y: 0,
				opacity: 1,
				rotateZ: 0,
				duration: 1.2,
				delay,
				ease: "back.out(1.7)",
				scrollTrigger: animateOnScroll
					? {
							trigger: elementRef.current,
							start: start,
							once: true,
						}
					: null,
			});
		},
		{ scope: elementRef, dependencies: [animateOnScroll, delay, start] },
	);

	return elementRef;
};
