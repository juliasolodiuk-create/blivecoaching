import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { type RefObject, useEffect, useState } from "react";

interface UseSvgDrawOptions {
	url: string;
	scope: RefObject<HTMLElement | null>;
	strokeColor?: string;
	strokeWidth?: number;
	duration?: number;
}

export const useSvgDraw = ({
	url,
	scope,
	strokeColor = "#d2c0dc",
	strokeWidth = 100,
	duration = 4,
}: UseSvgDrawOptions) => {
	const [isLoaded, setIsLoaded] = useState(false);
	const [containerRef, setContainerRef] = useState<HTMLElement | null>(null);

	useEffect(() => {
		if (!containerRef) return;

		fetch(url)
			.then((res) => {
				if (!res.ok) throw new Error("SVG not found");
				return res.text();
			})
			.then((svgText) => {
				containerRef.innerHTML = svgText;
				setIsLoaded(true);
			})
			.catch((err) => console.error("SVG Loading Error:", err));
	}, [url, containerRef]);

	useGSAP(
		() => {
			if (!isLoaded || !containerRef) return;

			const paths = containerRef.querySelectorAll("path");
			if (!paths.length) return;

			paths.forEach((path) => {
				const svgPath = path as SVGPathElement;
				const length = svgPath.getTotalLength();

				gsap.set(svgPath, {
					strokeDasharray: length,
					strokeDashoffset: -length,
					fill: "transparent",
					stroke: strokeColor,
					strokeWidth: strokeWidth,
					opacity: 1,
				});
			});

			gsap.to(paths, {
				strokeDashoffset: 0,
				duration: duration,
				ease: "power1.inOut",
				stagger: 0.3,
				scrollTrigger: {
					trigger: scope.current,
					start: "top 60%",
					once: true,
				},
			});
		},
		{ dependencies: [isLoaded], scope },
	);

	return { setContainerRef, isLoaded };
};
