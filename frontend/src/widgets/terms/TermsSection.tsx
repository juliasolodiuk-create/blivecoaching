import { useLocale } from "next-intl";
import { type PolicyType, termsData } from "@/shared/data";
import { getLocalizedContent } from "@/shared/lib/getLocalizedContent";
import { SectionTitle } from "@/shared/ui/components/titles/SectionTitle/SectionTitle";

export const TermsSection = () => {
	const locale = useLocale();

	const data = getLocalizedContent<typeof termsData, PolicyType>(
		termsData,
		"content",
		locale,
	);

	if (!data) return null;

	return (
		<section className="bg-[#E7EBFA] w-full pb-20">
			<div
				className="flex flex-col items-center justify-center m-auto
        px-4 pt-29 
        sm:px-10
        lg:px-16"
			>
				<SectionTitle
					title={data.title}
					className="items-center text-center sm:text-left sm:items-start"
				/>
			</div>
			<div className="max-w-200 mx-auto">
				<div
					className="px-4 flex flex-col gap-8
        sm:px-10
        lg:px-16 lg:py-8"
				>
					<div className="flex flex-col gap-4">
						<p className="font-semibold text-gray-700">
							Last updated: {data.lastUpdated}
						</p>
						{data.introduction?.map((text, idx) => (
							<p key={text.slice(0, 20)} className="text-gray-800">
								{text}
							</p>
						))}
					</div>

					<div className="flex flex-col gap-10">
						{data.sections.map((section) => (
							<div key={section.id} className="flex flex-col gap-3">
								<h3 className="text-xl font-bold text-gray-800">
									{section.title}
								</h3>

								{section.content?.map((p, idx) => (
									<p key={`${section.id}-p-${idx}`} className="text-gray-800">
										{p}
									</p>
								))}

								{section.list && (
									<ul className="list-disc pl-5 flex flex-col gap-2">
										{section.list.map((item, idx) => (
											<li
												key={`${section.id}-li-${idx}`}
												className="text-gray-800"
											>
												{item}
											</li>
										))}
									</ul>
								)}
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};
