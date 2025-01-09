import React from "react";
import Author from "./author";
import Date from "./date";
import { getAuthor } from "@/lib/authors";
import { PostFrontmatter } from "@/lib/post-frontmatter";
import { parseISO } from "date-fns";
import TagList from "./tag-list";
import { headingFont } from "@/fonts";

type Props = {
  frontmatter: PostFrontmatter;
  children: React.ReactNode;
};

export default async function PostLayout({
  frontmatter: {
    title,
    date,
    author,
    tags,
  },
  children,
}: Props) {
  return (
    <article>
      <header className="mb-8">
        <h2 className={`${headingFont.className} text-3xl`}>
          {title}
        </h2>
        <div className="text-indigo-950 dark:text-indigo-400">
          <Date date={parseISO(date)} />
          <span> | </span>
          <Author author={await getAuthor(author)} />
        </div>
      </header>
      <div className="prose dark:prose-invert">{children}</div>
      <div className="text-indigo-950 dark:text-indigo-400 mt-8"><TagList tags={tags} /></div>
    </article>
  );
}
