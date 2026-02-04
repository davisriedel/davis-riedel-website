import { getTag, type TagContent } from "@/lib/tags";
import TagLink from "./tag-link";

interface Props {
  lang: "de" | "en";
  tags: (string | TagContent)[];
}

export default async function TagList({ lang, tags }: Props) {
  const tagContents = await Promise.all(
    tags.map(async (tag) =>
      typeof tag === "string" ? await getTag(lang, tag) : tag
    )
  );
  return (
    <div className="text-secondary-foreground">
      <ul>
        {tagContents.map(
          (it) =>
            it && (
              <li key={it.slug}>
                <TagLink lang={lang} tag={it} />
              </li>
            )
        )}
      </ul>
    </div>
  );
}
