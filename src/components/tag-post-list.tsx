import type { PostContent } from "@/lib/posts";
import type { TagContent } from "@/lib/tags";
import React from "react";
import Pagination from "./pagination";
import PostItem from "./post-item";

type Props = {
	posts: PostContent[];
	tag: TagContent;
	pagination: {
		current: number;
		pages: number;
	};
};

export default function TagPostList({ posts, tag, pagination }: Props) {
	return (
		<div>
			<ul className="space-y-4 mb-4">
				{posts.map((it) => (
					<li key={it.fullPath}>
						<PostItem post={it} />
					</li>
				))}
			</ul>
			<Pagination
				current={pagination.current}
				pages={pagination.pages}
				link={{
					href: () => "/en/posts/tags/[[...slug]]",
					as: (page) =>
						page === 1
							? `/en/posts/tags/${tag.slug}`
							: `/en/posts/tags/${tag.slug}/${page}`,
				}}
			/>
		</div>
	);
}
