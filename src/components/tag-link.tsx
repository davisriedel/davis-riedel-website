import Link from "next/link";
import { TagContent } from "@/lib/tags";

type Props = {
  tag: TagContent;
};

export default function Tag({ tag }: Props) {
  return (
    <Link href={"/en/posts/tags/[[...slug]]"} as={`/en/posts/tags/${tag.slug}`}>
      {"#" + tag.name}
    </Link>
  );
}
