import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { X } from "lucide-react";
import { useLocale } from "next-intl";
import { useRef } from "react";
import type { BenefitWithUrls } from "../../../../entities/home/model/home.types";
import type { Content } from "../../../../shared/lib/types/base.types";

interface PositionProps {
	bottom?: string;
	right?: string;
	top?: string;
	left?: string;
}

interface BenefitItemProps {
	data?: BenefitWithUrls["items"][number];
	position?: PositionProps;
	isActive: boolean;
	onToggle: () => void;
}

export const BenefitItem = ({ data, isActive, onToggle }: BenefitItemProps) => {
	const boxRef = useRef<HTMLButtonElement>(null);
	const textRef = useRef<HTMLParagraphElement>(null);
	const mainTextRef = useRef<HTMLHeadingElement>(null);
	const locale = useLocale();
	const iconRef = useRef<HTMLDivElement>(null);

	useGSAP(() => {
		if (isActive) {
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
				opacity: 1,
				duration: 0.4,
				ease: "power2.out",
			});
		}
	}, [isActive]);

	const benefitContent = data?.[
		`benefit_content_${locale}` as keyof BenefitWithUrls["items"][number]
	] as Content | undefined;
	return (
		<button
			ref={boxRef}
			type="button"
			onClick={onToggle}
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
