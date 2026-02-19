import { ChevronRight } from "lucide-react";
import type { BlogContentData } from "../../../../../lib/types/blog.types";

interface BlogCardContentProps {
	content: BlogContentData;
	isMain?: boolean;
	paddingClassName?: string;
}

export const BlogCardContent = ({
	content,
	isMain = false,
	paddingClassName = "",
}: BlogCardContentProps) => {
	return (
		<div className={`flex flex-col gap-8 h-full w-full ${paddingClassName}`}>
			<div className="flex flex-col gap-2">
				<p className="font-semibold font-montserrat opacity-70">
					{content.subTitle}
				</p>
				<h5
					className={`
            font-bold font-montserrat leading-[90%]
            ${isMain ? "text-[24px] sm:text-[36px] xl:text-[40px]" : "text-[24px] sm:text-[36px] xl:text-[24px]"}
          `}
				>
					{content.title}
				</h5>
				<p className="font-montserrat line-clamp-3 text-base">{content.text}</p>
			</div>
			<a
				className="mt-auto flex items-center gap-2 font-bold hover:underline"
				href="/"
			>
				Explore <ChevronRight size={20} />
			</a>
		</div>
	);
};
