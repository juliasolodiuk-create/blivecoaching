import { useTranslations } from "next-intl";
import type { Plans } from "@/entities/home/model/home.types";
import { SubTitle } from "@/shared/ui/components/titles/SubTitle/SubTitle";
import { PlanList } from "./ui/PlanList";

interface PlansProps {
	data: Plans[];
}

export const PlanSection = ({ data }: PlansProps) => {
	const t = useTranslations("plan");
	return (
		<section id="plans" className="h-full p-4 md:p-16 text-[#242424]">
			<div className="mb-16">
				<SubTitle title={t("title")} />
			</div>

			<PlanList data={data} />
		</section>
	);
};
