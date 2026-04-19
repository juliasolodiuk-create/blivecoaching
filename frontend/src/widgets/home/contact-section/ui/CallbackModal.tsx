"use client";

import { useTranslations } from "next-intl";
import { parseAsString, useQueryState } from "nuqs";
import { useActionState, useCallback, useEffect } from "react";
import { SubmitCallbackForm } from "@/features/submit-callback/SubmitCallback";
import { MenuButton } from "@/shared/ui/components/buttons/MenuButton/MenuButton";

export const CallbackModal = () => {
	const t = useTranslations("callbackModal");
	const [contact, setContact] = useQueryState("contact", parseAsString);

	const [state, formAction, isPending] = useActionState(
		SubmitCallbackForm,
		null,
	);

	const isOpen = contact === "open";

	const handleClose = useCallback(() => {
		setContact(null, { shallow: true, history: "replace" });
	}, [setContact]);

	useEffect(() => {
		if (state?.success) {
			const timer = setTimeout(() => {
				handleClose();
			}, 2000);
			return () => clearTimeout(timer);
		}
	}, [state?.success, handleClose]);

	useEffect(() => {
		const handleEsc = (e: KeyboardEvent) => {
			if (e.key === "Escape") handleClose();
		};

		if (isOpen) {
			document.body.style.overflow = "hidden";
			window.addEventListener("keydown", handleEsc);
		}

		return () => {
			document.body.style.overflow = "unset";
			window.removeEventListener("keydown", handleEsc);
		};
	}, [isOpen, handleClose]);

	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
			<button
				type="button"
				className="absolute inset-0 w-full h-full bg-black/50 backdrop-blur-sm cursor-default"
				onClick={handleClose}
			/>
			<div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-8 relative border-2 border-[#D3C3E0]">
				<button
					type="button"
					className="absolute top-2 right-5 text-5xl text-gray-400 hover:text-black transition-colors cursor-pointer"
					onClick={handleClose}
				>
					&times;
				</button>

				{state?.success ? (
					<div className="text-center py-10">
						<div className="text-5xl mb-4">✅</div>
						<h3 className="text-2xl font-bold text-[#242424]">
							{t("success")}
						</h3>
						<p className="text-gray-500 mt-2">{t("subSuccess")}</p>
					</div>
				) : (
					<div className="text-center">
						<h3 className="text-xl font-bold text-[#242424] mb-2">
							{t("title")}
						</h3>
						<p className="text-gray-500 mb-6">{t("subTitle")}</p>

						<form
							action={formAction}
							className="space-y-4 flex flex-col items-center"
						>
							<input
								name="fullName"
								required
								placeholder={t("fullName")}
								className="w-full p-4 bg-gray-50 border rounded-xl"
							/>
							<input
								name="email"
								type="email"
								required
								placeholder={t("email")}
								className="w-full p-4 bg-gray-50 border rounded-xl"
							/>
							<textarea
								name="message"
								required
								rows={4}
								placeholder={t("message")}
								className="w-full p-4 bg-gray-50 border rounded-xl outline-none focus:border-primary resize-none"
							/>

							<div>
								<MenuButton
									title={isPending ? t("pendingButton") : t("button")}
									type="submit"
									disabled={isPending}
								/>
							</div>
						</form>
					</div>
				)}
			</div>
		</div>
	);
};
