import type { PostContent } from "@/lib/posts";
import type { TagContent } from "@/lib/tags";
import React from "react";
import Pagination from "./pagination";
import PostItem from "./post-item";
import TagLink from "./tag-link";

type Props = {
	lang: "de" | "en";
	posts: PostContent[];
	tags: TagContent[];
	pagination: {
		current: number;
		pages: number;
	};
};

export default function PostList({ lang, posts, tags, pagination }: Props) {
	return (
		<div>
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
						href: (page) =>
							page === 1 ? `/[lang]/blog` : `/[lang]/blog/posts/[page]`,
            as: (page) => (page === 1 ? `/${lang}/blog` : `/${lang}/blog/posts/${page}`),
					}}
				/>
			</div>
			<div className="text-indigo-950 dark:text-indigo-400 mt-8">
				<ul>
					{tags.map((it) => (
						<li key={it.slug}>
							<TagLink lang={lang} tag={it} />
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
