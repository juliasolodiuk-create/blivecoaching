import type { ReactNode } from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
	children?: ReactNode;
	link?: string;
	title?: string;
	background?: string;
	border?: boolean;
	primary?: boolean;
	secondary?: boolean;
	width?: string;
}

export const Button = ({
	children,
	link,
	title,
	primary = false,
	secondary = false,
	border = false,
	width = "w-auto",
}: ButtonProps) => {
	let bGColor = "bg-[#D3C3E0]";
	let iconBgColor = "bg-white";
	let borderSet = "";

	if (primary) {
		bGColor = "bg-[#D3C3E0]";
	}

	if (secondary) {
		bGColor = "bg-white";
		iconBgColor = "bg-[#D3C3E0]";
	}

	if (border) {
		borderSet = "border border-[#D3C3E0]";
	}
	return (
		<a
			className={`${borderSet} ${bGColor} ${width} ${styles.btnWrapper} z-1 my-5 cursor-pointer p-1.25 inline-flex items-center justify-between h-11.5   rounded-xl`}
			href={link}
		>
			<div className="px-2 font-montserrat font-bold tracking-tight text-[#242424]">
				{title}
			</div>
			<div
				className={`${iconBgColor} flex justify-center items-center w-10 h-9 rounded-lg text-[#242424]`}
			>
				{children}
			</div>
		</a>
	);
};
