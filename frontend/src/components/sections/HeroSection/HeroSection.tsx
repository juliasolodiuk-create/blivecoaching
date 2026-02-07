"use client";

import { MessagesSquare } from "lucide-react";
import { useLocale } from "next-intl";
import { useRef } from "react";
import { Button } from "@/components/common/Button/Button";
import useParallax from "@/hooks/useParallax";
import type { HeroWithUrls } from "../../../../lib/types/home.types";

interface HeroSectionProps {
	data: HeroWithUrls;
	link: string;
}

export const HeroSection = ({ data }: HeroSectionProps) => {
	// const t = useTranslations("Homepage");
	const locale = useLocale();
	const imgRef = useRef<HTMLDivElement>(null);
	// console.log("DATA", data);
	useParallax(imgRef, 15, "30%");

	const heroTitle = data?.[`title_${locale}` as keyof HeroWithUrls] as
		| string
		| undefined;

	if (!data?.imageUrl) {
		return (
			<section className="h-screen bg-slate-900 flex items-center justify-center text-white">
				Loading...
			</section>
		);
	}

	if (!data) return null;
	return (
		<section className="relative h-screen w-full overflow-x-clip">
			<div
				className="w-full h-screen flex flex-col justify-end
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
					{/* <TextEffectBlur> */}
					<h1
						className="tracking-tighter font-header font-bold leading-[80%] 
            text-center text-[54px]
            sm:text-[80px] 
            md:text-[100px]
            lg:text-left
            "
					>
						{heroTitle}
					</h1>
					{/* </TextEffectBlur> */}
					<div>
						<Button title="Connect" primary={true}>
							<MessagesSquare size={20} />
						</Button>
					</div>
				</div>
			</div>
			<div className="absolute top-0  z-[-1] overflow-hidden w-full h-full sm:flex ">
				<div ref={imgRef} className="relative w-full h-full ">
					{data.imageUrl && (
						<img
							src={data.imageUrl}
							alt=""
							className="absolute inset-0 w-full h-full object-cover object-right scale-110 "
						/>
					)}
				</div>
			</div>
		</section>
	);
};
