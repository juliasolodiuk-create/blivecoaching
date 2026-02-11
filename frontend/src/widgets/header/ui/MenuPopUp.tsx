"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { MenuButton } from "@/shared/ui/components/buttons/MenuButton/MenuButton";

interface Props {
	isOpen: boolean;
	onClose: () => void;
}

export const MenuPopUp = ({ isOpen, onClose }: Props) => {
	const container = useRef<HTMLDivElement>(null);
	const tl = useRef<gsap.core.Timeline | null>(null);

	useGSAP(
		() => {
			// Создаем таймлайн внутри контекста useGSAP
			tl.current = gsap.timeline({ paused: true }).fromTo(
				container.current,
				{
					scale: 0,
					opacity: 0,
					display: "none",
					transformOrigin: "top right", // Точка роста
				},
				{
					scale: 1,
					opacity: 1,
					display: "flex",
					duration: 0.5,
					ease: "power3.out",
				},
			);
		},
		{ scope: container },
	);

	useGSAP(() => {
		if (isOpen) {
			tl.current?.play();
		} else {
			tl.current?.reverse();
		}
	}, [isOpen]);

	return (
		<div
			ref={container}
			className="fixed justify-center items-center h-screen max-h-[600px] w-screen max-w-[500px]  flex bg-white flex-col right-0 rounded-2xl m-2 p-8"
		>
			<div className="flex justify-end w-full">
				<MenuButton title="CLOSE" onClick={onClose} fontSize="12px" />
			</div>

			<div className="flex  justify-center h-full flex-col w-full gap-4 ">
				<div className="border-b border-[#D3C3E0]/30 pb-4">
					<div className="flex flex-wrap">
						<MenuButton title="Home" onClick={onClose} />
						<MenuButton title="Problems" onClick={onClose} />
						<MenuButton title="Benefits" onClick={onClose} />
						<MenuButton title="Highlights" onClick={onClose} />
						<MenuButton title="FAQ" onClick={onClose} />
						<MenuButton title="Feedbacks" onClick={onClose} />
						<MenuButton title="Contacts" onClick={onClose} />
					</div>
				</div>
				<div className="border-b border-[#D3C3E0]/30 pb-4">
					<MenuButton title="About" onClick={onClose} />
				</div>

				<div className="border-b border-[#D3C3E0]/30 pb-4">
					<MenuButton title="Blog" onClick={onClose} />
				</div>

				<div className="border-b border-[#D3C3E0]/30 pb-4">
					<MenuButton title="How To Choose Coach?" onClick={onClose} />
				</div>

				<div className="border-b border-[#D3C3E0]/30 pb-4">
					<MenuButton title="Be Live Coaching" onClick={onClose} />
				</div>
			</div>
		</div>
	);
};
