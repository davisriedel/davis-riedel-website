import type { TagContent } from "@/lib/tags";
import Link from "next/link";

type Props = {
	tag: TagContent;
};

export default function Tag({ tag }: Props) {
	return (
		<Link href={"/en/posts/tags/[[...slug]]"} as={`/en/posts/tags/${tag.slug}`}>
			{`#${tag.name}`}
		</Link>
	);
}
