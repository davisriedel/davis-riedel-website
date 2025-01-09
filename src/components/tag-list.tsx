import React from "react";
import TagLink from "./tag-link";
import { getTag, TagContent } from "@/lib/tags";

type Props = {
  tags: (string | TagContent)[];
};

export default async function TagList({ tags }: Props) {
  "use cache";

  return (
    <ul>
      {await Promise.all(tags.map(async (it, i) => (
        <li key={i}>
          <TagLink tag={typeof it === 'string' ? await getTag(it) : it} />
        </li>
      )))}
    </ul>
  );
}
