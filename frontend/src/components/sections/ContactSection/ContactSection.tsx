"use client";

import { useRef } from "react";
import DrawAnimation from "@/components/animations/DrawAnimation";
import useParallax from "@/hooks/useParallax";

export const ContactSection = () => {
	const imgRef = useRef<HTMLDivElement>(null);

	useParallax(imgRef, 15, "30%");
	return (
		<section className="relative h-full bg-[#E7EBFA] w-screen p-16 text-[#242424] -z-1 overflow-clip">
			<div className="absolute inset-0 flex items-center justify-center w-full opacity-50 ">
				<DrawAnimation start="top 30%" duration={6} direction="end">
					<svg
						role="img"
						viewBox="0 0 3500 3500"
						xmlns="http://www.w3.org/2000/svg"
						className=" w-full fill-none stroke-[#D3C3E0] stroke-[100px]"
					>
						<title>Line</title>
						<path d="M2.3,832.16c438.87,44.54,794.87-7.35,975.33-90.67,112.39-51.89,365.23-212.17,441.31-267.91,5.93-4.35,10.69-7.86,14.15-10.42,242.57-179.58,221.79-212.8,354.24-293.52C2093.81-17.13,2434.96,20.67,2591.97,38.06c248.49,27.53,515.76,57.14,668,273.27,131.32,186.44,103.07,406.62,96.15,460.52-30.96,241.26-176.19,389.35-237.85,450.39-97.45,96.48-248.5,246.04-455.46,222.67-130.65-14.75-277.72-97.77-339.06-242.91-92.37-218.57,72.37-429.7,101.21-466.67,203.08-260.26,555.47-224.68,581.97-221.57,252.96,29.7,405.44,197.6,445.33,242.91,128.99,146.47,161.03,303.58,207.49,531.36,60.69,297.57-1.7,322.48,70.85,581.97,55.68,199.17,113.05,258.23,80.97,359.3-11.48,36.17-54.63,141.38-349.18,253.03-270.25,102.44-542.93,205.8-870.43,101.21-241.78-77.22-588.2-291.65-622.46-612.33-14.39-134.66,22.4-324.32,126.08-361.83,168.79-61.07,434.7,310.19,511.56,417.5,202.73,283.05,438.64,612.43,313.76,915.97-140.43,341.35-633.89,399.13-769.21,414.97-81.02,9.49-629.93,73.75-890.67-247.97-174.1-214.82-46.96-388.54-263.15-632.58-156.35-176.48-363.96-241.75-480.76-278.33-214.3-67.13-400.67-57.35-509.26-44.56" />
					</svg>
				</DrawAnimation>
			</div>
			<div className="flex justify-between">
				<div className="flex flex-col items-left gap-2 w-1/2">
					<p className="font-body  max-w-200">Contact</p>

					<h2 className="tracking-tight text-[54px] font-header font-bold  leading-[110%]">
						Get In Touch
					</h2>
					<p className="font-body  max-w-200">
						Ready to start your journey? Reach out and let's talk.
					</p>
				</div>
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
