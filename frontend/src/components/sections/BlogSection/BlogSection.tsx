import { ChevronRight } from "lucide-react";
import BlurAnimation from "@/components/animations/BlurAnimation";
import TextEffect from "@/components/animations/TextEffect";
import { BlogItem } from "@/components/common/BlogItem/BlogItem";
import { Button } from "@/components/common/Button/Button";
import type { HighlightWithUrls } from "../../../../lib/types/blog.types";

interface BlogSectionProps {
	data?: HighlightWithUrls;
}

export const BlogSection = ({ data }: BlogSectionProps) => {
	return (
		<section className="min-h-screen bg-white text-[#242424] py-28 px-16 flex flex-col gap-20 items-center">
			<div className="flex flex-col items-center gap-2">
				<TextEffect>
					<p className="font-body text-center max-w-200">Blog</p>
				</TextEffect>
				<TextEffect>
					<h2 className="tracking-tight text-[54px] font-header font-bold text-center leading-[110%]">
						Some my thoughts that I want to share with you
					</h2>
				</TextEffect>
			</div>
			<div className="flex gap-8 min-h-190">
				<BlurAnimation>
					<BlogItem data={data?.highlight} />
				</BlurAnimation>
				<div className="flex flex-col gap-8">
					{data?.subhighlights.map((item, index) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: <пояснення, чому тут index>
						<BlurAnimation key={index}>
							<BlogItem
								data={item}
								flex="flex"
								height="h-[325px]"
								padding="p-[24px]"
								text="text-[24px]"
							/>
						</BlurAnimation>
					))}

					<Button title="View More Posts" primary={true} width="w-50">
						<ChevronRight size={20} />
					</Button>
				</div>
			</div>
		</section>
	);
};
