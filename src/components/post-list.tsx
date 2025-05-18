import type { PostContent } from "@/lib/posts";
import React from "react";
import Pagination from "./pagination";
import PostItem from "./post-item";

type Props = {
	lang: "de" | "en";
	posts: PostContent[];
	pagination: {
		current: number;
		pages: number;
		link: {
			href: (page: number) => string;
			as: (page: number) => string;
		};
	};
};

export default function PostList({ lang, posts, pagination }: Props) {
	return (
		<div>
			<ul className="space-y-8 mb-8">
				{posts.map((it) => (
					<li key={it.fullPath}>
						<PostItem lang={lang} post={it} />
					</li>
				))}
			</ul>
			<Pagination {...pagination} />
		</div>
	);
}
