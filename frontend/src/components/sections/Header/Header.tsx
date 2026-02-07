import { MessagesSquare } from "lucide-react";
import Image from "next/image";
import { Button } from "../Button/Button";
import LocaleSwitcher from "../LocaleSwitcher";

export const Header = () => {
	return (
		<section className="py-4 px-29 fixed w-screen top-0  h-20 border-b-[0.3px] z-9999 flex justify-between">
			<div className="flex gap-2">
				<div className="relative w-12 h-12 overflow-hidden rounded-xl ">
					<img src="/logo.jpg" alt="" className="object-cover" />
				</div>
				<div className="flex items-center rounded-xl overflow-hidden bg-white h-full">
					<div className="px-5 py-2.5  text-[#242424] font-montserrat font-semibold">
						<a href="/">Home</a>
					</div>
					<div className="px-5 py-2.5  text-[#242424] font-montserrat font-semibold">
						<a href="/about-coach">About</a>
					</div>
					<div className="px-5 py-2.5  text-[#242424] font-montserrat font-semibold">
						<a href="/">Blog</a>
					</div>
					<div className="px-5 py-2.5  text-[#242424] font-montserrat font-semibold">
						<a href="/how-to-choose-coach">How To Choose Coach?</a>
					</div>
					<div className="px-5 py-2.5  text-[#242424] font-montserrat font-semibold">
						<a href="/about-be-live-coach">Be Live Coaching</a>
					</div>
				</div>
			</div>

			<div className="flex items-center gap-2">
				<div className="flex items-center rounded-xl overflow-clip">
					<div className="px-5 h-11 bg-white text-[#242424] font-montserrat font-semibold flex items-center">
						<LocaleSwitcher />
					</div>
					<div className="px-5 py-2.5 bg-white text-[#242424] font-montserrat font-semibold">
						Menu
					</div>
				</div>
				<Button
					children={<MessagesSquare size={20} />}
					title="Connect"
					primary={true}
				/>
			</div>
		</section>
	);
};
