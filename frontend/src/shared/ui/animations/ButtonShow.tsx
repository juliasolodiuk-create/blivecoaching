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
	// Изменили на "top 95%", чтобы кнопка не стреляла слишком рано в футере
	start = "top 95%",
	className = "",
}: ButtonShowProps) => {
	const containerRef = useRef<HTMLDivElement | null>(null);

	useGSAP(
		() => {
			if (!containerRef.current) return;

			// 1. Принудительно ставим в начальную позицию (внизу)
			gsap.set(containerRef.current, {
				y: 150,
				opacity: 0,
				rotateZ: "15deg",
			});

			// 2. Анимируем к "родному" состоянию
			gsap.to(containerRef.current, {
				y: 0,
				opacity: 1,
				rotateZ: 0,
				duration: 1.2,
				delay,
				ease: "back.out(1.7)", // Back эффект заметнее и приятнее bounce
				scrollTrigger: animateOnScroll
					? {
							trigger: containerRef.current,
							start: "top 95%", // Срабатывает, когда кнопка почти влетела в экран
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
