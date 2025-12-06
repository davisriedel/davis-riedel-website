import { Footer as DeFooter } from "@/components/de/footer";
import { NavBar as DeNavBar } from "@/components/de/navbar";
import { Footer as EnFooter } from "@/components/en/footer";
import { NavBar as EnNavBar } from "@/components/en/navbar";
import { Header } from "@/components/header";
import { countPosts, fetchAllPosts } from "@/lib/posts";
import { getAllTags } from "@/lib/tags";
import type { PropsWithChildren } from "react";

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

export default async function SubpageLayout({
	children,
	params,
}: PropsWithChildren<{ params: Promise<{ lang: string }> }>) {
	"use cache";

	const { lang } = await params;

	return (
		<div>
			<Header
				lang={lang as "de" | "en"}
				navBar={lang === "en" ? <EnNavBar /> : <DeNavBar />}
			/>

			<main className="max-w-3xl mx-auto px-6 py-12 space-y-16">
				{children}
			</main>

			{lang === "en" ? <EnFooter /> : <DeFooter />}
		</div>
	);
}
