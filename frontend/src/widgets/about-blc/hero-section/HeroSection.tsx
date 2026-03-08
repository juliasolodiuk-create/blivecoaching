"use client";

import { ChevronRight } from "lucide-react";
import { useLocale } from "next-intl";
import { useRef } from "react";
import type {
	HeroContentData,
	HeroData,
} from "@/entities/about-blc/model/about-blc.types";
import { useSvgDraw } from "@/shared/hooks/useSvgDraw";
import { getLocalizedContent } from "@/shared/lib/getLocalizedContent";
import ButtonShow from "@/shared/ui/animations/ButtonShow";
import { Button } from "@/shared/ui/components/buttons/Button/Button";
import { SectionTitle } from "@/shared/ui/components/titles/SectionTitle/SectionTitle";

interface HeroSectionProps {
	data: HeroData;
}

export const HeroSection = ({ data }: HeroSectionProps) => {
	const sectionRef = useRef<HTMLDivElement>(null);
	const { setContainerRef } = useSvgDraw({
		url: "/assets/line-2.svg",
		scope: sectionRef,
	});
	const locale = useLocale();
	const content = getLocalizedContent<HeroData, HeroContentData>(
		data,
		"content",
		locale,
	);
	return (
		<section
			ref={sectionRef}
			id="how"
			className="relative h-full bg-[#E7EBFA] w-screen  p-4 md:p-16 text-[#242424] overflow-clip"
		>
			<div
				ref={setContainerRef}
				className="absolute inset-0 flex items-center justify-center min-w-360 w-screen opacity-50"
			></div>
			<div className="flex gap-8 text-[#242424] flex-col justify-center  pt-37 pb-28 max-w-150">
				<SectionTitle title={content?.title} />

				<ButtonShow>
					<Button
						title={content?.link}
						secondary={true}
						width="max-w-90"
						link="#guide"
					>
						<div className="rotate-90">
							<ChevronRight size={20} />
						</div>
					</Button>
				</ButtonShow>
			</div>
		</section>
	);
};
