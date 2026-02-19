import Image from "next/image";
import { useLocale } from "next-intl";
import { getBlogContent } from "@/entities/home/helper/blog-utils";
import type { BlogWithUrl } from "../../../../../lib/types/blog.types";
import { BlogCardContent } from "./";

interface BlogCardProps {
	data?: BlogWithUrl | null;
	variant?: "main" | "sub";
}

export const BlogCard = ({ data, variant = "sub" }: BlogCardProps) => {
	const locale = useLocale();

	const blogContent = getBlogContent(data, locale);

	if (!data || !blogContent) return null;

	if (!data || !blogContent) return null;

	const isMain = variant === "main";

	return (
		<div
			className={`
            rounded-2xl overflow-hidden border-[#B8BDD2] border flex flex-col 
            ${isMain ? " md:flex-row xl:flex-col" : "md:flex-row min-h-81.25"}
        `}
		>
			<div className="relative sm:min-w-[320px] w-full min-h-60 sm:min-h-75 md:min-h-90 ">
				{data.imageUrl && (
					<Image
						src={data.imageUrl}
						alt="{blogContent.title}"
						fill
						className="object-cover "
					/>
				)}
			</div>

			<BlogCardContent
				content={blogContent}
				isMain={isMain}
				paddingClassName={isMain ? "p-4 lg:p-12" : "p-4 lg:p-12 xl:p-6"}
			/>
		</div>
	);
};
