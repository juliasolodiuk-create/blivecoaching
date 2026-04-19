"use client";

import { useLocale } from "next-intl";
import { parseAsString, useQueryState } from "nuqs";
import type { PlanContent, Plans } from "@/entities/home/model/home.types";
import { getLocalizedContent } from "@/shared/lib/getLocalizedContent";
import DivEffect from "@/shared/ui/animations/DivEffects";
import { Modal } from "./Modal";
import { PlanCard } from "./PlanCard";

export const PlanList = ({ data }: { data: Plans[] }) => {
	const [plan, setPlan] = useQueryState("plan", parseAsString);
	const locale = useLocale();

	return (
		<>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
				{data.map((item, index) => {
					if (item.isNonActive) return null;

					const content = getLocalizedContent<Plans, PlanContent>(
						item,
						"content",
						locale,
					);
					const rotateValue = ((index * 13) % 21) - 10;

					return (
						<DivEffect key={item.title || index} rotate={rotateValue}>
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
		</>
	);
};
