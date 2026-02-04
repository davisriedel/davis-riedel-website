export interface PostFrontmatter {
  title: string;
  date: string;
  slug: string;
  tags: string[];
  author: string;
  description?: string;
  languageAlternates?: Record<"de-DE" | "en-US", string>;
}
