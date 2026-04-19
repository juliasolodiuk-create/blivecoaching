"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { useRef } from "react";

interface LinkButtonProps {
	title: string;
	onClick?: () => void;
	href?: string;
	fontSize?: string;
	disabled?: boolean;
	type?: "button" | "submit" | "reset";
}

export const LinkButton = ({
	title,
	onClick,
	href,
	fontSize = "14px",
	type = "button",
	disabled = false,
}: LinkButtonProps) => {
	const container = useRef<HTMLElement>(null);
	const tl = useRef<gsap.core.Timeline | null>(null);

	const { contextSafe } = useGSAP(
		() => {
			tl.current = gsap.timeline({ paused: true }).to(".layer-top", {
				yPercent: -50,
				duration: 0.3,
				ease: "power2.inOut",
			});
		},
		{ scope: container },
	);

	const toggleMenu = contextSafe((play: boolean) => {
		play ? tl.current?.play() : tl.current?.reverse();
	});

	const className =
		" text-black h-10 relative overflow-hidden cursor-pointer flex items-center justify-center  border-none outline-none rounded-lg z-60 ";

	const commonProps = {
		onMouseEnter: () => toggleMenu(true),
		onMouseLeave: () => toggleMenu(false),
		onFocus: () => toggleMenu(true),
		onBlur: () => toggleMenu(false),
		onClick,
		className,
	};

	if (href) {
		return (
			<Link
				href={href}
				ref={container as React.RefObject<HTMLAnchorElement>}
				{...commonProps}
			>
				<Content title={title} fontSize={fontSize} />
			</Link>
		);
	}

	return (
		<button
			type={type}
			ref={container as React.RefObject<HTMLButtonElement>}
			disabled={disabled}
			{...commonProps}
		>
			<Content title={title} fontSize={fontSize} />
		</button>
	);
};

const Content = ({ title, fontSize }: { title: string; fontSize: string }) => (
	<div className="relative h-full w-full flex items-center justify-center">
		<div
			className="invisible h-full px-2 font-montserrat font-regular"
			style={{ fontSize }}
		>
			{title}
		</div>
		<div className="layer-top absolute top-0 left-0 h-[200%] w-full flex flex-col pointer-events-none">
			<span
				style={{ fontSize }}
				className="flex h-1/2 w-full items-center justify-center font-montserrat font-regular"
			>
				{title}
			</span>

			<span
				style={{ fontSize }}
				className="flex h-1/2 w-full items-center justify-center font-montserrat font-regular  text-black"
			>
				{title}
			</span>
		</div>
	</div>
);
