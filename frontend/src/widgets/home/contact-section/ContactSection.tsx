"use client";

import { ChevronRight, Mail, Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import { useRef } from "react";
import type { ContactWithUrls } from "@/entities/home/model/home.types";
import useParallax from "@/shared/hooks/useParallax";
import { useSvgDraw } from "@/shared/hooks/useSvgDraw";
import ButtonShow from "@/shared/ui/animations/ButtonShow";
import TextEffect from "@/shared/ui/animations/TextEffect";
import { Button } from "@/shared/ui/components/buttons/Button/Button";
import { ImageContainer } from "@/shared/ui/components/images/ImageContainer/ImageContainer";
import { SectionTitle } from "@/shared/ui/components/titles/SectionTitle/SectionTitle";
import { CallbackModal } from "./ui/CallbackModal";
import { ContactHeader } from "./ui/ContactHeader";

interface ContactProps {
	data?: ContactWithUrls;
}

export const ContactSection = ({ data }: ContactProps) => {
	const t = useTranslations("contact");
	const imgRef = useRef<HTMLDivElement>(null);
	const sectionRef = useRef<HTMLDivElement>(null);

	const { setContainerRef } = useSvgDraw({
		url: "/assets/line-2.svg",
		scope: sectionRef,
	});

	useParallax(imgRef, 15, "30%");

	return (
		<section
			ref={sectionRef}
			id="contacts"
			className="relative z-0 h-full bg-[#E7EBFA] w-screen  p-4 md:p-16 text-[#242424]  overflow-clip"
		>
			<div
				ref={setContainerRef}
				className="-z-1 absolute inset-0 flex items-center justify-center min-w-360 w-screen opacity-50"
			></div>

			<div className="flex justify-between flex-col md:flex-row gap-6 ">
				<SectionTitle
					title={t("title")}
					subTitle={t("subTitle")}
					description={t("description")}
					className="items-left text-left"
				/>
				<div className="w-full md:w-1/2 flex flex-col">
					<ContactHeader linkTitle={t("button")} title={t("callback")} />
				</div>
			</div>
			<div className="w-full block mt-8 sm:mt-16">
				{data?.imageSelected.imageUrl && (
					<ImageContainer
						objectPosition="object-top"
						rounded="rounded-xl"
						ref={imgRef}
						alt="Benefits Picture"
						image={data.imageSelected.imageUrl}
					/>
				)}
			</div>
			<CallbackModal />
		</section>
	);
};
