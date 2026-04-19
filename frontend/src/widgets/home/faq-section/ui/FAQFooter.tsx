import { ChevronRight } from "lucide-react";
import { parseAsString, useQueryState } from "nuqs";
import ButtonShow from "@/shared/ui/animations/ButtonShow";
import { Button } from "@/shared/ui/components/buttons/Button/Button";

export const FAQFooter = ({ linkTitle }: { linkTitle: string }) => {
	const [_, setQuestionModal] = useQueryState("question", parseAsString);

	return (
		<ButtonShow>
			<Button
				title={linkTitle}
				secondary={true}
				onClick={() => setQuestionModal("open")}
			>
				<ChevronRight size={20} />
			</Button>
		</ButtonShow>
	);
};
