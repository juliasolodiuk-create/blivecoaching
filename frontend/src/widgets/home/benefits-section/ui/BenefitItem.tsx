import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { X } from "lucide-react";
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
	isActive: boolean; // Проп активности
	onToggle: () => void; // Функция переключения
}

export const BenefitItem = ({
	data,
	position = { bottom: "0", right: "0", top: "0", left: "0" },
	isActive,
	onToggle,
}: BenefitItemProps) => {
	const boxRef = useRef<HTMLButtonElement>(null);
	const textRef = useRef<HTMLParagraphElement>(null); // Реф для параграфа
	const mainTextRef = useRef<HTMLHeadingElement>(null); // Реф для параграфа
	const locale = useLocale();
	const iconRef = useRef<HTMLDivElement>(null);

	// useGSAP(
	// 	() => {
	// 		// Создаем таймлайн, привязанный к скроллу
	// 		const tl = gsap.timeline({
	// 			scrollTrigger: {
	// 				trigger: boxRef.current,
	// 				start: "top 50%",
	// 				end: "bottom 40%",
	// 				toggleActions: "play reverse play reverse",
	// 				// markers: true, // Включите для отладки
	// 			},
	// 		});

	// 		// 1. Анимируем фон карточки
	// 		tl.to(
	// 			boxRef.current,
	// 			{
	// 				backgroundColor: "#E7EBFA",
	// 				duration: 0.4,
	// 				ease: "power2.inOut",
	// 			},
	// 			0,
	// 		); // 0 значит запустить в начале таймлайна

	// 		// 2. Анимируем исчезновение текста
	// 		tl.from(
	// 			textRef.current,
	// 			{
	// 				opacity: 0,
	// 				height: 0,

	// 				duration: 0.5,
	// 				ease: "power2.inOut",
	// 				delay: 0.1,
	// 			},
	// 			0,
	// 		); // Запускаем одновременно с фоном
	// 	},
	// 	{ scope: boxRef },
	// );

	useGSAP(() => {
		if (isActive) {
			// Анимация ОТКРЫТИЯ
			gsap.to(boxRef.current, {
				backgroundColor: "#E7EBFA",
				duration: 0.4,
				ease: "power2.out",
			});
			gsap.to(textRef.current, {
				height: "auto",
				opacity: 1,
				marginTop: 8,
				duration: 0.5,
				ease: "power2.out",
			});
			gsap.to(mainTextRef.current, {
				duration: 0.4,
				fontSize: "20",

				ease: "power2.out",
			});
			gsap.to(iconRef.current, {
				opacity: 0,
				duration: 0.4,

				ease: "power2.out",
			});
		} else {
			// Анимация ЗАКРЫТИЯ
			gsap.to(boxRef.current, {
				backgroundColor: "#FFFFFF",
				duration: 0.4,
				ease: "power2.inOut",
			});
			gsap.to(textRef.current, {
				height: 0,
				opacity: 0,
				marginTop: 0,
				duration: 0.4,
				ease: "power2.inOut",
			});

			gsap.to(mainTextRef.current, {
				duration: 0.4,
				fontSize: "18",

				ease: "power2.out",
			});
			gsap.to(iconRef.current, {
				opacity: 1, // Иконка наклонена (как плюс)
				duration: 0.4,
				ease: "power2.out",
			});
		}
	}, [isActive]); // Перезапускать при изменении isActive

	// console.log("DATA", data);

	const benefitContent = data?.[
		`benefit_content_${locale}` as keyof BenefitWithUrls["items"][number]
	] as Content | undefined;
	return (
		<button
			ref={boxRef}
			type="button" // Обязательно для кнопок в формах (и просто хорошая практика)
			onClick={onToggle}
			// Стили: убираем дефолтные стили кнопки (text-left, и т.д.)
			className="w-full text-left p-4 text-[#242424] font-montserrat bg-[#FFFFFF] max-w-133 rounded-xl border-[0.3px] border-[#E7EBFA] cursor-pointer overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-[#D3C3E0] block"
		>
			<span className="flex flex-col w-full">
				<span className="flex justify-between items-center gap-4 w-full">
					<h6 ref={mainTextRef} className="font-semibold ">
						{benefitContent?.title}
					</h6>
					<span
						ref={iconRef}
						className="text-2xl flex items-center justify-center shrink-0 rotate-45"
					>
						<X size={24} />
					</span>
				</span>

				<span
					ref={textRef}
					className="text-[18px] overflow-hidden block text-left"
					style={{ height: 0, opacity: 0 }}
				>
					{benefitContent?.desc}
				</span>
			</span>
		</button>
	);
};
