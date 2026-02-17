import TextEffect from "@/shared/ui/animations/TextEffect";

interface TextBlockProps {
	title?: string;
	description?: string;
	animation?: boolean;
}

export const TextBlock = ({
	title,
	description,
	animation = false,
}: TextBlockProps) => {
	return (
		<div className="flex flex-col gap-2 ">
			<TextEffect active={animation}>
				<h6 className="font-bold">{title}</h6>
			</TextEffect>
			<TextEffect active={animation}>
				<p className="whitespace-pre-line">{description}</p>
			</TextEffect>
		</div>
	);
};
