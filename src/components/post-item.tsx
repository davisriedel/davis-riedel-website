import { PostContent } from "@/lib/posts";
import Date from "./date";
import Link from "next/link";
import { parseISO } from "date-fns";
import { headingFont } from "@/fonts";
import { cn } from "@/lib/utils";
import { AnimatedLink } from "./animated-link";

type Props = {
  post: PostContent;
};

export default async function PostItem({ post }: Props) {
  "use cache";

  return (
    <div>
      <div className="text-indigo-950 dark:text-indigo-400 text-sm">
        <Date date={parseISO(post.frontmatter.date)} />
      </div>
      <Link href={"/en/posts/" + post.frontmatter.slug}>
        <h3 className={cn(headingFont.className, "text-3xl")}>{post.frontmatter.title}</h3>
      </Link>
      <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
      <AnimatedLink href={"/en/posts/" + post.frontmatter.slug}>
        <b>Mehr lesen...</b>
      </AnimatedLink>
    </div>
  );
}
