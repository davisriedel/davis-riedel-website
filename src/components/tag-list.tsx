import { type TagContent, getTag } from "@/lib/tags";
import React from "react";
import TagLink from "./tag-link";

type Props = {
	lang: "de" | "en";
	tags: (string | TagContent)[];
};

export default async function TagList({ lang, tags }: Props) {
	const tagContents = await Promise.all(
		tags.map(async (tag) =>
			typeof tag === "string" ? await getTag(lang, tag) : tag,
		),
	);
	return (
    <div className="text-indigo-950 dark:text-indigo-400">
      <ul>
        {tagContents.map(
          (it) =>
            it && (
              <li key={it.slug}>
                <TagLink lang={lang} tag={it} />
              </li>
            ),
        )}
      </ul>
    </div>
	);
}
