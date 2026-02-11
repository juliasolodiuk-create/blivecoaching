"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

interface MenuButtonProps {
	title: string;
	onClick?: () => void;
	fontSize?: string;
}

export const MenuButton = ({
	title,
	onClick,
	fontSize = "16px",
}: MenuButtonProps) => {
	const container = useRef<HTMLButtonElement>(null); // Теперь это кнопка
	const tl = useRef<gsap.core.Timeline | null>(null);

	useGSAP(
		() => {
			// Создаем таймлайн: верхний слой уходит вверх, нижний поднимается за ним
			tl.current = gsap
				.timeline({ paused: true })
				.from(".layer-top", {
					yPercent: 200,
					duration: 0.3,
					ease: "power2.inOut",
					rotateZ: "20deg",
				})
				.from(
					".layer-bottom",
					{
						yPercent: 250,
						duration: 0.3,
						ease: "power2.inOut",
						rotateZ: "20deg",
						delay: 0.05,
					},
					"<",
				);
		},
		{ scope: container },
	);

	// Обработчики событий
	const toggleMenu = (play: boolean) => {
		play ? tl.current?.play() : tl.current?.reverse();
	};
	return (
		<button
			ref={container}
			type="button"
			onMouseEnter={() => toggleMenu(true)}
			onMouseLeave={() => toggleMenu(false)}
			onFocus={() => toggleMenu(true)} // Для пользователей с клавиатурой
			onBlur={() => toggleMenu(false)} // Для пользователей с клавиатурой
			onClick={onClick}
			className="bg-white text-black h-10 relative overflow-hidden cursor-pointer  block p-4 rounded-lg"
		>
			<a
				href="/"
				style={{ fontSize: fontSize }}
				className={` flex h-full  items-center justify-center bg-white  text-[#242424] font-montserrat font-semibold`}
			>
				{title}
			</a>
			<div className="layer-top absolute left-0 top-0 py-px px-1 h-full w-full flex items-center justify-center">
				<div className="bg-[#D3C3E0]  h-full w-full rounded-lg"></div>
			</div>

			{/* <div className="layer-bottom absolute left-0 top-0 py-px px-1 h-full w-full flex items-center justify-center">
				<a
					href="/"
					className="  h-full w-full  bg-[#E7EBFA] text-[#242424] font-montserrat font-semibold rounded-lg flex items-center justify-center"
				>
					{title}
				</a>
			</div> */}
			<div className="layer-bottom absolute inset-0 py-px px-1 pointer-events-none">
				<span
					style={{ fontSize: fontSize }}
					className={`h-full w-full bg-[#E7EBFA] text-[#242424] font-montserrat font-semibold rounded-lg flex items-center justify-center`}
				>
					{title}
				</span>
			</div>
		</button>
	);
};
