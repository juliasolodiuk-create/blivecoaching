import { useLocale, useTranslations } from "next-intl";

export const FormSection = () => {
	const t = useTranslations("signUpSession");
	const locale = useLocale();

	return (
		<section className=" p-4 md:px-16 z-1 bg-white w-screen">
			<div className="flex w-full gap-8 text-[#242424] flex-col justify-center items-center p-4 md:px-16 md:py-16 rounded-xl">
				<h5 className="text-[18px] font-body font-bold">{t("title")}</h5>
				<div className="flex  gap-4 text-[#242424] flex-col items-center">
					<div className="flex justify-between items-center gap-4 w-full md:min-w-150 flex-col sm:flex-row">
						<div className="border-[#D3C3E0] border-2 w-full p-4 text-[16px] max-h-10.5 flex justify-between items-center rounded-lg text-black/60">
							{t("placeholder")}
						</div>
						<div>
							<div className="max-h-11.5 min-w-22.5 w-full bg-[#D3C3E0] font-semibold text-[16px] flex items-center justify-center px-4 py-2 rounded-lg">
								{t("button")}
							</div>
						</div>
					</div>
					<p className="text-[12px] text-center">{t("description")}</p>
				</div>
			</div>
		</section>
	);
};
