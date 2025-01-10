import PostLayout from "@/components/post-layout";
import { fetchAllPosts } from '@/lib/posts';
import { Suspense } from 'react';

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const postContents = await fetchAllPosts();
  return postContents.map((post) => ({
    slug: post.frontmatter.slug,
  }));
}

async function slugToPostContent(slug: string) {
  return Object.fromEntries(
    (await fetchAllPosts()).map((post) => [post.frontmatter.slug, post])
  )[slug];
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const { frontmatter } = await slugToPostContent(slug);
  return {
    title: frontmatter.title,
    description: frontmatter.description ?? ""
  };
}

async function PageContent({ slug }: { slug: Promise<string> }) {
  const { content, frontmatter } = await slugToPostContent(await slug);
  return <PostLayout frontmatter={frontmatter}>
    {content}
  </PostLayout>;
}

export default async function PostPage({ params }: Props) {
  const slug = params.then(p => p.slug);

  return (
    <Suspense fallback={<span>Loading ...</span>}>
      <PageContent slug={slug} />
    </Suspense>
  );
}
