"use cache";

import { getAllTags } from "@/lib/tags";
import TagList from "@/components/tag-list";
import { headingFont } from "@/fonts";

export async function generateMetadata() {
  const title = "All tags";
  return {
    title,
    description: "A list of all tags.",
  };
}

export default async function TagIndexPage() {
  const tags = await getAllTags();

  return (
		<section className="space-y-4">
      <h2 className={`${headingFont.className} text-3xl`}>
				Tags
			</h2>
      <TagList tags={tags} />
		</section>
  );
}
