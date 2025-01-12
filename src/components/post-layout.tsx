import { headingFont } from "@/assets/fonts";
import { getAuthor } from "@/lib/authors";
import type { PostFrontmatter } from "@/lib/post-frontmatter";
import { parseISO } from "date-fns";
import type React from "react";
import Author from "./author";
import DateComponent from "./date";
import TagList from "./tag-list";

type Props = {
	frontmatter: PostFrontmatter;
	children: React.ReactNode;
};

export default async function PostLayout({
	frontmatter: { title, date, author, tags },
	children,
}: Props) {
	const authorContent = await getAuthor(author);

	return (
		<article>
			<header className="mb-8">
				<h2 className={`${headingFont.className} text-3xl`}>{title}</h2>
				<div className="text-indigo-950 dark:text-indigo-400">
					<DateComponent date={parseISO(date)} />
					<span> | </span>
					{authorContent && <Author author={authorContent} />}
				</div>
			</header>
			<div className="prose dark:prose-invert">{children}</div>
			<div className="text-indigo-950 dark:text-indigo-400 mt-8">
				<TagList tags={tags} />
			</div>
		</article>
	);
}
