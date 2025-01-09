import React from "react";
import { PostContent } from "@/lib/posts";
import { TagContent } from "@/lib/tags";
import PostItem from "./post-item";
import Pagination from "./pagination";

type Props = {
  posts: PostContent[];
  tag: TagContent;
  pagination: {
    current: number;
    pages: number;
  };
};

export default function TagPostList({ posts, tag, pagination }: Props) {
  return (
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
          href: () => "/en/posts/tags/[[...slug]]",
          as: (page) =>
            page === 1
              ? "/en/posts/tags/" + tag.slug
              : `/en/posts/tags/${tag.slug}/${page}`,
        }}
      />
    </div>
  );
}
