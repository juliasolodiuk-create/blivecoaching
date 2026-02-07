import { ChevronRight } from "lucide-react";
import Image from "next/image";

import { useLocale } from "next-intl";
import type {
	BlogContentData,
	BlogWithUrl,
} from "../../../lib/types/blog.types";

interface BlogItemProps {
	data?: BlogWithUrl | null;
	flex?: string;
	height?: string;
	padding?: string;
	text?: string;
}

export const BlogItem = ({
	data,
	flex = "",
	height = "",
	padding = "p-12",
	text = "text-[40px]",
}: BlogItemProps) => {
	const locale = useLocale();

	const contentKey = `blog_${locale}` as keyof BlogWithUrl;
	const blogContent = (data?.[contentKey] || data?.blog_ua) as
		| BlogContentData
		| undefined;

	// const blogContent = data ? (data as any)[`blog_${locale}`] : null;
	console.log("HIGHLIGHT1", blogContent);
	console.log("HIGHLIGHT2", data);
	return (
		<div
			className={`rounded-2xl overflow-clip max-w-160 ${flex} ${height} border-[#B8BDD2] border`}
		>
			<div className="relative min-w-[320px] w-full h-90 ">
				{data?.imageUrl && blogContent && (
					<Image
						src={data.imageUrl}
						alt={blogContent?.title || "blogContent image"}
						fill
						className="object-cover"
					/>
				)}
			</div>

			<div className={`${padding} flex flex-col gap-8 h-full `}>
				<div className="flex flex-col gap-2">
					<p className="font-semibold font-montserrat">
						{blogContent?.subTitle}
					</p>
					<h5 className={`font-bold font-montserrat ${text} leading-[90%]`}>
						{blogContent?.title}
					</h5>
					<p className="font-montserrat">{blogContent?.text}</p>
				</div>
				<a className="flex items-center gap-2">
					Explore <ChevronRight size={20} />
				</a>
			</div>
		</div>
	);
};
