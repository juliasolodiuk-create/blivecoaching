"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { MessagesSquare } from "lucide-react";
import { useRef } from "react";
import { navData, type PageType } from "@/shared/lib/navigation.data";
import { Button } from "@/shared/ui/components/buttons/Button/Button";
import { MenuButton } from "@/shared/ui/components/buttons/MenuButton/MenuButton";

interface Props {
	isOpen: boolean;
	onClose: () => void;
	type?: PageType;
}

export const MenuPopUp = ({ isOpen, onClose, type = "home" }: Props) => {
	const container = useRef<HTMLDivElement>(null);
	const tl = useRef<gsap.core.Timeline | null>(null);
	const currentData = navData[type] || navData.home;
	const { siteMap, pageLinks } = currentData;

	useGSAP(
		() => {
			tl.current = gsap.timeline({ paused: true }).fromTo(
				container.current,
				{
					scale: 0,
					opacity: 0,
					display: "hidden",
					transformOrigin: "top right",
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
			className="fixed justify-between items-center h-screen max-h-150 w-9/10 max-w-125 opacity-0 scale-0 flex bg-white flex-col right-0 rounded-2xl m-2 p-4 border-2"
		>
			<div className="flex justify-end w-full">
				<MenuButton title="CLOSE" onClick={onClose} fontSize="12px" />
			</div>

			<div className="flex  justify-center h-full flex-col w-full gap-4 ">
				<div className="border-b border-[#D3C3E0]/30 pb-4">
					<div className="flex flex-wrap">
						{pageLinks?.map((item) => (
							<MenuButton
								key={item.title}
								title={item.title}
								onClick={onClose}
								href={item.href}
							/>
						))}
					</div>
				</div>

				{siteMap?.map((item) => (
					<div key={item.title} className="border-b border-[#D3C3E0]/30 pb-4">
						<div className="flex justify-start">
							<MenuButton
								title={item.title}
								href={item.href}
								onClick={onClose}
							/>
						</div>
					</div>
				))}

				{/* <div className="border-b border-[#D3C3E0]/30 pb-4">
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
				</div> */}
				<div className="block sm:hidden">
					<Button title="Connect" primary={true}>
						<MessagesSquare size={20} />
					</Button>
				</div>
			</div>
		</div>
	);
};
