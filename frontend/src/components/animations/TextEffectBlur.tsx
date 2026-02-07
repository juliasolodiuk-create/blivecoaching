"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { type ReactNode, useRef } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);

interface TextEffectBlurProps {
	children: ReactNode; // Используем ReactNode для безопасности
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
	const splitRef = useRef<SplitText | null>(null);
	const maskSplitRef = useRef<SplitText | null>(null);

	const { contextSafe } = useGSAP({ scope: containerRef });

	const runSplitAndAnim = contextSafe(() => {
		// Проверка 1: контейнер и наличие текста
		if (!containerRef.current || !containerRef.current.textContent?.trim())
			return;

		const el = containerRef.current;
		// Ищем заголовок внутри, если он есть, иначе берем сам контейнер
		const target = el.querySelector("h1, h2, h3, p") || el;

		// Настройка lineHeight (безопасно)
		if (target instanceof HTMLElement) {
			const tagsToAdjust = ["H1", "H2", "H3"];
			if (tagsToAdjust.includes(target.tagName)) {
				target.style.lineHeight = "0.9em";
			}
		}

		if (splitRef.current) splitRef.current.revert();
		if (maskSplitRef.current) maskSplitRef.current.revert();

		try {
			maskSplitRef.current = new SplitText(target, {
				type: "lines",
				linesClass: "split-line-container",
			});

			if (!maskSplitRef.current.lines?.length) return;

			splitRef.current = new SplitText(maskSplitRef.current.lines, {
				type: "lines",
			});

			if (animateOnScroll && splitRef.current.lines) {
				gsap.from(splitRef.current.lines, {
					autoAlpha: 0,
					scale: 1.1,
					filter: "blur(20px)",
					stagger: 0.1,
					duration: 2,
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
			console.warn("GSAP TextEffectBlur Error:", e);
		}
	});

	useGSAP(
		() => {
			if (!children) return;

			document.fonts.ready.then(() => {
				runSplitAndAnim();
			});

			window.addEventListener("resize", runSplitAndAnim);
			return () => window.removeEventListener("resize", runSplitAndAnim);
		},
		{ scope: containerRef, dependencies: [children] }, // Следим за изменением текста
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

export default TextEffectBlur;
