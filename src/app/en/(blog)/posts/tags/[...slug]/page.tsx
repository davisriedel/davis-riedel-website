import TagPostList from "@/components/tag-post-list";
import { headingFont } from "@/fonts";
import { listPostContent, countPosts } from "@/lib/posts";
import { getTag, listTags } from "@/lib/tags";
import { Suspense } from "react";

type Props = {
  params: Promise<{ slug: string[] }>
}

export async function generateStaticParams() {
  const tags = await listTags();
  const paths = await Promise.all(tags.flatMap(async (tag) => {
    const postCount = await countPosts(tag.slug);
    const pages = Math.ceil(postCount / 10);
    return Array.from({ length: pages }, (_, index) => {
      if (index === 0) {
        return { slug: [tag.slug] };
      }
      return { slug: [tag.slug, (index + 1).toString()] };
    });
  }));
  return paths;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const [tagSlug] = slug;
  const tag = await getTag(tagSlug);

  return {
    title: tag.name,
    description: `Posts tagged with "${tag.name}".`,
  };
}

async function PageContent({ slug }: { slug: Promise<string[]> }) {
  const [tagSlug, page] = await slug;
  const tag = await getTag(tagSlug);
  const currentPage = page ? parseInt(page) : 1;

  const posts = await listPostContent(currentPage, 10, tagSlug);
  const postCount = await countPosts(tagSlug);
  const pagination = {
    current: currentPage,
    pages: Math.ceil(postCount / 10),
  };

  return <>
      <h2 className={`${headingFont.className} text-3xl`}>
        All posts with tag: <i>{tag.name}</i>
      </h2>
      <TagPostList posts={posts} tag={tag} pagination={pagination} />
  </>;
}

export default async function TagIndexPage({ params }: Props) {
  const slug = params.then(p => p.slug);

  return (
    <section className="space-y-4">
      <Suspense fallback={<span>Loading ...</span>}>
        <PageContent slug={slug} />
      </Suspense>
		</section>
  );
}
