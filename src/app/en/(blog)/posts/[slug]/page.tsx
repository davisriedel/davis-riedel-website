import PostLayout from "@/components/post-layout";
import { fetchAllPosts, getPost } from '@/lib/posts';
import { notFound } from "next/navigation";
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

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description ?? ""
  };
}

async function PageContent({ slug }: { slug: Promise<string> }) {
  const post = await getPost(await slug);
  if (!post) return notFound();
  const { content, frontmatter } = post;
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
