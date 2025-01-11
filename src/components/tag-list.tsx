import React from "react";
import TagLink from "./tag-link";
import { getTag, type TagContent } from "@/lib/tags";

type Props = {
  tags: (string | TagContent)[];
};

async function TagItem({ tag }: { tag: string | TagContent }) {
  const tagContent = (typeof tag === 'string') ? (await getTag(tag))! : tag;
  if (!tagContent) return null;
  return <TagLink tag={tagContent} />
}

export default async function TagList({ tags }: Props) {
  return (
    <ul>
      {await Promise.all(tags.map(async (it, i) => (
        <li key={i}>
          <TagItem tag={it} />
        </li>
      )))}
    </ul>
  );
}
