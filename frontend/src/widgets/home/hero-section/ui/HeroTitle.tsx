import type { ReactNode } from "react";

interface HeroTitleProps {
	children: ReactNode;
}

export const HeroTitle = ({ children }: HeroTitleProps) => {
	return (
		<h1
			className="tracking-tighter font-header font-bold leading-[80%] 
            text-center text-[54px]
            sm:text-[80px] 
            md:text-[100px]
            lg:text-left
			text-background
            "
		>
			{children}
		</h1>
	);
};
