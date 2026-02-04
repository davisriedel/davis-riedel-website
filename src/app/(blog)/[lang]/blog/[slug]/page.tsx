import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { MdxImage } from "@/components/mdx-image";
import { MdxInstagramPost } from "@/components/mdx-instagram-post";
import PostLayout from "@/components/post-layout";
import { fetchAllPosts, getPost } from "@/lib/posts";

interface Props {
  params: Promise<{ lang: "de" | "en"; slug: string }>;
}

export async function generateStaticParams() {
  return await Promise.all(
    (["de", "en"] as const).map(async (lang) => {
      const postContents = await fetchAllPosts(lang);
      return postContents.map((post) => ({
        lang,
        slug: post.frontmatter.slug,
      }));
    })
  );
}

export async function generateMetadata({ params }: Props) {
  const { lang, slug } = await params;
  const post = await getPost(lang, slug);
  if (!post) {
    return {};
  }

  const alternates = post.frontmatter.languageAlternates
    ? {
        languages: {
          "en-US": `/en/blog/${post.frontmatter.languageAlternates?.["en-US"]}`,
          "de-DE": `/de/blog/${post.frontmatter.languageAlternates?.["de-DE"]}`,
        },
      }
    : undefined;

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description ?? "",
    alternates,
  };
}

export default async function PostPage({ params }: Props) {
  const { lang, slug } = await params;
  const post = await getPost(lang, slug);
  if (!post) {
    return notFound();
  }
  const { source, frontmatter } = post;

  return (
    <PostLayout frontmatter={frontmatter} lang={lang}>
      <MDXRemote
        components={{ InstagramPost: MdxInstagramPost, Image: MdxImage }}
        options={{ parseFrontmatter: true }}
        source={source}
      />
    </PostLayout>
  );
}
