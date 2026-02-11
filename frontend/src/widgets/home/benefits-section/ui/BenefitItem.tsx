import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLocale } from "next-intl";
import { useRef } from "react";
import TextEffect from "@/shared/ui/animations/TextEffect";
// import type dataJson from "../../../../db/data.json";
import type { Content } from "../../../../../lib/types/base.types";
import type { BenefitWithUrls } from "../../../../entities/home/model/home.types";

// type BenefitItemData = typeof dataJson.benefits.benefit_one;

interface PositionProps {
	bottom?: string;
	right?: string;
	top?: string;
	left?: string;
}

interface BenefitItemProps {
	data?: BenefitWithUrls["items"][number];
	position?: PositionProps;
}

export const BenefitItem = ({
	data,
	position = { bottom: "0", right: "0", top: "0", left: "0" },
}: BenefitItemProps) => {
	const boxRef = useRef<HTMLDivElement>(null);
	const textRef = useRef<HTMLParagraphElement>(null); // Реф для параграфа
	const mainTextRef = useRef<HTMLHeadingElement>(null); // Реф для параграфа
	const locale = useLocale();

	useGSAP(
		() => {
			// Создаем таймлайн, привязанный к скроллу
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: boxRef.current,
					start: "top 50%",
					end: "bottom 40%",
					toggleActions: "play reverse play reverse",
					// markers: true, // Включите для отладки
				},
			});

			// 1. Анимируем фон карточки
			tl.to(
				boxRef.current,
				{
					backgroundColor: "#E7EBFA",
					duration: 0.4,
					ease: "power2.inOut",
				},
				0,
			); // 0 значит запустить в начале таймлайна

			// 2. Анимируем исчезновение текста
			tl.from(
				textRef.current,
				{
					opacity: 0,
					height: 0,

					duration: 0.5,
					ease: "power2.inOut",
					delay: 0.1,
				},
				0,
			); // Запускаем одновременно с фоном
		},
		{ scope: boxRef },
	);

	// console.log("DATA", data);

	const benefitContent = data?.[
		`benefit_content_${locale}` as keyof BenefitWithUrls["items"][number]
	] as Content | undefined;
	return (
		<div
			ref={boxRef}
			className="p-4 text-[#242424] font-montserrat bg-[#FFFFFF] max-w-133 rounded-xl border-[0.3px] border-[#E7EBFA]"
		>
			<div className="flex flex-col gap-2">
				<TextEffect>
					<h6 ref={mainTextRef} className="font-semibold text-[20px] ">
						{benefitContent?.title}
					</h6>
				</TextEffect>
				<TextEffect>
					<p ref={textRef} className="text-[18px]">
						{benefitContent?.desc}
					</p>
				</TextEffect>
			</div>
		</div>
	);
};
