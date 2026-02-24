"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Observer } from "gsap/all";
import { CircleArrowLeft, CircleArrowRight } from "lucide-react";
import { useCallback, useRef, useState } from "react";
import type { FeedbackWithUrls } from "../../../entities/home/model/home.types";
import { FeedbackItem } from "./ui/FeedbackItem";

if (typeof window !== "undefined") {
	gsap.registerPlugin(Observer);
}

interface FeedbacksSectionProps {
	data?: FeedbackWithUrls[];
}

export const FeedbacksSection = ({ data = [] }: FeedbacksSectionProps) => {
	const [index, setIndex] = useState(0);
	const containerRef = useRef<HTMLDivElement>(null);
	const wrapperRef = useRef<HTMLDivElement>(null);

	const totalItems = data?.length;

	useGSAP(() => {
		if (totalItems === 0) return;
		gsap.to(containerRef.current, {
			xPercent: -100 * index,
			duration: 0.8,
			ease: "power3.inOut",
			overwrite: "auto",
		});
	}, [index]);

	const next = useCallback(() => {
		if (gsap.isTweening(containerRef.current)) return;
		setIndex((prev) => Math.min(prev + 1, data.length - 1));
	}, [data.length]);

	const prev = useCallback(() => {
		if (gsap.isTweening(containerRef.current)) return;
		setIndex((prev) => Math.max(prev - 1, 0));
	}, []);

	useGSAP(() => {
		const obs = Observer.create({
			target: wrapperRef.current,
			type: "wheel,touch,pointer",
			onLeft: () => {
				if (index < data.length - 1 && !gsap.isTweening(containerRef.current)) {
					next();
				}
			},
			onRight: () => {
				if (index > 0 && !gsap.isTweening(containerRef.current)) {
					prev();
				}
			},
			tolerance: 50,
			preventDefault: false,
		});

		return () => obs.kill();
	}, [index, next, prev]);
	return (
		<section
			id="feedbacks"
			ref={wrapperRef}
			className="h-full bg-[#ffffff] py-20 px-0 relative overflow-hidden "
		>
			<div
				ref={containerRef}
				className="slider-inner"
				style={{ display: "flex", width: "100%" }}
			>
				{data.map((item, i) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: <пояснення, чому тут index>
					<div key={i} className=" shrink-0">
						<FeedbackItem data={item} />
					</div>
				))}
			</div>
			<div className=" pointer-events-none absolute top-10 inset-0 flex items-start justify-between px-4 md:px-10 w-screen ">
				<div className="w-12 h-12">
					{index > 0 && (
						<button
							type="button"
							onClick={prev}
							className="px-0 py-2 text-[#D3C3E0] cursor-pointer pointer-events-auto"
						>
							<CircleArrowLeft size={36} />
						</button>
					)}
				</div>
				<div className="w-12 h-12">
					{index < data.length - 1 && (
						<button
							type="button"
							onClick={next}
							className="px-4 py-2 text-[#D3C3E0] cursor-pointer pointer-events-auto"
						>
							<CircleArrowRight size={36} />
						</button>
					)}
				</div>
			</div>
			<div className="flex w-[60vw] gap-10 my-16 mx-auto max-w-100">
				{data.map((_item, i) => (
					<div
						// biome-ignore lint/suspicious/noArrayIndexKey: <пояснення, чому тут index>
						key={i}
						className={`
        w-full h-1 transition-colors duration-300 rounded-2xl
        ${i === index ? "bg-[#D3C3E0]" : "bg-[#E7EBFA]"}
      `}
					/>
				))}
			</div>
		</section>
	);
};
