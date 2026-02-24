"use client";

import { Mail, Phone } from "lucide-react";
import { useRef } from "react";
import type { ContactWithUrls } from "@/entities/home/model/home.types";
import useParallax from "@/shared/hooks/useParallax";
import { useSvgDraw } from "@/shared/hooks/useSvgDraw";
import TextEffect from "@/shared/ui/animations/TextEffect";
import { ImageContainer } from "@/shared/ui/components/images/ImageContainer/ImageContainer";
import { SectionTitle } from "@/shared/ui/components/titles/SectionTitle/SectionTitle";

interface ContactProps {
	data?: ContactWithUrls;
}

export const ContactSection = ({ data }: ContactProps) => {
	const imgRef = useRef<HTMLDivElement>(null);
	const sectionRef = useRef<HTMLDivElement>(null);

	const { setContainerRef } = useSvgDraw({
		url: "/assets/line-2.svg",
		scope: sectionRef,
	});

	useParallax(imgRef, 15, "30%");
	console.log(data);

	return (
		<section
			ref={sectionRef}
			id="contacts"
			className="relative h-full bg-[#E7EBFA] w-screen  p-4 md:p-16 text-[#242424] -z-1 overflow-clip"
		>
			<div
				ref={setContainerRef}
				className="absolute inset-0 flex items-center justify-center min-w-360 w-screen opacity-50"
			></div>

			<div className="flex justify-between flex-col md:flex-row gap-6">
				<SectionTitle
					title="Get In Touch"
					subTitle="Contact"
					description="Ready to start your journey? Reach out and let's talk."
					className="items-left text-left"
				/>
				<div className="w-full md:w-1/2 flex flex-col  gap-6 ">
					<div>
						<div className="flex items-center gap-4">
							<Mail size={20} />
							<p className="font-bold text-[16px] md:text-[20px]">Email</p>
						</div>

						<TextEffect>{data?.items?.content.email}</TextEffect>
					</div>
					<div>
						<div className="flex items-center gap-4">
							<Phone size={20} />
							<p className="font-bold text-[16px] md:text-[20px]">Phone</p>
						</div>

						<TextEffect>{data?.items?.content.phone}</TextEffect>
					</div>
				</div>
			</div>
			<div className="w-full block mt-16">
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
		</section>
	);
};
