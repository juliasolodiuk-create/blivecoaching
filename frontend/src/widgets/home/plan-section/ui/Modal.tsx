"use client";

import { parseAsString, useQueryState, useQueryStates } from "nuqs";
import { useActionState, useCallback, useEffect } from "react";
import { SubmitApplication } from "@/features/submit-application/SubmitApplication";
import { MenuButton } from "@/shared/ui/components/buttons/MenuButton/MenuButton";

export const Modal = () => {
	const [{ plan, modal }, setQueries] = useQueryStates({
		plan: parseAsString,
		modal: parseAsString,
	});
	const [state, formAction, isPending] = useActionState(
		SubmitApplication,
		null,
	);

	const isOpen = modal === "open";

	const handleClose = useCallback(() => {
		setQueries({ plan: null, modal: null });
	}, [setQueries]);
	useEffect(() => {
		if (state?.success) {
			const timer = setTimeout(() => {
				handleClose();
			}, 2000);
			return () => clearTimeout(timer);
		}
	}, [state, handleClose]);

	useEffect(() => {
		const handleEsc = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				handleClose();
			}
		};

		if (plan) {
			document.body.style.overflow = "hidden";
			window.addEventListener("keydown", handleEsc);
		}

		return () => {
			document.body.style.overflow = "unset";
			window.removeEventListener("keydown", handleEsc);
		};
	}, [plan, handleClose]);

	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
			<button
				type="button"
				className="absolute inset-0 w-full h-full bg-black/50 backdrop-blur-sm cursor-default"
				onClick={handleClose}
				aria-label="Close modal"
			/>
			<div
				className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-8 relative border-2 border-[#D3C3E0]"
				onClick={(e) => e.stopPropagation()}
				onKeyDown={(e) => e.stopPropagation()}
				role="document"
			>
				<button
					type="button"
					className="absolute top-2 right-5 text-5xl text-gray-400 hover:text-black transition-colors cursor-pointer"
					onClick={handleClose}
					aria-label="Close modal"
				>
					&times;
				</button>

				{state?.success ? (
					<div className="text-center py-10">
						<div className="text-5xl mb-4">✅</div>
						<h3 className="text-2xl font-bold text-[#242424]">Success!</h3>
						<p className="text-gray-500 mt-2">Ваша заявка відправлена.</p>
					</div>
				) : (
					<div className="text-center">
						<h3 className="text-xl font-medium text-gray-500 uppercase tracking-wide">
							Selected Plan
						</h3>
						<div className="mt-2 mb-8 flex flex-col items-center gap-4">
							<div className="text-4xl font-bold text-[#242424]">{plan}</div>
							<p className="max-w-60 text-center text-[14px]">
								Leave your details, and I will contact you to discuss the
								details.
							</p>
						</div>

						<form
							action={formAction}
							className="space-y-4 flex flex-col items-center"
						>
							<input type="hidden" name="planId" defaultValue={plan || ""} />
							<input
								name="fullName"
								required
								placeholder="Full name"
								className="w-full p-4 bg-gray-50 border rounded-xl"
							/>
							<input
								name="email"
								type="email"
								required
								placeholder="Enter your email"
								className="w-full p-4 bg-gray-50 border rounded-xl"
							/>

							<div>
								<MenuButton
									title={isPending ? "Sending..." : "Confirm & Send"}
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
