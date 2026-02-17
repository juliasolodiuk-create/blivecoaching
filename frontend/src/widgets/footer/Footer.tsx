"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MessagesSquare } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import ButtonShow from "@/shared/ui/animations/ButtonShow";
import DrawAnimation from "@/shared/ui/animations/DrawAnimation";
import { Button } from "@/shared/ui/components/buttons/Button/Button";
import { MenuButton } from "@/shared/ui/components/buttons/MenuButton/MenuButton";
import FooterIcon from "../../../assets/footer.svg";

if (typeof window !== "undefined") {
	gsap.registerPlugin(DrawSVGPlugin);
}

export const Footer = () => {
	const svgContainerRef = useRef<HTMLDivElement>(null);
	const sectionRef = useRef<HTMLDivElement>(null); // Реф для всей секции
	const [isLoaded, setIsLoaded] = useState(false);
	useEffect(() => {
		fetch("/assets/footer.svg")
			.then((res) => {
				if (!res.ok) throw new Error("SVG not found");
				return res.text();
			})
			.then((svgText) => {
				if (svgContainerRef.current) {
					svgContainerRef.current.innerHTML = svgText;
					setIsLoaded(true); // Сигнализируем о готовности для useGSAP
				}
			})
			.catch((err) => console.error(err));
	}, []);

	// 2. Анимируем, когда контент готов
	useGSAP(
		() => {
			if (!isLoaded) return;

			const paths = svgContainerRef.current?.querySelectorAll("path");
			if (!paths || paths.length === 0) return;

			gsap.set(paths, {
				fill: "transparent",
				stroke: "#d2c0dc",
				strokeWidth: 15,
				opacity: 1,
			});

			// Создаем таймлайн с триггером
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: sectionRef.current, // Анимация начнется, когда в поле зрения появится секция
					start: "top 80%", // "верх секции пересекает 80% высоты экрана"
					toggleActions: "play none none none", // проигрывать при входе, возвращать при скролле вверх (по желанию)
					// markers: true, // Раскомментируйте для отладки позиций
				},
			});

			tl.fromTo(
				paths,
				{ drawSVG: "0%" },
				{
					drawSVG: "100%",
					duration: 3,
					stagger: {
						each: 0.1,
						from: "random",
					},
					ease: "circ.in",
				},
			).to(paths, {
				fill: "#d2c0dc",
				stroke: "transparent",
				duration: 1.2,
				ease: "power1.inOut",
			});
		},
		{ dependencies: [isLoaded], scope: sectionRef },
	);
	return (
		<section
			ref={sectionRef}
			className="relative h-screen w-screen bg-white max-h-screen overflow-clip p-16"
		>
			<div className="flex justify-between p-24">
				<div className="relative z-10 flex flex-col gap-8">
					{/* Лого и кнопка здесь */}
					<div className="w-40 h-30 overflow-hidden">
						<img src="/logo.png" alt="" className="object-cover w-full" />
					</div>
					<div className="p-4">
						<ButtonShow>
							<Button title="Connect" primary={true}>
								<MessagesSquare size={20} />
							</Button>
						</ButtonShow>
					</div>
				</div>
				<div className="flex gap-16 p-4">
					<div>
						<div className="flex flex-col items-center">
							<p className="text-[#D3C3E0] font-semibold">SITE MAP</p>
							<MenuButton title="Home" href="#hero" fontSize="14px" />
							<MenuButton title="About" href="#problems" fontSize="14px" />
							<MenuButton title="Blog" href="#benefits" />
							<MenuButton
								title="How To Choose Coach?"
								href="#feedbacks"
								fontSize="14px"
							/>
							<MenuButton
								title="Be Live Coaching"
								href="#faq"
								fontSize="14px"
							/>
						</div>
					</div>
					<div>
						<div className="flex flex-col items-center">
							<p className="text-[#D3C3E0] font-semibold">HOME PAGE</p>
							<MenuButton title="Home" href="#hero" fontSize="14px" />
							<MenuButton title="Problems" href="#problems" fontSize="14px" />
							<MenuButton title="Benefits" href="#benefits" fontSize="14px" />
							<MenuButton title="Feedbacks" href="#feedbacks" fontSize="14px" />
							<MenuButton title="FAQ" href="#faq" fontSize="14px" />
							<MenuButton
								title="Highlights"
								href="#highlights"
								fontSize="14px"
							/>

							<MenuButton title="Contacts" href="#contacts" fontSize="14px" />
						</div>
					</div>
				</div>
			</div>

			<div
				ref={svgContainerRef}
				className="absolute inset-0 z-0 flex -left-60 -bottom-20 items-center justify-center p-10 opacity-50 [&>svg]:max-w-full [&>svg]:max-h-full [&>svg]:w-auto [&>svg]:h-auto"
			>
				{/* SVG подгрузится сюда */}
			</div>
		</section>
	);
};
