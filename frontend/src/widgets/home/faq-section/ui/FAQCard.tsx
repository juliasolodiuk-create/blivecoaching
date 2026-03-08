"use client";

import { X } from "lucide-react";
import { useLocale } from "next-intl";
import { useAccordion } from "@/shared/hooks/useAccordian";
import { getLocalizedContent } from "@/shared/lib/getLocalizedContent";
import type {
	FAQContentData,
	FAQData,
} from "../../../../entities/home/model/home.types";

interface FAQCardProps {
	data?: FAQData;
}

export const FAQCard = ({ data }: FAQCardProps) => {
	const locale = useLocale();

	const { isOpen, toggle, contentRef, height } = useAccordion();

	const content = getLocalizedContent<FAQData, FAQContentData>(
		data,
		"question",
		locale,
	);

	if (!content) return null;
	return (
		<div className="flex flex-col max-x-200 items-center border-[0.5px] py-2 sm:p-4 mx-auto rounded-xl border-[#938FAC]">
			<button
				type="button"
				className="px-4 md:px-0 w-full cursor-pointer bg-transparent border-none text-left focus:outline-none"
				onClick={toggle}
				aria-expanded={isOpen}
			>
				<div className="flex justify-between items-center w-full">
					<h3 className="font-body block text-[16px] font-semibold w-full">
						{content?.question}
					</h3>
					<div
						className={`open-cursor text-4xl transform transition-transform duration-300  ${
							isOpen ? "rotate-0" : "rotate-45"
						}`}
					>
						<X />
					</div>
				</div>
			</button>

			<div
				ref={contentRef}
				style={{ maxHeight: isOpen ? `${height}px` : "0px" }}
				className="overflow-hidden transition-max-height duration-500 ease-in-out  px-[16px] md:px-0 w-full"
			>
				<p className="font-montserrat block my-2 text-[16px] w-full">
					{content?.answer}
				</p>
			</div>
		</div>
	);
};
