"use client";

import { MessagesSquare } from "lucide-react";
import { useLocale } from "next-intl";
import { useRef } from "react";
import useParallax from "@/shared/lib/hooks/useParallax";
import ButtonShow from "@/shared/ui/animations/ButtonShow";
import TextEffect from "@/shared/ui/animations/TextEffect";
import { Button } from "@/shared/ui/components/buttons/Button/Button";
import { ImageBackground } from "@/shared/ui/components/images/ImageBackground/ImageBackground";
import type { HeroWithUrls } from "../../../entities/home/model/home.types";
import { HeroTitle } from "./ui/HeroTitle";

interface HeroSectionProps {
	data: HeroWithUrls;
	link: string;
}

export const HeroSection = ({ data }: HeroSectionProps) => {
	const locale = useLocale();
	const imgRef = useRef<HTMLDivElement>(null);
	useParallax(imgRef, 15, "30%");

	const heroTitle = data?.[`title_${locale}` as keyof HeroWithUrls] as
		| string
		| undefined;

	if (!data?.imageUrl) {
		return (
			<section className="h-screen bg-slate-900 flex items-center justify-center text-white  ">
				Loading...
			</section>
		);
	}

	if (!data) return null;
	return (
		<section
			id="hero"
			className="relative h-screen w-full overflow-x-clip max-h-225  "
		>
			<div
				className="w-full h-screen max-h-225 flex flex-col justify-end max-w-[1440px] m-auto
      px-4 py-29 
      sm:px-10
      lg:px-16
      "
			>
				<div
					className="flex flex-col gap-8 
        w-full items-center 
        lg:w-4/7 lg:items-start
        "
				>
					<TextEffect>
						<HeroTitle>{heroTitle}</HeroTitle>
					</TextEffect>
					<div>
						<ButtonShow>
							<Button title="Connect" primary={true}>
								<MessagesSquare size={20} />
							</Button>
						</ButtonShow>
					</div>
				</div>
			</div>

			<ImageBackground
				objectPosition="object-right"
				inset="inset-0"
				ref={imgRef}
				image={data.imageUrl}
				alt="Hero Background"
				position="absolute"
			/>
		</section>
	);
};
