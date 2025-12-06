import { countPosts, fetchAllPosts } from "@/lib/posts";
import { getAllTags } from "@/lib/tags";
import type { Metadata } from "next";
import RootLayoutBody from "../../RootLayoutBody";

export const metadata: Metadata = {
	title: "Davis Riedel",
};

export async function generateStaticParams() {
	return (
		await Promise.all(
			(["de", "en"] as const).map(async (lang) => {
				const postContents = await fetchAllPosts(lang);
				const postParams = postContents.map((post) => ({
					lang,
					slug: post.frontmatter.slug,
				}));

				const postCount = await countPosts(lang);
				const pages = Math.ceil(postCount / 10);
				const pageParams = Array.from({ length: pages }, (_, index) => {
					return { lang, page: (index + 1).toString() };
				});

				const tags = await getAllTags(lang);
				const tagParams = await Promise.all(
					tags.map(async (tag) => {
						const postCount = await countPosts(lang, tag.slug);
						const pages = Math.ceil(postCount / 10);
						return Array.from({ length: pages }, (_, index) => {
							return { lang, tag: tag.slug, page: (index + 1).toString() };
						});
					}),
				);
				const tagParamsIndexPage = tags.map((tag) => ({ lang, tag: tag.slug }));

				return [
					{ lang },
					tagParamsIndexPage,
					postParams,
					pageParams,
					tagParams,
				];
			}),
		)
	).flat(4);
}

export default async function RootLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode;
	params: Promise<{ lang: string }>;
}>) {
	"use cache";

	const { lang } = await params;

	return (
		<html lang={lang as "de" | "en" } suppressHydrationWarning>
			<RootLayoutBody>{children}</RootLayoutBody>
		</html>
	);
}
