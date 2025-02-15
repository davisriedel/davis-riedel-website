"use cache";

import PostList from "@/components/post-list";
import { countPosts, listPostContent } from "@/lib/posts";
import { getAllTags } from "@/lib/tags";

type Props = {
	params: Promise<{ lang: "de" | "en", page: number[] }>;
};

export async function generateMetadata({ params }: Props) {
	const { lang } = await params;

	const alternates = {
		languages: {
			"en-US": "/en/blog",
			"de-DE": "/de/blog",
		},
	};

	return lang === "en"
		? {
				title: "All posts",
				description: "A list of all posts.",
        alternates,
			}
		: {
				title: "Alle Beiträge",
				description: "Eine Liste aller Beiräge.",
        alternates,
			};
}

export default async function PostIndexPage({ params }: Props) {
	const { lang, page } = await params;

	const tags = await getAllTags(lang);
	const currentPage = page.length == 1 ? page[0]! : 1;

	const posts = await listPostContent(lang, currentPage, 10);
	const postCount = await countPosts(lang);
	const pagination = {
		current: currentPage,
		pages: Math.ceil(postCount / 10),
	};

	return (
		<section className="space-y-4">
			<h2 className="text-3xl">Blog</h2>
			<PostList lang={lang} posts={posts} tags={tags} pagination={pagination} />
		</section>
	);
}
