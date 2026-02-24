import TextEffect from "@/shared/ui/animations/TextEffect";

interface SectionTitleProps {
	title?: string;
	subTitle?: string;
	description?: string;
	className?: string;
}

export const SectionTitle = ({
	title,
	subTitle,
	description,
	className,
}: SectionTitleProps) => {
	return (
		<div className={`flex flex-col ${className}`}>
			<TextEffect>
				<p className="font-body  max-w-200">{subTitle}</p>
			</TextEffect>
			<TextEffect>
				<h2 className="tracking-tight text-[36px]  xl:text-[54px] font-header font-bold  leading-[110%]">
					{title}
				</h2>
			</TextEffect>
			<TextEffect>
				<p className="font-body  font-normal max-w-200">{description}</p>
			</TextEffect>
		</div>
	);
};
