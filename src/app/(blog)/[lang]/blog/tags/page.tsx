import TagList from "@/components/tag-list";
import { getAllTags } from "@/lib/tags";

type Props = {
	params: Promise<{ lang: "de" | "en" }>;
};

export async function generateStaticParams() {
	return [{ lang: "de" }, { lang: "en" }];
}

export async function generateMetadata({ params }: Props) {
	const { lang } = await params;

	const alternates = {
		languages: {
			"en-US": "/en/blog/tags",
			"de-DE": "/de/blog/tags",
		},
	};

	return lang === "en"
		? {
				title: "All tags",
				description: "A list of all tags.",
				alternates,
			}
		: {
				title: "Alle Tags",
				description: "Eine Liste aller Tags.",
				alternates,
			};
}

export default async function TagIndexPage({ params }: Props) {
	"use cache";

	const { lang } = await params;

	const tags = await getAllTags(lang);

	return (
		<section className="space-y-4">
			<h2 className="text-3xl">Tags</h2>
			<TagList lang={lang} tags={tags} />
		</section>
	);
}
