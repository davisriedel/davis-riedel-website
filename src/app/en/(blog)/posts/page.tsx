"use cache";

import { headingFont } from "@/assets/fonts";
import PostList from "@/components/post-list";
import { countPosts, listPostContent } from "@/lib/posts";
import { getAllTags } from "@/lib/tags";

export async function generateMetadata() {
	const title = "All posts";
	return {
		title,
		description: "A list of all posts.",
	};
}

export default async function PostIndexPage() {
	const posts = await fetchPosts();
	const tags = await getAllTags();
	const pagination = await fetchPagination();

	return (
		<section className="space-y-4">
			<h2 className={`${headingFont.className} text-3xl`}>Blog</h2>
			<PostList posts={posts} tags={tags} pagination={pagination} />
		</section>
	);
}

async function fetchPosts() {
	return listPostContent(1, 10);
}

async function fetchPagination() {
	const postCount = await countPosts();
	return {
		current: 1,
		pages: Math.ceil(postCount / 10),
	};
}
