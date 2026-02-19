"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { type ReactNode, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

interface BlurAnimationProps {
	children: ReactNode;
	animateOnScroll?: boolean;
	delay?: number;
	start?: string;
	selector?: string;
	className?: string;
}

const BlurAnimation = ({
	children,
	animateOnScroll = true,
	delay = 0,
	start = "top 85%",
	selector,
	className = "",
}: BlurAnimationProps) => {
	const containerRef = useRef<HTMLDivElement | null>(null);

	const { contextSafe } = useGSAP({ scope: containerRef });

	const runAnimation = contextSafe(() => {
		if (!containerRef.current || !animateOnScroll) return;

		const el = containerRef.current;

		let targets: any;
		if (selector) {
			targets = el.querySelectorAll(selector);
		} else {
			targets = el.children;
		}

		if (!targets || targets.length === 0) return;

		gsap.killTweensOf(targets);

		gsap.from(targets, {
			autoAlpha: 0,
			scale: 1.1,
			y: 30,
			filter: "blur(15px)",
			stagger: 0.15,
			duration: 1.2,
			ease: "power2.out",
			delay,
			scrollTrigger: {
				trigger: el,
				start: start,
				once: true,
			},
		});
	});

	useGSAP(
		() => {
			if (!children) return;

			document.fonts.ready.then(() => {
				runAnimation();
			});

			const handleResize = () => {};

			window.addEventListener("resize", handleResize);
			return () => window.removeEventListener("resize", handleResize);
		},
		{ scope: containerRef, dependencies: [children, animateOnScroll] },
	);

	return (
		<div
			ref={containerRef}
			className={className}
			style={{
				visibility: "visible",
				position: "relative",
			}}
		>
			{children}
		</div>
	);
};

export default BlurAnimation;
