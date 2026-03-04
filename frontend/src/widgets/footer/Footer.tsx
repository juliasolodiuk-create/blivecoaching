import { MessagesSquare } from "lucide-react";
import ButtonShow from "@/shared/ui/animations/ButtonShow";
import { Button } from "@/shared/ui/components/buttons/Button/Button";
import { MenuButton } from "@/shared/ui/components/buttons/MenuButton/MenuButton";
import { footerNavData, type PageType } from "./model/navigation.data";
import { FooterAnimation } from "./ui/FooterAnimation";

interface FooterProps {
	type?: PageType; // 'home' или 'about'
}

export const Footer = ({ type = "home" }: FooterProps) => {
	const currentData = footerNavData[type] || footerNavData.home;
	const { pageLinks, title } = currentData;

	return (
		<section className="relative h-full min-h-screen w-screen bg-white overflow-clip p-4 md:p-16">
			<div className="flex justify-between flex-col md:flex-row p-10 xl:p-24 ">
				<div className="relative z-10 flex flex-col gap-4 items-center sm:items-start">
					<div className="w-40 h-30 overflow-hidden border border-[#D3C3E0] flex items-center rounded-2xl">
						<img src="/logo.png" alt="" className="object-cover w-full" />
					</div>
					<div className="py-4">
						<ButtonShow>
							<Button title="Connect" primary={true}>
								<MessagesSquare size={20} />
							</Button>
						</ButtonShow>
					</div>
				</div>
				<div className="flex flex-col sm:flex-row gap-16">
					<div>
						<div className="flex flex-col items-center">
							<p className="text-[#D3C3E0] font-semibold">SITE MAP</p>
							<MenuButton title="Home" href="/" fontSize="14px" />
							<MenuButton title="About" href="/about-me" fontSize="14px" />
							<MenuButton title="Blog" href="/blog" fontSize="14px" />
							<MenuButton
								title="How To Choose Coach?"
								href="/how-to-choose-coach"
								fontSize="14px"
							/>
							<MenuButton
								title="Be Live Coaching"
								href="/about-blc"
								fontSize="14px"
							/>
						</div>
					</div>
					<div>
						<div className="flex flex-col items-center">
							<p className="text-[#D3C3E0] font-semibold">{title}</p>

							{pageLinks?.map((item) => (
								<MenuButton
									key={item.title}
									title={item.title}
									href={item.href}
									fontSize="14px"
								/>
							))}
						</div>
					</div>
				</div>
			</div>

			{/* <div
				ref={setContainerRef}
				className="absolute inset-0 z-0 flex -left-60 -bottom-20 items-center justify-center p-10 [&>svg]:max-w-full [&>svg]:max-h-full [&>svg]:w-auto [&>svg]:h-auto opacity-20"
			>
				
			</div> */}
			<div className="absolute bottom-0">
				<FooterAnimation />
			</div>
		</section>
	);
};
