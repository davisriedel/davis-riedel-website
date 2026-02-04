import { CmsMetadata } from "./cms-metadata";

export interface AuthorContent {
  readonly slug: string;
  readonly name: string;
  readonly introduction: string;
}

const authors = new CmsMetadata<AuthorContent>("cms/authors.yml", "authors");

export async function getAllAuthors() {
  return await authors.getAll();
}

async function getAuthorsMap() {
  return await authors.generateMetadataMap();
}

export async function getAuthor(slug: string) {
  return (await getAuthorsMap())[slug];
}
