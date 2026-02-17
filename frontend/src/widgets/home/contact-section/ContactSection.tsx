"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { useSvgDraw } from "@/shared/hooks/animation/useSvgDraw";
import useParallax from "@/shared/lib/hooks/useParallax";
import DrawAnimation from "@/shared/ui/animations/DrawAnimation";
import TextEffect from "@/shared/ui/animations/TextEffect";
import { SectionTitle } from "@/shared/ui/components/titles/SectionTitle/SectionTitle";

export const ContactSection = () => {
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
			className="relative h-full bg-[#E7EBFA] w-screen p-16 text-[#242424] -z-1 overflow-clip"
		>
			<div
				ref={setContainerRef}
				className="absolute inset-0 flex items-center justify-center w-screen opacity-50"
			></div>

			<div className="flex justify-between">
				<SectionTitle
					title="Get In Touch"
					subTitle="Contact"
					description="Ready to start your journey? Reach out and let's talk."
					className="items-left text-left"
				/>
				<div className="w-1/2">
					<div></div>
				</div>
			</div>
			<div className="w-full block mt-16">
				<div className="overflow-hidden w-full flex items-top rounded-xl h-150">
					<div ref={imgRef}>
						<img
							src="/photo/03.JPG"
							alt=""
							className={` scale-130 w-full xl:w-auto object-cover object-center rounded-sm`}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};
