import TagPostList from "@/components/tag-post-list";
import { countPosts, listPostContent } from "@/lib/posts";
import { getAllTags, getTag } from "@/lib/tags";
import { notFound } from "next/navigation";
import { Suspense } from "react";

type Props = {
	params: Promise<{ slug: string[] }>;
};

export async function generateStaticParams() {
	const tags = await getAllTags();
	const paths = await Promise.all(
		tags.flatMap(async (tag) => {
			const postCount = await countPosts(tag.slug);
			const pages = Math.ceil(postCount / 10);
			return Array.from({ length: pages }, (_, index) => {
				if (index === 0) {
					return { slug: [tag.slug] };
				}
				return { slug: [tag.slug, (index + 1).toString()] };
			});
		}),
	);
	return paths;
}

export async function generateMetadata({ params }: Props) {
	const { slug } = await params;
	const [tagSlug] = slug;
	if (!tagSlug) return notFound();
	const tag = await getTag(tagSlug);
	if (!tag) return notFound();

	return {
		title: tag.name,
		description: `Posts tagged with "${tag.name}".`,
	};
}

async function PageContent({ slug }: { slug: Promise<string[]> }) {
	const [tagSlug, page] = await slug;
	if (!tagSlug || !page) return notFound();
	const tag = await getTag(tagSlug);
	if (!tag) return notFound();
	const currentPage = page ? Number.parseInt(page) : 1;

	const posts = await listPostContent(currentPage, 10, tagSlug);
	const postCount = await countPosts(tagSlug);
	const pagination = {
		current: currentPage,
		pages: Math.ceil(postCount / 10),
	};

	return (
		<>
			<h2 className="text-3xl">
				All posts with tag: <i>{tag.name}</i>
			</h2>
			<TagPostList posts={posts} tag={tag} pagination={pagination} />
		</>
	);
}

export default async function TagIndexPage({ params }: Props) {
	const slug = params.then((p) => p.slug);

	return (
		<section className="space-y-4">
			<Suspense fallback={<span>Loading ...</span>}>
				<PageContent slug={slug} />
			</Suspense>
		</section>
	);
}
