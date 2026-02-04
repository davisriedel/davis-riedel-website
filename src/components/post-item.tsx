import { parseISO } from "date-fns";
import Link from "next/link";
import type { PostContent } from "@/lib/posts";
import { AnimatedLink } from "./animated-link";
import DateComponent from "./date";

interface Props {
  lang: "de" | "en";
  post: PostContent;
}

export default function PostItem({ lang, post }: Props) {
  return (
    <div>
      <div className="text-secondary-foreground text-sm">
        <DateComponent date={parseISO(post.frontmatter.date)} lang={lang} />
      </div>
      <Link href={`/${lang}/blog/${post.frontmatter.slug}`}>
        <h3 className="text-3xl">{post.frontmatter.title}</h3>
      </Link>
      {/* biome-ignore lint/security/noDangerouslySetInnerHtml: needed */}
      <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
      <AnimatedLink href={`/${lang}/blog/${post.frontmatter.slug}`}>
        <b>Mehr lesen...</b>
      </AnimatedLink>
    </div>
  );
}
