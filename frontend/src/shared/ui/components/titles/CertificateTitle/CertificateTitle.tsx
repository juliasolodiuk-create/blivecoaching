import TextEffect from "@/shared/ui/animations/TextEffect";

interface CertificateTitleProps {
	title?: string;
	subTitle?: string;
	description?: string;
	className?: string;
}

export const CertificateTitle = ({
	title,
	subTitle,
	description,
	className,
}: CertificateTitleProps) => {
	return (
		<div className={`flex flex-col ${className}`}>
			<TextEffect>
				<p className="font-body  max-w-200">{subTitle}</p>
			</TextEffect>
			<TextEffect>
				<h2 className="tracking-tight text-[24px]  xl:text-[40px] font-body font-semibold  leading-[110%]">
					{title}
				</h2>
			</TextEffect>
			<TextEffect>
				<p className="font-body  font-normal max-w-200">{description}</p>
			</TextEffect>
		</div>
	);
};
