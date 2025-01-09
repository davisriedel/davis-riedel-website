import { promises as fs } from 'node:fs';
import yaml from "js-yaml";
import path from 'node:path';

export type TagContent = {
  readonly slug: string;
  readonly name: string;
};

async function generateTagMap(): Promise<{ [key: string]: TagContent }> {
  "use cache";

  const tags = await listTags();
  let result: { [key: string]: TagContent } = {};
  for (const tag of tags) {
    result[tag.slug] = tag;
  }
  return result;
}

export async function getTag(slug: string) {
  "use cache";

  return (await generateTagMap())[slug];
}

export async function listTags(): Promise<TagContent[]> {
  "use cache";

  const tagsFile = await fs.readFile(path.join(process.cwd(), "cms/tags.yml"), "utf8");
  const tags = yaml.load(tagsFile) as { tags: TagContent[] };
  return tags.tags;
}
