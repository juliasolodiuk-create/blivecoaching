import { ChevronRight, Mail } from "lucide-react";
import { parseAsString, useQueryState } from "nuqs";
import ButtonShow from "@/shared/ui/animations/ButtonShow";
import { Button } from "@/shared/ui/components/buttons/Button/Button";

export const ContactHeader = ({
	linkTitle,
	title,
}: {
	linkTitle: string;
	title: string;
}) => {
	const [_, setContactModal] = useQueryState("contact", parseAsString);

	return (
		<div>
			<div className="flex items-center gap-4">
				<Mail size={20} />
				<p className="font-bold text-[16px] md:text-[20px]">{title}</p>
			</div>
			<ButtonShow>
				<Button
					title={linkTitle}
					secondary={true}
					onClick={() => setContactModal("open")}
				>
					<ChevronRight size={20} />
				</Button>
			</ButtonShow>
		</div>
	);
};
