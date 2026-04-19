import type { MouseEventHandler, ReactNode } from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
	children?: ReactNode;
	link?: string;
	onClick?: MouseEventHandler<HTMLElement>;
	title?: string;
	background?: string;
	border?: boolean;
	primary?: boolean;
	secondary?: boolean;
	width?: string;
	type?: "button" | "submit" | "reset";
}

export const Button = ({
	children,
	link,
	onClick,
	title,
	primary = false,
	secondary = false,
	border = false,
	width = "w-auto",
	type = "button",
}: ButtonProps) => {
	let bGColor = "bg-primary";
	let iconBgColor = "bg-background";
	let borderSet = "";

	if (primary) {
		bGColor = "bg-primary";
	}

	if (secondary) {
		bGColor = "bg-white";
		iconBgColor = "bg-primary";
	}

	if (border) {
		borderSet = "border border-primary";
	}

	const commonClassName = `${borderSet} ${bGColor} ${width} ${styles.btnWrapper} z-1 my-5 cursor-pointer p-1.25 inline-flex items-center justify-between h-11.5 rounded-xl  outline-none`;

	const content = (
		<>
			<div className="px-2 font-montserrat font-bold tracking-tight leading-4.5">
				{title}
			</div>
			<div
				className={`${iconBgColor} flex justify-center items-center min-w-10 h-9 rounded-lg`}
			>
				{children}
			</div>
		</>
	);

	if (link) {
		return (
			<a href={link} className={commonClassName} onClick={onClick}>
				{content}
			</a>
		);
	}

	return (
		<button type={type} className={commonClassName} onClick={onClick}>
			{content}
		</button>
	);
};
