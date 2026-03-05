import TextEffect from "@/shared/ui/animations/TextEffect";

interface SubTitleProps {
	title?: string;
	subTitle?: string;
	description?: string;
	className?: string;
}

export const SubTitle = ({
	title,
	subTitle,
	description,
	className,
}: SubTitleProps) => {
	return (
		<div className={`flex flex-col ${className}`}>
			<TextEffect>
				<p className="font-body  max-w-200">{subTitle}</p>
			</TextEffect>
			<TextEffect>
				<h3 className="font-header text-[24px]  xl:text-[40px] font-bold leading-[110%]">
					{title}
				</h3>
			</TextEffect>
			<TextEffect>
				<p className="font-montserrat text-center max-w-200">{description}</p>
			</TextEffect>
		</div>
	);
};
