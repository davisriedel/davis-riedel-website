import Link from "next/link";
import type { TagContent } from "@/lib/tags";

interface Props {
  lang: "de" | "en";
  tag: TagContent;
}

export default function Tag({ lang, tag }: Props) {
  return (
    <Link
      as={`/${lang}/blog/tags/${tag.slug}`}
      href={`/${lang}/blog/tags/[[...slug]]`}
    >
      {`#${tag.name}`}
    </Link>
  );
}
