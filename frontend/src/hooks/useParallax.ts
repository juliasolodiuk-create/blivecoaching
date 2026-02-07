import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { type RefObject, useEffect } from "react";

const useParallax = <T extends HTMLElement>(
	elementRef: RefObject<T | null>,
	yPercent: number = 50,
	top: string = "top",
) => {
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		const target = elementRef?.current;
		if (!target) return;

		const animation = gsap.fromTo(
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
					//   markers: true,
				},
			},
		);

		return () => {
			animation.kill();
		};
	}, [elementRef, yPercent]);
};

export default useParallax;
