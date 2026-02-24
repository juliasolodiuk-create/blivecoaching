"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { RefObject } from "react";

gsap.registerPlugin(ScrollTrigger);

interface UseDrawArrowProps {
	scope: RefObject<HTMLElement | null>;
	animateOnScroll?: boolean;
	delay?: number;
	start?: string;
	selector?: string;
	duration?: number;
	direction?: "start" | "end";
}

export const useDrawArrow = ({
	scope,
	animateOnScroll = true,
	delay = 0,
	start = "top 80%",
	selector = "path, circle, rect, polyline",
	duration = 2,
	direction = "start",
}: UseDrawArrowProps) => {
	useGSAP(
		() => {
			if (!scope.current || !animateOnScroll) return;

			const targets = scope.current.querySelectorAll(selector);

			if (targets.length > 0) {
				targets.forEach((target) => {
					const element = target as SVGGeometryElement;

					if (typeof element.getTotalLength !== "function") return;

					const length = element.getTotalLength();
					const initialOffset = direction === "start" ? length : -length;

					gsap.set(element, {
						strokeDasharray: length,
						strokeDashoffset: initialOffset,
						opacity: 1,
					});
				});

				gsap.to(targets, {
					strokeDashoffset: 0,
					duration: duration,
					ease: "power2.inOut",
					delay,
					stagger: 0.2,
					scrollTrigger: {
						trigger: scope.current,
						start: start,
						once: true,
					},
				});
			}
		},
		{ scope, dependencies: [] },
	);
};
