import type { TagContent } from "@/lib/tags";
import Link from "next/link";

type Props = {
	lang: "de" | "en";
	tag: TagContent;
};

export default function Tag({ lang, tag }: Props) {
	return (
		<Link
			href={`/${lang}/blog/tags/[[...slug]]`}
			as={`/${lang}/blog/tags/${tag.slug}`}
		>
			{`#${tag.name}`}
		</Link>
	);
}
