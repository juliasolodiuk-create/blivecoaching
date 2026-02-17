"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { useRef } from "react";

interface MenuButtonProps {
	title: string;
	onClick?: () => void;
	href?: string;
	fontSize?: string;
}

export const MenuButton = ({
	title,
	onClick,
	href,
	fontSize = "16px",
}: MenuButtonProps) => {
	const container = useRef<HTMLElement>(null);
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

	const className =
		"bg-white text-black h-10 relative overflow-hidden cursor-pointer flex items-center justify-center p-4 rounded-lg border-none outline-none";

	// 2. Рендерим в зависимости от наличия href
	if (href) {
		return (
			<Link
				href={href}
				ref={container as React.RefObject<HTMLAnchorElement>} // Принудительное приведение для TS
				onMouseEnter={() => toggleMenu(true)}
				onMouseLeave={() => toggleMenu(false)}
				onFocus={() => toggleMenu(true)}
				onBlur={() => toggleMenu(false)}
				onClick={onClick}
				className={className}
			>
				<Content title={title} fontSize={fontSize} />
			</Link>
		);
	}

	return (
		<button
			type="button"
			ref={container as React.RefObject<HTMLButtonElement>}
			onMouseEnter={() => toggleMenu(true)}
			onMouseLeave={() => toggleMenu(false)}
			onFocus={() => toggleMenu(true)}
			onBlur={() => toggleMenu(false)}
			onClick={onClick}
			className={className}
		>
			<Content title={title} fontSize={fontSize} />
		</button>
	);
};

const Content = ({ title, fontSize }: { title: string; fontSize: string }) => (
	<>
		<span
			style={{ fontSize }}
			className="relative z-10 flex h-full items-center justify-center text-[#242424] font-montserrat font-semibold"
		>
			{title}
		</span>
		<div className="layer-top absolute inset-0 py-px px-1 h-full w-full flex items-center justify-center z-20 pointer-events-none">
			<div className="bg-[#D3C3E0] h-full w-full rounded-lg"></div>
		</div>

		<div className="layer-bottom absolute inset-0 py-px px-1 h-full w-full z-30 pointer-events-none">
			<span
				style={{ fontSize }}
				className="h-full w-full bg-[#E7EBFA] text-[#242424] font-montserrat font-semibold rounded-lg flex items-center justify-center"
			>
				{title}
			</span>
		</div>
	</>
);
