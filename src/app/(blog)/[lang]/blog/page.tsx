"use cache";

import PostList from "@/components/post-list";
import { countPosts, listPostContent } from "@/lib/posts";
import { getAllTags } from "@/lib/tags";

type Props = {
	params: Promise<{ lang: "de" | "en" }>;
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
	const { lang } = await params;

	const tags = await getAllTags(lang);

	const posts = await listPostContent(lang, 1, 10);
	const postCount = await countPosts(lang);
	const pagination = {
		current: 1,
		pages: Math.ceil(postCount / 10),
	};

	return (
		<section className="space-y-4">
			<h2 className="text-3xl">Blog</h2>
			<PostList lang={lang} posts={posts} tags={tags} pagination={pagination} />
		</section>
	);
}
