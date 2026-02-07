"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { type ReactNode, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

interface BlurAnimationProps {
	children: ReactNode; // Изменено на ReactNode для гибкости
	animateOnScroll?: boolean;
	delay?: number;
	start?: string;
	selector?: string;
	className?: string; // Добавляем className для внешнего контейнера
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

	// Основная функция анимации с защитой через contextSafe
	const runAnimation = contextSafe(() => {
		if (!containerRef.current || !animateOnScroll) return;

		const el = containerRef.current;

		// Определяем цели: либо по селектору, либо прямые дочерние элементы
		let targets: any;
		if (selector) {
			targets = el.querySelectorAll(selector);
		} else {
			// Если селектор не задан, анимируем всех детей первого уровня
			targets = el.children;
		}

		if (!targets || targets.length === 0) return;

		// Сбрасываем предыдущие анимации, если они были (для безопасности при resize/re-render)
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
				// invalidateOnRefresh: true, // Полезно при resize страницы
			},
		});
	});

	useGSAP(
		() => {
			if (!children) return;

			// Защита: ждем отрисовку и шрифты (важно для корректного расчета позиций ScrollTrigger)
			document.fonts.ready.then(() => {
				runAnimation();
			});

			// Защита: перезапуск при изменении размера окна
			const handleResize = () => {
				// ScrollTrigger.refresh() обычно достаточно, но если макет меняется радикально:
				// runAnimation();
			};

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
				// Убираем overflow: hidden, чтобы блюр не обрезался по краям,
				// если это не мешает верстке
			}}
		>
			{children}
		</div>
	);
};

export default BlurAnimation;
