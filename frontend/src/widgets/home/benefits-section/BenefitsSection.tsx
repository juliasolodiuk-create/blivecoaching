"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ChevronRight } from "lucide-react";
import { useLocale } from "next-intl";
import { useMemo, useRef, useState } from "react";
import { useSvgDraw } from "@/shared/hooks/animation/useSvgDraw";
import useParallax from "@/shared/lib/hooks/useParallax";
import ButtonShow from "@/shared/ui/animations/ButtonShow";
import DivEffect from "@/shared/ui/animations/DivEffects";
import { Button } from "@/shared/ui/components/buttons/Button/Button";
import { ImageContainer } from "@/shared/ui/components/images/ImageContainer/ImageContainer";
import type { SharedLink } from "../../../../lib/types/base.types";
import type { BenefitWithUrls } from "../../../entities/home/model/home.types";
import { BenefitItem } from "./ui/BenefitItem";

gsap.registerPlugin(ScrollTrigger);

interface BenefitsSectionProps {
	data?: BenefitWithUrls;
}

export const BenefitsSection = ({ data }: BenefitsSectionProps) => {
	const imgRef = useRef<HTMLDivElement>(null);
	const sectionRef = useRef<HTMLDivElement>(null);
	const locale = useLocale();

	useParallax(imgRef, 15, "30%");

	const [activeIndex, setActiveIndex] = useState<number | null>(0);

	const { setContainerRef } = useSvgDraw({
		url: "/assets/line-2.svg",
		scope: sectionRef,
	});

	const buttonTitle = useMemo(
		() =>
			data?.sharedLink?.[`title_${locale}` as keyof SharedLink] ||
			"Discover more",
		[data, locale],
	);

	return (
		<section
			ref={sectionRef}
			id="benefits"
			className="relative min-h-screen p-16 bg-white "
		>
			<div
				ref={setContainerRef}
				className="absolute inset-0 flex items-center justify-center w-screen opacity-20"
			></div>

			<div className="flex flex-col lg:flex-row items-start gap-10 z-1">
				<div className="w-full lg:w-161 lg:sticky lg:top-16 hidden lg:block">
					{data?.imageSelected.imageUrl && (
						<ImageContainer
							objectPosition="object-center"
							rounded="rounded-xl"
							ref={imgRef}
							alt="Benefits Picture"
							image={data.imageSelected.imageUrl}
						/>
					)}
				</div>

				<div className=" flex flex-col gap-8 justify-between items-center lg:items-start w-full lg:w-3/5 z-1 ">
					<div className="flex flex-col gap-8 md:gap-6">
						{data?.items?.map((item, index) => (
							// biome-ignore lint/suspicious/noArrayIndexKey: <пояснення, чому тут index>
							<DivEffect key={index}>
								<BenefitItem
									data={item}
									isActive={activeIndex === index}
									onToggle={() =>
										setActiveIndex(activeIndex === index ? null : index)
									}
								/>
							</DivEffect>
						))}
					</div>
					<div className="pt-4">
						<ButtonShow>
							<Button
								title={buttonTitle}
								secondary={true}
								border={true}
								width="w-90"
								link="/about-be-live-coach"
							>
								<ChevronRight size={20} />
							</Button>
						</ButtonShow>
					</div>
				</div>
			</div>
		</section>
	);
};
