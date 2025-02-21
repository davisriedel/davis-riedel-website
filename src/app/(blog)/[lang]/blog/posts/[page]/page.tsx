import PostList from "@/components/post-list";
import TagList from "@/components/tag-list";
import { countPosts, listPostContent } from "@/lib/posts";
import { getAllTags } from "@/lib/tags";

type Props = {
	params: Promise<{ lang: "de" | "en", page: string }>;
};

export const dynamic = 'force-static';
export const dynamicParams = false;

export async function generateStaticParams() {
	return await Promise.all(
		(["de", "en"] as const).map(async (lang) => {
      const postCount = await countPosts(lang);
      const pages = Math.ceil(postCount / 10);
      return Array.from({ length: pages }, (_, index) => {
        return { lang, page: (index + 1).toString() };
      });
		}),
	);
}

export async function generateMetadata({ params }: Props) {
	const { lang, page } = await params;

	const alternates = {
		languages: {
			"en-US": `/en/blog/posts/${page}`,
			"de-DE": `/de/blog/posts/${page}`,
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
  "use cache";

	const { lang, page } = await params;

	const tags = await getAllTags(lang);

	const posts = await listPostContent(lang, parseInt(page), 10);
	const postCount = await countPosts(lang);
	const pagination = {
		current: parseInt(page),
		pages: Math.ceil(postCount / 10),
    link: {
      href: () => `/[lang]/blog/posts/[page]`,
      as: (page: number) => `/${lang}/blog/posts/${page}`,
    }
	};

	return (
		<section className="space-y-4">
			<h2 className="text-5xl text-center">Blog</h2>
			<PostList lang={lang} posts={posts} pagination={pagination} />
      <div className="mt-8">
        <TagList lang={lang} tags={tags} />
      </div>
		</section>
	);
}
