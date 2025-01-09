import React from "react";
import { PostContent } from "@/lib/posts";
import PostItem from "./post-item";
import TagLink from "./tag-link";
import Pagination from "./pagination";
import { TagContent } from "@/lib/tags";

type Props = {
  posts: PostContent[];
  tags: TagContent[];
  pagination: {
    current: number;
    pages: number;
  };
};

export default function PostList({ posts, tags, pagination }: Props) {
  return (
    <div>
      <div>
        <ul className="space-y-4 mb-4">
          {posts.map((it, i) => (
            <li key={i}>
              <PostItem post={it} />
            </li>
          ))}
        </ul>
        <Pagination
          current={pagination.current}
          pages={pagination.pages}
          link={{
            href: (page) => (page === 1 ? "/en/posts" : "/en/posts/[page]"),
            as: (page) => (page === 1 ? "" : "/en/posts/" + page),
          }}
        />
      </div>
      <div className="text-indigo-950 dark:text-indigo-400 mt-8">
        <ul>
          {tags.map((it, i) => (
            <li key={i}>
              <TagLink tag={it} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
