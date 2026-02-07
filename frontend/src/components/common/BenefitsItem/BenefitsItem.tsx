import Image from "next/image";
import { useLocale } from "next-intl";
import BlurAnimation from "@/components/animations/BlurAnimation";
import TextEffect from "@/components/animations/TextEffect";
import type dataJson from "../../../db/data.json";
import type { Content } from "../../../lib/types/base.types";
import type { BenefitWithUrls } from "../../../lib/types/home.types";

type BenefitItemData = typeof dataJson.benefits.benefit_one;

interface PositionProps {
	bottom?: string;
	right?: string;
	top?: string;
	left?: string;
}

interface BenefitsItemProps {
	data?: BenefitWithUrls["items"][number];
	position?: PositionProps;
}

export const BenefitsItem = ({
	data,
	position = { bottom: "0", right: "0", top: "0", left: "0" },
}: BenefitsItemProps) => {
	const locale = useLocale();
	// console.log("DATA", data);

	const benefitContent = data?.[
		`benefit_content_${locale}` as keyof BenefitWithUrls["items"][number]
	] as Content | undefined;
	return (
		<div className=" relative text-[#242424] font-montserrat h-full text-center ">
			<BlurAnimation>
				<div className="absolute inset-0 z-0 pointer-events-none">
					{data?.imageUrl && (
						<Image
							src={data?.imageUrl}
							alt="background deco"
							width={300}
							height={300}
							style={{
								height: "auto",
								position: "absolute",
								top: position.top,
								left: position.left,
								right: position.right,
								bottom: position.bottom,
								opacity: 0.2,
								transformOrigin: "center center",
							}}
						/>
					)}
				</div>
			</BlurAnimation>
			<div className="flex flex-col gap-5">
				<TextEffect>
					<h6 className="font-bold">{benefitContent?.title}</h6>
				</TextEffect>
				<TextEffect>
					<p>{benefitContent?.desc}</p>
				</TextEffect>
			</div>
		</div>
	);
};
