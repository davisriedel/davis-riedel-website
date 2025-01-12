import {
	unstable_cacheLife as cacheLife,
	unstable_cacheTag as cacheTag,
} from "next/cache";
import { CmsMetadata } from "./cms-metadata";

export type AuthorContent = {
	readonly slug: string;
	readonly name: string;
	readonly introduction: string;
};

const authors = new CmsMetadata<AuthorContent>("cms/authors.yml", "authors");

export async function getAllAuthors() {
	"use cache";
	cacheLife("max"); // next rebuilds and clears all caches when a change in decap cms is committed.
	cacheTag("cms", "authors");
	return await authors.getAll();
}

async function getAuthorsMap() {
	"use cache";
	cacheLife("max"); // next rebuilds and clears all caches when a change in decap cms is committed.
	cacheTag("cms", "authors");
	return await authors.generateMetadataMap();
}

export async function getAuthor(slug: string) {
	return (await getAuthorsMap())[slug];
}
