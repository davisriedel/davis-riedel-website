export type PostFrontmatter = {
	title: string;
	date: string;
	slug: string;
	tags: string[];
	author: string;
	description?: string;
  alternates?: Record<string, string>;
};
