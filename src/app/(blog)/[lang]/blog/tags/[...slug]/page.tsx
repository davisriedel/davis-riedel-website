"use cache";

import TagPostList from "@/components/tag-post-list";
import { countPosts, listPostContent } from "@/lib/posts";
import { getAllTags, getTag } from "@/lib/tags";
import { notFound } from "next/navigation";

type Props = {
	params: Promise<{ lang: "de" | "en"; slug: string[] }>;
};

export async function generateStaticParams() {
	return await Promise.all(
		(["de", "en"] as const).map(async (lang) => {
			const tags = await getAllTags(lang);
			const paths = await Promise.all(
				tags.flatMap(async (tag) => {
					const postCount = await countPosts(lang, tag.slug);
					const pages = Math.ceil(postCount / 10);
					return Array.from({ length: pages }, (_, index) => {
						if (index === 0) {
							return { lang, slug: [tag.slug] };
						}
						return { lang, slug: [tag.slug, (index + 1).toString()] };
					});
				}),
			);
			return paths;
		}),
	);
}

export async function generateMetadata({ params }: Props) {
	const { lang, slug } = await params;
	const [tagSlug] = slug;
	if (!tagSlug) return notFound();
	const tag = await getTag(lang, tagSlug);
	if (!tag) return notFound();

	return lang === "en"
		? {
				title: tag.name,
				description: `Posts tagged with "${tag.name}".`,
			}
		: {
				title: tag.name,
				description: `Beiträge mit dem Tag "${tag.name}".`,
			};
}

export default async function TagIndexPage({ params }: Props) {
  const {lang, slug} = await params;
	const [tagSlug, page] = slug;
	if (!tagSlug) return notFound();
	const tag = await getTag(lang, tagSlug);
	if (!tag) return notFound();
	const currentPage = page ? Number.parseInt(page) : 1;

	const posts = await listPostContent(lang, currentPage, 10, tagSlug);
	const postCount = await countPosts(lang, tagSlug);
	const pagination = {
		current: currentPage,
		pages: Math.ceil(postCount / 10),
	};

	return (
		<section className="space-y-4">
			<h2 className="text-3xl">
				{lang === "en" ? "All posts with tag:" : "Alle Beiträge mit dem Tag:"}{" "}
				<i>{tag.name}</i>
			</h2>
			<TagPostList lang={lang} posts={posts} tag={tag} pagination={pagination} />
		</section>
	);
}
