import PostList from "@/components/post-list";
import { countPosts, listPostContent } from "@/lib/posts";
import { getAllTags, getTag } from "@/lib/tags";
import { notFound } from "next/navigation";

type Props = {
	params: Promise<{ lang: "de" | "en"; tag: string, page: string }>;
};

export const dynamic = 'force-static';
export const dynamicParams = false;

export async function generateStaticParams() {
	return await Promise.all(
		(["de", "en"] as const).map(async (lang) => {
			const tags = await getAllTags(lang);
			const paths = (await Promise.all(
				tags.map(async (tag) => {
					const postCount = await countPosts(lang, tag.slug);
					const pages = Math.ceil(postCount / 10);
					return Array.from({ length: pages }, (_, index) => {
						return { lang, tag: tag.slug, page: (index + 1).toString() };
					});
				}),
			)).flat();
			return paths;
		}),
	);
}

export async function generateMetadata({ params }: Props) {
	const { lang, tag: tagSlug } = await params;
	const tag = await getTag(lang, tagSlug);
	if (!tag) return notFound();

  const alternates = tag.languageAlternates ? {
    languages: {
      "en-US": `/en/blog/tags/${tag.languageAlternates?.["en-US"]}`,
      "de-DE": `/de/blog/tags/${tag.languageAlternates?.["de-DE"]}`
    },
  } : undefined;

	return lang === "en"
		? {
				title: tag.name,
				description: `Posts tagged with "${tag.name}".`,
        alternates
			}
		: {
				title: tag.name,
				description: `Beiträge mit dem Tag "${tag.name}".`,
        alternates
			};
}

export default async function TagIndexPage({ params }: Props) {
  "use cache";

  const { lang, tag: tagSlug, page } = await params;
	const tag = await getTag(lang, tagSlug);
	if (!tag) return notFound();

	const posts = await listPostContent(lang, parseInt(page), 10, tagSlug);
	const postCount = await countPosts(lang, tagSlug);
	const pagination = {
		current: parseInt(page),
		pages: Math.ceil(postCount / 10),
    link: {
      href: () => "/[lang]/blog/tags/[tag]/[page]",
      as: (page: number) => `/${lang}/blog/tags/${tagSlug}/${page}`
    }
	};

	return (
		<section className="space-y-4">
			<h2 className="text-3xl">
				{lang === "en" ? "All posts with tag:" : "Alle Beiträge mit dem Tag:"}{" "}
				<i>{tag.name}</i>
			</h2>
			<PostList lang={lang} posts={posts} pagination={pagination} />
		</section>
	);
}
