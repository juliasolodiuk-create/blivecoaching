"use client";

import { MessagesSquare } from "lucide-react";
import { useState } from "react";
import LocaleSwitcher from "@/features/locale-switcher/LocaleSwitcher";
import { Button } from "@/shared/ui/components/buttons/Button/Button";
import { MenuButton } from "@/shared/ui/components/buttons/MenuButton/MenuButton";
import { MenuPopUp } from "./ui/MenuPopUp";

export const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const toggleMenu = () => setIsMenuOpen((prev) => !prev);
	return (
		<section className="z-9999">
			<div className="py-4 px-29 fixed w-screen top-0 h-20   flex justify-between max-w-[1920px]">
				<div className="flex gap-2">
					<div className="relative w-12 h-12 overflow-hidden rounded-xl ">
						<img src="/logo.jpg" alt="" className="object-cover" />
					</div>
					<div className=" items-center rounded-xl overflow-hidden bg-white h-full hidden lg:flex">
						<MenuButton title="Home" />
						<MenuButton title="About" />
						<MenuButton title="Blog" />
						<MenuButton title="How To Choose Coach?" />
						<MenuButton title="Be Live Coaching" />
					</div>
				</div>

				<div className="flex items-center gap-2">
					<div className="flex items-center justify-center overflow-clip h-12 py-2 rounded-xl bg-white ">
						<div className="  bg-white text-[#242424] font-montserrat font-semibold flex items-center px-2">
							<LocaleSwitcher />
						</div>
						<div className=" bg-white text-[#242424] font-montserrat font-semibold lg:hidden">
							<MenuButton title="Menu" onClick={toggleMenu} />
						</div>
					</div>
					<Button title="Connect" primary={true}>
						<MessagesSquare size={20} />
					</Button>
				</div>
			</div>
			<MenuPopUp isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
		</section>
	);
};
