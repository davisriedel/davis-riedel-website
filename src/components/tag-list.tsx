import { type TagContent, getTag } from "@/lib/tags";
import React from "react";
import TagLink from "./tag-link";

type Props = {
	tags: (string | TagContent)[];
};

export default async function TagList({ tags }: Props) {
	const tagContents = await Promise.all(
		tags.map(async (tag) =>
			typeof tag === "string" ? await getTag(tag) : tag,
		),
	);
	return (
		<ul>
			{tagContents.map(
				(it) =>
					it && (
						<li key={it.slug}>
							<TagLink tag={it} />
						</li>
					),
			)}
		</ul>
	);
}
