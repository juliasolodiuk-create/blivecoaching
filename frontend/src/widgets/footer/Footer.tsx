import { MessagesSquare } from "lucide-react";
import ButtonShow from "@/shared/ui/animations/ButtonShow";
import { Button } from "@/shared/ui/components/buttons/Button/Button";
import { LinkButton } from "@/shared/ui/components/buttons/LinkButton/LinkButton";
import { MenuButton } from "@/shared/ui/components/buttons/MenuButton/MenuButton";
import { navData, type PageType } from "../../shared/lib/navigation.data";
import { FooterAnimation } from "./ui/FooterAnimation";

interface FooterProps {
	type?: PageType; // 'home' или 'about'
}

export const Footer = ({ type }: FooterProps) => {
	const currentData = type ? navData[type] : null;
	const pageLinks = currentData?.pageLinks;
	const title = currentData?.title;

	return (
		<section className="relative h-full min-h-screen w-screen bg-white overflow-clip p-4 md:p-16">
			<div className="flex justify-between flex-col md:flex-row p-10 xl:p-24 ">
				<div className="relative z-10 flex flex-col gap-4 items-center sm:items-start">
					<div className="w-40 h-30 overflow-hidden border border-[#D3C3E0] flex items-center rounded-2xl">
						<img src="/logo.png" alt="" className="object-cover w-full" />
					</div>
					<div className="py-4">
						<ButtonShow>
							<Button
								title="Connect"
								primary={true}
								link="mailto:juliasolodiuk@gmail.com"
							>
								<MessagesSquare size={20} />
							</Button>
						</ButtonShow>
					</div>
				</div>
				<div className="flex flex-col sm:flex-row gap-16 ">
					<div>
						<div className="flex flex-col items-center">
							<p className="text-[#D3C3E0] font-semibold">SITE MAP</p>
							<MenuButton title="Home" href="/" fontSize="14px" />
							<MenuButton title="About" href="/about-me" fontSize="14px" />
							{/* <MenuButton title="Blog" href="/blog" fontSize="14px" /> */}
							<MenuButton
								title="How To Choose Coach?"
								href="/how-to-choose-coach"
								fontSize="14px"
							/>
							<MenuButton
								title="BLive Coaching"
								href="/about-blc"
								fontSize="14px"
							/>
						</div>
					</div>
					<div>
						<div className="flex flex-col items-center">
							<p className="text-[#D3C3E0] font-semibold">{title}</p>

							{type && pageLinks && (
								<div>
									<div className="flex flex-col items-center">
										{pageLinks.map((item) => (
											<MenuButton
												key={item.title}
												title={item.title}
												href={item.href}
												fontSize="14px"
											/>
										))}
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
			<div className="flex flex-col w-full items-center sm:items-start p-10 xl:p-24 gap-10 sm:gap-0">
				<div className="flex-col sm:flex-row flex sm:gap-4 text-[12px] items-center">
					<span className="flex justify-center items-center">
						(
						<LinkButton
							title="Privacy Policy "
							fontSize="12px"
							href="/privacy-policy"
						/>
						)
					</span>
					<span className="flex justify-center items-center">
						(
						<LinkButton
							title="Terms and Conditions "
							fontSize="12px"
							href="/terms-and-conditions"
						/>
						)
					</span>
					<span className="flex justify-center items-center">
						(
						<LinkButton
							title="Cookie Policy "
							fontSize="12px"
							href="/cookie-policy"
						/>
						)
					</span>
				</div>
				<div className="text-black text-[12px] text-center sm:text-left">
					<span className="flex flex-wrap justify-center items-center">
						Copyright © 2026
						<span className="font-bold flex items-center">
							<LinkButton
								title="Pavlo Tishynin."
								fontSize="12px"
								href="https://www.pavlotishynin.com/"
							/>
						</span>
						All rights reserved.
					</span>
				</div>
			</div>

			<div className="absolute bottom-0">
				<FooterAnimation />
			</div>
		</section>
	);
};
