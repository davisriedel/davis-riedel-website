import { CmsMetadata } from "./cms-metadata";

export interface TagContent {
  readonly slug: string;
  readonly name: string;
  readonly languageAlternates?: Record<"de-DE" | "en-US", string>;
}

export async function getAllTags(lang: "de" | "en") {
  const tags = new CmsMetadata<TagContent>(`cms/${lang}/tags.yml`, "tags");
  return await tags.getAll();
}

async function getTagMap(lang: "de" | "en") {
  const tags = new CmsMetadata<TagContent>(`cms/${lang}/tags.yml`, "tags");
  return await tags.generateMetadataMap();
}

export async function getTag(lang: "de" | "en", slug: string) {
  return (await getTagMap(lang))[slug];
}
