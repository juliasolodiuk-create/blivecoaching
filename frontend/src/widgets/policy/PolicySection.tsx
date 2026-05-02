import { useLocale } from "next-intl";
import { type PolicyType, privacyData } from "@/shared/data";
import { getLocalizedContent } from "@/shared/lib/getLocalizedContent";
import { SectionTitle } from "@/shared/ui/components/titles/SectionTitle/SectionTitle";

export const PolicySection = () => {
	const locale = useLocale();

	const data = getLocalizedContent<typeof privacyData, PolicyType>(
		privacyData,
		"content",
		locale,
	);

	if (!data) return null;

	return (
		<section className="bg-[#E7EBFA] w-full pb-20">
			{/* Заголовок */}
			<div
				className="flex flex-col items-center justify-center m-auto
        px-4 pt-29 
        sm:px-10
        lg:px-16
		py-10"
			>
				<SectionTitle
					title={data.title}
					className=" items-center text-center sm:text-left sm:items-start"
				/>
			</div>
			<div className="max-w-200 mx-auto flex flex-col gap-10">
				<div
					className="px-4 flex flex-col gap-4
        sm:px-10
        lg:px-16 lg:py-8"
				>
					<p className="font-semibold">Last updated: {data.lastUpdated}</p>
					{data.introduction?.map((text: string, idx: number) => (
						<p key={text.slice(0, 20)}>{text}</p>
					))}
				</div>

				<div
					className="px-4 flex flex-col gap-10
        sm:px-10
        lg:px-16"
				>
					{data.sections.map((section) => (
						<div key={section.id} className="flex flex-col gap-3">
							<h3 className="text-xl font-bold text-gray-800">
								{section.title}
							</h3>

							{section.content.map((p, idx) => (
								<p key={`content-${section.id}-${idx}`}>{p}</p>
							))}

							{section.list && (
								<ul className="list-disc pl-5 flex flex-col gap-2">
									{section.list.map((item, idx) => (
										<li key={`list-${section.id}-${idx}`}>{item}</li>
									))}
								</ul>
							)}

							{section.subTitle && (
								<h4 className="font-semibold mt-2">{section.subTitle}</h4>
							)}

							{section.subList && (
								<ul className="list-disc pl-5 flex flex-col gap-2">
									{section.subList.map((item, idx) => (
										<li key={`list-${section.id}-${idx}`}>{item}</li>
									))}
								</ul>
							)}

							{section.footer && (
								<p className="italic text-sm text-gray-600 mt-2">
									{section.footer}
								</p>
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
