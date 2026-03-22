"use client";

import { useLocale } from "next-intl";
import { parseAsString, useQueryState } from "nuqs";
import type { PlanContent, Plans } from "@/entities/home/model/home.types";
import { getLocalizedContent } from "@/shared/lib/getLocalizedContent";
import DivEffect from "@/shared/ui/animations/DivEffects";
import { SubTitle } from "@/shared/ui/components/titles/SubTitle/SubTitle";
import { Modal } from "./ui/Modal";
import { PlanCard } from "./ui/PlanCard";

interface PlansProps {
	data: Plans[];
}

export const PlanSection = ({ data }: PlansProps) => {
	const [plan, setPlan] = useQueryState("plan", parseAsString);

	const locale = useLocale();

	return (
		<section id="plans" className="h-full p-4 md:p-16 text-[#242424]">
			<div className="mb-16">
				<SubTitle title="Choose your Plan" />
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 ">
				{data.map((item, index) => {
					if (item.isNonActive) return null;
					const content = getLocalizedContent<Plans, PlanContent>(
						item,
						"content",
						locale,
					);
					const rotateValue = ((index * 13) % 21) - 10;

					return (
						// biome-ignore lint/suspicious/noArrayIndexKey: <пояснення, чому тут index>
						<DivEffect key={index} rotate={rotateValue}>
							<PlanCard
								isMostPopular={item.isMostPopular}
								title={item.title}
								description={content?.description}
								onSubscribe={() => setPlan(item.title ?? null)}
							/>
						</DivEffect>
					);
				})}
			</div>
			<Modal key={plan || "closed"} />
		</section>
	);
};
