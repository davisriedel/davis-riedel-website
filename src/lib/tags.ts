import { promises as fs } from 'node:fs';
import yaml from "js-yaml";
import path from 'node:path';
import { unstable_cacheTag as cacheTag } from 'next/cache'

export type TagContent = {
  readonly slug: string;
  readonly name: string;
};

async function generateTagMap(): Promise<{ [key: string]: TagContent }> {
  "use cache";
  cacheTag("cms", "tags", "generateTagMap");

  const tags = await listTags();
  let result: { [key: string]: TagContent } = {};
  for (const tag of tags) {
    result[tag.slug] = tag;
  }
  return result;
}

export async function getTag(slug: string) {
  "use cache";
  cacheTag("cms", "tags", "getTag");

  return (await generateTagMap())[slug];
}

export async function listTags(): Promise<TagContent[]> {
  "use cache";
  cacheTag("cms", "tags", "listTags");

  const tagsFile = await fs.readFile(path.join(process.cwd(), "cms/tags.yml"), "utf8");
  const tags = yaml.load(tagsFile) as { tags: TagContent[] };
  return tags.tags;
}
