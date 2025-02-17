import {
	unstable_cacheLife as cacheLife,
	unstable_cacheTag as cacheTag,
} from "next/cache";
import { CmsMetadata } from "./cms-metadata";

export type TagContent = {
	readonly slug: string;
	readonly name: string;
  readonly languageAlternates?: Record<"de-DE" | "en-US", string>;
};

export async function getAllTags(lang: "de" | "en") {
	"use cache";
	cacheLife("max"); // next rebuilds and clears all caches when a change in decap cms is committed.
	cacheTag("cms", "tags");
	const tags = new CmsMetadata<TagContent>(`cms/${lang}/tags.yml`, "tags");
	return await tags.getAll();
}

async function getTagMap(lang: "de" | "en") {
	"use cache";
	cacheLife("max"); // next rebuilds and clears all caches when a change in decap cms is committed.
	cacheTag("cms", "tags");
	const tags = new CmsMetadata<TagContent>(`cms/${lang}/tags.yml`, "tags");
	return await tags.generateMetadataMap();
}

export async function getTag(lang: "de" | "en", slug: string) {
	return (await getTagMap(lang))[slug];
}
