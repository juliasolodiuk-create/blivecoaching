import { parseAsString, useQueryStates } from "nuqs";

import { MenuButton } from "@/shared/ui/components/buttons/MenuButton/MenuButton";

interface PlanCardProps {
	title?: string;
	description?: string[];
	onSubscribe: () => void;
	isMostPopular: boolean;
}

export const PlanCard = ({
	title,
	onSubscribe,
	description,
	isMostPopular = false,
}: PlanCardProps) => {
	const [_, setQueries] = useQueryStates({
		plan: parseAsString,
		modal: parseAsString,
	});

	return (
		<div
			className={`relative text-[#242424] rounded-xl w-full min-h-70 h-full flex flex-col 
            ${isMostPopular ? "bg-[#D3C3E0]" : "bg-[#f7f8fe] overflow-clip"} 
            `}
		>
			{isMostPopular && (
				<div className="absolute -top-10 right-5 bg-[#D3C3E0] px-4 py-3 rounded-2xl border-[1.5px] border-white">
					<p className="text-[18px] font-semibold">Most popular</p>
				</div>
			)}

			{!isMostPopular && (
				<div className="absolut top-0 left-0 scale-150 opacity-10 ">
					<img
						src="/assets/line-card.svg"
						alt="decoration"
						className="absolute top-0 right-0 "
					/>
				</div>
			)}

			<div className="p-4 min-h-20">
				<h5 className="font-bold text-[24px] md:text-[28px]">{title}</h5>
			</div>

			<div
				className={`border-2  border-white  rounded-xl p-4 h-full flex flex-col justify-between`}
			>
				<div>
					{description?.map((item, index) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: <пояснення, чому тут index>
						<p key={index} className="text-[16px] md:text-[18px] font-medium">
							- {item}
						</p>
					))}
				</div>

				<div className="flex justify-center w-full">
					<MenuButton
						title="Choose this plan"
						onClick={() => {
							setQueries({ plan: title, modal: "open" });
						}}
					/>
				</div>
			</div>
		</div>
	);
};
