import { useLocale } from "next-intl";
import { cookieData, type PolicyType } from "@/shared/data";
import { getLocalizedContent } from "@/shared/lib/getLocalizedContent";
import { SectionTitle } from "@/shared/ui/components/titles/SectionTitle/SectionTitle";

export const CookieSection = () => {
	const locale = useLocale();

	const data = getLocalizedContent<typeof cookieData, PolicyType>(
		cookieData,
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
					className="px-4 flex flex-col gap-6
                sm:px-10
                lg:px-16 lg:py-8"
				>
					<p className="font-semibold text-gray-700">
						Last updated: {data.lastUpdated}
					</p>

					{data.sections.map((section) => (
						<div key={section.id} className="flex flex-col gap-4">
							{section.content.map((text, idx) => (
								<p
									key={`${section.id}-p-${idx}`}
									className="leading-relaxed text-gray-800"
								>
									{text}
								</p>
							))}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
