import {
	unstable_cacheLife as cacheLife,
	unstable_cacheTag as cacheTag,
} from "next/cache";
import { CmsMetadata } from "./cms-metadata";

export type TagContent = {
	readonly slug: string;
	readonly name: string;
};

const tags = new CmsMetadata<TagContent>("cms/tags.yml", "tags");

export async function getAllTags() {
	"use cache";
	cacheLife("max"); // next rebuilds and clears all caches when a change in decap cms is committed.
	cacheTag("cms", "tags");
	return await tags.getAll();
}

async function getTagMap() {
	"use cache";
	cacheLife("max"); // next rebuilds and clears all caches when a change in decap cms is committed.
	cacheTag("cms", "tags");
	return await tags.generateMetadataMap();
}

export async function getTag(slug: string) {
	return (await getTagMap())[slug];
}
