import { useGSAP } from "@gsap/react";
import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { RefObject } from "react";

const useParallax = <T extends HTMLElement>(
	elementRef: RefObject<T | null>,
	yPercent: number = 50,
	top: string = "top",
) => {
	useGSAP(
		() => {
			const target = elementRef.current;
			if (!target || !target.parentElement) return;

			gsap.fromTo(
				target,
				{ yPercent: 0 },
				{
					yPercent: yPercent,
					ease: "none",
					scrollTrigger: {
						trigger: target.parentElement,
						start: `top ${top}`,
						end: "bottom top",
						scrub: true,
					},
				},
			);
		},
		{
			dependencies: [yPercent, top],
			scope: elementRef,
		},
	);
};
export default useParallax;
