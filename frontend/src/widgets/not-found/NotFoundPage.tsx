"use client";

import { ChevronRight, MoveLeft } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { useSvgDraw } from "@/shared/hooks/useSvgDraw";
import ButtonShow from "@/shared/ui/animations/ButtonShow";
import { Button } from "@/shared/ui/components/buttons/Button/Button";

export const NotFoundPage = () => {
	const sectionRef = useRef<HTMLDivElement>(null);
	const { setContainerRef } = useSvgDraw({
		url: "/assets/line-2.svg",
		scope: sectionRef,
	});

	return (
		<section
			ref={sectionRef}
			className="relative flex min-h-screen h-full w-full flex-col items-center justify-center bg-[#E7EBFA] px-4 text-center overflow-clip"
		>
			<div
				ref={setContainerRef}
				className="absolute  rotate-170 inset-0 flex items-center justify-center min-w-360 w-screen opacity-20"
			></div>
			<div className="relative z-10">
				<h1 className="text-[130px] font-bold text-[#D3C3E0]  sm:text-[300px] tracking-tighter">
					404
				</h1>
				<div className="absolute inset-0 flex flex-col items-center justify-center mt-10">
					<h2 className="text-2xl font-bold text-black sm:text-4xl">
						Page Not Found
					</h2>
					<p className="mt-2 text-gray-600 max-w-[300px] sm:max-w-none">
						Sorry, the page you are looking for doesn't exist or has been moved.
					</p>
				</div>
			</div>

			<div className="mt-12">
				<ButtonShow>
					<Button
						title="Back Home Page"
						secondary={true}
						width="max-w-90"
						link="/"
					>
						<div className="rotate-180">
							<ChevronRight size={20} />
						</div>
					</Button>
				</ButtonShow>
			</div>
		</section>
	);
};
