import { promises as fs } from 'node:fs';
import yaml from "js-yaml";
import path from 'node:path';
import { unstable_cacheLife as cacheLife } from 'next/cache'

export type AuthorContent = {
  readonly slug: string;
  readonly name: string;
  readonly introduction: string;
};

async function generateAuthorMap(): Promise<{ [key: string]: AuthorContent }> {
  "use cache";
  cacheLife("days");

  const tagsFile = await fs.readFile(path.join(process.cwd(), "cms/authors.yml"), "utf8");
  const authors = yaml.load(tagsFile) as { authors: AuthorContent[] };
  let result: { [key: string]: AuthorContent } = {};
  for (const author of authors.authors) {
    result[author.slug] = author;
  }
  return result;
}

export async function getAuthor(slug: string) {
  "use cache";
  cacheLife("days");

  return (await generateAuthorMap())[slug];
}
