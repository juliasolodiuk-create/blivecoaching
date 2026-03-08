import Image from "next/image";
import { useLocale } from "next-intl";
import { useRef } from "react";
import { useDrawArrow } from "@/shared/hooks/useDrawArrow";
import { getLocalizedContent } from "@/shared/lib/getLocalizedContent";
import type { Content } from "@/shared/lib/types/base.types";
import type { ProblemWithUrls } from "../../../../entities/home/model/home.types";
import { TextBlock } from "./";

type ProblemItem = ProblemWithUrls["items"][number];

interface ProblemItemProps {
	data?: ProblemWithUrls["items"][number];
}

export const ProblemCard = ({ data }: ProblemItemProps) => {
	const cardRef = useRef<HTMLDivElement>(null);
	const locale = useLocale();

	const problemContent = getLocalizedContent<ProblemItem, Content>(
		data,
		"problem_content",
		locale,
	);
	const solutionContent = getLocalizedContent<ProblemItem, Content>(
		data,
		"solution_content",
		locale,
	);

	useDrawArrow({
		scope: cardRef,
		selector: "path",
		duration: 1.5,
		start: "top 85%",
	});
	return (
		<div
			className={`p-2 flex flex-col w-full max-w-125 rounded-lg gap-4 justify-between h-full  mx-auto bg-[#F5F7FF]`}
		>
			<div className="font-montserrat gap-5 flex flex-col items-center  text-center">
				<div className="relative flex items-center overflow-clip rounded-sm w-full h-64">
					{data?.imageUrl && (
						<Image
							src={data?.imageUrl}
							alt=""
							unoptimized
							fill
							className="object-cover "
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						/>
					)}
				</div>

				<TextBlock
					title={problemContent?.title}
					description={problemContent?.desc}
					animation
				/>
			</div>
			<div
				ref={cardRef}
				className="font-montserrat gap-6 flex flex-col items-center  text-center min-h-60 "
			>
				<svg
					role="img"
					viewBox="0 0 399.05 733.13"
					xmlns="http://www.w3.org/2000/svg"
					className="h-20 w-full fill-none stroke-[#D3C3E0] stroke-[40px] "
				>
					<title>Arrow decoration</title>
					<path d={data?.arrowIcon?.svgPath} />
				</svg>

				<TextBlock
					title={solutionContent?.title}
					description={solutionContent?.desc}
					animation
				/>
			</div>
		</div>
	);
};
