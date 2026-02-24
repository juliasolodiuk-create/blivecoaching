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

	start = "top 95%",
	className = "",
}: ButtonShowProps) => {
	const containerRef = useRef<HTMLDivElement | null>(null);

	useGSAP(
		() => {
			if (!containerRef.current) return;

			gsap.set(containerRef.current, {
				y: 150,
				opacity: 0,
				rotateZ: "15deg",
			});

			gsap.to(containerRef.current, {
				y: 0,
				opacity: 1,
				rotateZ: 0,
				duration: 1.2,
				delay,
				ease: "back.out(1.7)",
				scrollTrigger: animateOnScroll
					? {
							trigger: containerRef.current,
							start: "top 95%",
							once: true,
						}
					: null,
			});
		},
		{ scope: containerRef, dependencies: [animateOnScroll] },
	);

	return (
		<div
			ref={containerRef}
			className={`block w-fit ${className}`}
			style={{ willChange: "transform, opacity" }}
		>
			{children}
		</div>
	);
};

export default ButtonShow;
