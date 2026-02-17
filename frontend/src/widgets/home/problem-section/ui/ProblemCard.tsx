import { useLocale } from "next-intl";
import DrawAnimation from "@/shared/ui/animations/DrawAnimation";
import { TextBlock } from "@/widgets/home/problem-section/ui/TextBlock";
import type { Content } from "../../../../../lib/types/base.types";
import type { ProblemWithUrls } from "../../../../entities/home/model/home.types";

interface ProblemItemProps {
	data?: ProblemWithUrls["items"][number];
}

export const ProblemItems = ({ data }: ProblemItemProps) => {
	const locale = useLocale();
	const problemContent = data?.[
		`problem_content_${locale}` as keyof ProblemWithUrls["items"][number]
	] as Content | undefined;
	const solutionContent = data?.[
		`solution_content_${locale}` as keyof ProblemWithUrls["items"][number]
	] as Content | undefined;
	return (
		<div
			className={`p-2 flex flex-col w-full max-w-125 rounded-lg gap-4 justify-between h-full  mx-auto bg-[#F5F7FF]`}
		>
			<div className="font-montserrat gap-5 flex flex-col items-center  text-center">
				<div className=" flex items-center overflow-clip rounded-sm">
					{data?.imageUrl && (
						<img
							src={data?.imageUrl}
							alt=""
							className=" inset-0 w-full h-full object-cover object-right scale-110 "
						/>
					)}
				</div>

				<TextBlock
					title={problemContent?.title}
					description={problemContent?.desc}
					animation
				/>
			</div>
			<div className="font-montserrat gap-6 flex flex-col items-center  text-center min-h-60 ">
				<DrawAnimation>
					<svg
						role="img"
						viewBox="0 0 399.05 733.13"
						xmlns="http://www.w3.org/2000/svg"
						className="h-20 w-full fill-none stroke-[#D3C3E0] stroke-[40px] "
					>
						<title>Arrow decoration</title>
						<path d={data?.arrowIcon?.svgPath} />
					</svg>
				</DrawAnimation>

				<TextBlock
					title={solutionContent?.title}
					description={solutionContent?.desc}
					animation
				/>
			</div>
		</div>
	);
};
