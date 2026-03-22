import TextEffect from "../../animations/TextEffect";

interface TextContentProps {
	data?: string[] | undefined;
}

export const TextContent = ({ data }: TextContentProps) => {
	return (
		<div className=" flex flex-col gap-8">
			{data?.map((item, index) => {
				const uniqueKey = `text-${index}-${item.slice(0, 10)}`;

				return (
					<div key={uniqueKey}>
						<TextEffect>
							<p className="text-center sm:text-left text-[16px] md:text-[18px]">
								{item}
							</p>
						</TextEffect>
					</div>
				);
			})}
		</div>
	);
};
