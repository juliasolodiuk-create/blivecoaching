"use client";

import { ChevronRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useRef } from "react";
import { useSvgDraw } from "@/shared/hooks/useSvgDraw";
import ButtonShow from "@/shared/ui/animations/ButtonShow";
import { Button } from "@/shared/ui/components/buttons/Button/Button";
import { SectionTitle } from "@/shared/ui/components/titles/SectionTitle/SectionTitle";

export const HeroSection = () => {
	const sectionRef = useRef<HTMLDivElement>(null);
	const { setContainerRef } = useSvgDraw({
		url: "/assets/line-2.svg",
		scope: sectionRef,
	});

	const t = useTranslations("howToChooseCoach");
	const _locale = useLocale();
	return (
		<section
			ref={sectionRef}
			id="how"
			className="relative h-full bg-[#E7EBFA] w-screen  p-4 md:p-16 text-[#242424] overflow-clip"
		>
			<div
				ref={setContainerRef}
				className="absolute rotate-160 inset-0 flex items-center justify-center min-w-360 w-screen opacity-50"
			></div>
			<div className="flex gap-8 text-[#242424] flex-col justify-center items-center py-47">
				<SectionTitle title={t("title")} className="items-center text-center" />

				<ButtonShow>
					<Button
						title={t("link")}
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
