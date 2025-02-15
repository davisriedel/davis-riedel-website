import type { PostContent } from "@/lib/posts";
import { parseISO } from "date-fns";
import Link from "next/link";
import { AnimatedLink } from "./animated-link";
import DateComponent from "./date";

type Props = {
	lang: "de" | "en";
	post: PostContent;
};

export default async function PostItem({ lang, post }: Props) {
	return (
		<div>
			<div className="text-indigo-950 dark:text-indigo-400 text-sm">
				<DateComponent date={parseISO(post.frontmatter.date)} />
			</div>
			<Link href={`/${lang}/blog/${post.frontmatter.slug}`}>
				<h3 className="text-3xl">{post.frontmatter.title}</h3>
			</Link>
			{/* biome-ignore lint/security/noDangerouslySetInnerHtml: needed */}
			<div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
			<AnimatedLink href={`/${lang}/blog/${post.frontmatter.slug}`}>
				<b>Mehr lesen...</b>
			</AnimatedLink>
		</div>
	);
}
