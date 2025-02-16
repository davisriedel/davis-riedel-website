import PostLayout from "@/components/post-layout";
import { fetchAllPosts, getPost } from "@/lib/posts";
import { notFound } from "next/navigation";

type Props = {
	params: Promise<{ lang: "de" | "en"; slug: string }>;
};

export const dynamic = 'force-static';
export const dynamicParams = false;

export async function generateStaticParams() {
	return await Promise.all(
		(["de", "en"] as const).map(async (lang) => {
			const postContents = await fetchAllPosts(lang);
			return postContents.map((post) => ({
				lang,
				slug: post.frontmatter.slug,
			}));
		}),
	);
}

export async function generateMetadata({ params }: Props) {
	const { lang, slug } = await params;
	const post = await getPost(lang, slug);
	if (!post) return {};
	return {
		title: post.frontmatter.title,
		description: post.frontmatter.description ?? "",
    alternates: {
      languages: {
        "en-US": `/en/blog/${post.frontmatter.languageAlternates?.["en-US"]}`,
        "de-DE": `/de/blog/${post.frontmatter.languageAlternates?.["de-DE"]}`
      },
    }
	};
}

export default async function PostPage({ params }: Props) {
  "use cache";

  const { lang, slug } = await params;
	const post = await getPost(lang, slug);
	if (!post) return notFound();
	const { content, frontmatter } = post;
	return <PostLayout lang={lang} frontmatter={frontmatter}>{content}</PostLayout>;
}
