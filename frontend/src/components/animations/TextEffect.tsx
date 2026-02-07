"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { type ReactNode, useRef } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);

interface TextEffectProps {
	children: ReactNode; // Используем ReactNode вместо ReactElement
	animateOnScroll?: boolean;
	delay?: number;
	start?: string;
	className?: string;
}

const TextEffect = ({
	children,
	animateOnScroll = true,
	delay = 0,
	start = "top 80%",
	className = "",
}: TextEffectProps) => {
	const containerRef = useRef<HTMLDivElement | null>(null);
	const splitRef = useRef<SplitText | null>(null);
	const maskSplitRef = useRef<SplitText | null>(null);

	const { contextSafe } = useGSAP({ scope: containerRef });

	const runSplitAndAnim = contextSafe(() => {
		// Безопасная проверка наличия текста
		if (!containerRef.current || !containerRef.current.textContent?.trim())
			return;

		const el = containerRef.current;
		// Ищем внутри любой текстовый тег или берем сам контейнер
		const target = el.querySelector("h1, h2, h3, p, span") || el;

		if (splitRef.current) splitRef.current.revert();
		if (maskSplitRef.current) maskSplitRef.current.revert();

		try {
			maskSplitRef.current = new SplitText(target, {
				type: "lines",
				linesClass: "overflow-hidden",
			});

			if (!maskSplitRef.current.lines?.length) return;

			splitRef.current = new SplitText(maskSplitRef.current.lines, {
				type: "lines",
			});

			if (animateOnScroll && splitRef.current.lines) {
				gsap.from(splitRef.current.lines, {
					yPercent: 100,
					autoAlpha: 0,
					stagger: 0.08,
					duration: 0.8,
					ease: "power3.out",
					delay,
					scrollTrigger: {
						trigger: target,
						start: start,
						once: true,
					},
				});
			}
		} catch (e) {
			console.warn("GSAP TextEffect Error:", e);
		}
	});

	useGSAP(
		() => {
			// Больше не обращаемся к children.props.children!
			if (!children) return;

			document.fonts.ready.then(() => {
				runSplitAndAnim();
			});

			const handleResize = () => runSplitAndAnim();
			window.addEventListener("resize", handleResize);
			return () => window.removeEventListener("resize", handleResize);
		},
		{ scope: containerRef, dependencies: [children] },
	);

	return (
		<div
			ref={containerRef}
			className={className}
			style={{ visibility: "visible", position: "relative" }}
		>
			{children}
		</div>
	);
};

export default TextEffect;
