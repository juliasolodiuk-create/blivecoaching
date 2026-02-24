import type { Content } from "@/shared/lib/types/base.types";
import type { ProblemWithUrls } from "../model/home.types";

type ProblemItem = ProblemWithUrls["items"][number];

export const getProblemContent = (
	data: ProblemItem | null | undefined,
	locale: string,
): Content | undefined => {
	if (!data) return undefined;
	const contentKey = `problem_content_${locale}` as keyof ProblemItem;
	return data[contentKey] as Content | undefined;
};

export const getSolutionContent = (
	data: ProblemItem | null | undefined,
	locale: string,
): Content | undefined => {
	if (!data) return undefined;
	const contentKey = `solution_content_${locale}` as keyof ProblemItem;
	return data[contentKey] as Content | undefined;
};
