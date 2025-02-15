import type { PostContent } from "@/lib/posts";
import type { TagContent } from "@/lib/tags";
import React from "react";
import Pagination from "./pagination";
import PostItem from "./post-item";

type Props = {
	lang: "de" | "en";
	posts: PostContent[];
	tag: TagContent;
	pagination: {
		current: number;
		pages: number;
	};
};

export default function TagPostList({ lang, posts, tag, pagination }: Props) {
	return (
		<div>
			<ul className="space-y-4 mb-4">
				{posts.map((it) => (
					<li key={it.fullPath}>
						<PostItem lang={lang} post={it} />
					</li>
				))}
			</ul>
			<Pagination
				current={pagination.current}
				pages={pagination.pages}
				link={{
					href: () => `/${lang}/blog/tags/[[...slug]]`,
					as: (page) =>
						page === 1
							? `/${lang}/blog/tags/${tag.slug}`
							: `/${lang}/blog/tags/${tag.slug}/${page}`,
				}}
			/>
		</div>
	);
}
