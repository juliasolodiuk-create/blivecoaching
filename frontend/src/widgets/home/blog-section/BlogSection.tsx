import { ChevronRight } from "lucide-react";
import ButtonShow from "@/shared/ui/animations/ButtonShow";
import DivEffect from "@/shared/ui/animations/DivEffects";
import { Button } from "@/shared/ui/components/buttons/Button/Button";
import { SectionTitle } from "@/shared/ui/components/titles/SectionTitle/SectionTitle";
import type { HighlightWithUrls } from "../../../../lib/types/blog.types";
import { BlogCard } from "./ui";

interface BlogSectionProps {
	data?: HighlightWithUrls;
}

export const BlogSection = ({ data }: BlogSectionProps) => {
	return (
		<section
			id="blog"
			className="min-h-screen bg-white text-[#242424] p-4 md:py-28 md:px-16 flex flex-col gap-20 items-center"
		>
			<SectionTitle
				title="Some my thoughts that I want to share with you"
				subTitle="Blog"
				className="items-center text-center"
			/>
			<div className="flex gap-8 min-h-190 flex-col xl:flex-row">
				<DivEffect>
					<BlogCard data={data?.highlight} variant="main" />
				</DivEffect>
				<div className="flex flex-col gap-8">
					{data?.subhighlights.map((item, index) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: <пояснення, чому тут index>
						<DivEffect key={index}>
							<BlogCard data={item} variant="sub" />
						</DivEffect>
					))}

					<ButtonShow>
						<Button title="View More Posts" primary={true} width="w-50">
							<ChevronRight size={20} />
						</Button>
					</ButtonShow>
				</div>
			</div>
		</section>
	);
};
