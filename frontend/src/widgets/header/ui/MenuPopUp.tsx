"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { MessagesSquare } from "lucide-react";
import { useRef } from "react";
import { Button } from "@/shared/ui/components/buttons/Button/Button";
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
						<MenuButton title="Home" onClick={onClose} href="#hero" />
						<MenuButton title="Problems" onClick={onClose} href="#problems" />
						<MenuButton title="Benefits" onClick={onClose} href="#benefits" />
						<MenuButton title="Feedbacks" onClick={onClose} href="#feedbacks" />
						<MenuButton title="FAQ" onClick={onClose} href="#faq" />
						<MenuButton
							title="Highlights"
							onClick={onClose}
							href="#highlights"
						/>

						<MenuButton title="Contacts" onClick={onClose} href="#contacts" />
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
				<div className="block sm:hidden">
					<Button title="Connect" primary={true}>
						<MessagesSquare size={20} />
					</Button>
				</div>
			</div>
		</div>
	);
};
