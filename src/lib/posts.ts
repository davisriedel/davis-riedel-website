import { promises as fs } from "node:fs";
import path from "node:path";
import { compileMDX } from "next-mdx-remote/rsc";
import {
	unstable_cacheLife as cacheLife,
	unstable_cacheTag as cacheTag,
} from "next/cache";
import type { ReactNode } from "react";
import type { PostFrontmatter } from "./post-frontmatter";

const postsDirectory = path.join(process.cwd(), "cms/posts");

export type PostContent = {
	readonly frontmatter: PostFrontmatter;
	readonly excerpt: string;
	readonly fullPath: string;
	readonly content: ReactNode;
};

function truncateWithEllipses(text: string, max: number) {
	return text.substr(0, max - 1) + (text.length > max ? "&hellip;" : "");
}

export async function fetchAllPosts(): Promise<PostContent[]> {
	"use cache";
	cacheLife("max"); // next rebuilds and clears all caches when a change in decap cms is committed.
	cacheTag("cms", "posts");

	// Get file names under /posts
	const fileNames = await fs.readdir(postsDirectory);
	const allPostsData = await Promise.all(
		fileNames
			.filter((it) => it.endsWith(".mdx"))
			.map(async (fileName) => {
				// Read markdown file as string
				const fullPath = path.join(postsDirectory, fileName);
				const fileContents = await fs.readFile(fullPath, "utf8");

				const { content, frontmatter } = await compileMDX<PostFrontmatter>({
					source: fileContents,
					options: { parseFrontmatter: true },
				});

				const ReactDOMServer = (await import("react-dom/server")).default;
				const plainContent = ReactDOMServer.renderToString(content).replace(
					/\<(?!b|i|strong|em).*?\>/g,
					"",
				);
				const excerpt = truncateWithEllipses(plainContent, 250);

				const data = { frontmatter, content, excerpt, fullPath };

				const slug = fileName.replace(/\.mdx$/, "");

				// Validate slug string
				if (data.frontmatter.slug !== slug) {
					throw new Error(
						"slug field not match with the path of its content source",
					);
				}

				return data;
			}),
	);

	// Sort posts by date
	return allPostsData.sort((a, b) => {
		if (a.frontmatter.date < b.frontmatter.date) {
			return 1;
		}
		return -1;
	});
}

export async function countPosts(tag?: string): Promise<number> {
	"use cache";
	cacheLife("max"); // next rebuilds and clears all caches when a change in decap cms is committed.
	cacheTag("cms", "posts");

	const posts = await fetchAllPosts();
	if (tag) {
		return posts.filter((it) => it.frontmatter.tags?.includes(tag)).length;
	}
	return posts.length;
}

export async function listPostContent(
	page: number,
	limit: number,
	tag?: string,
): Promise<PostContent[]> {
	"use cache";
	cacheLife("max"); // next rebuilds and clears all caches when a change in decap cms is committed.
	cacheTag("cms", "posts");

	return (await fetchAllPosts())
		.filter((it) => !tag || it.frontmatter.tags?.includes(tag))
		.slice((page - 1) * limit, page * limit);
}

async function generatePostsMap() {
	"use cache";
	cacheLife("max"); // next rebuilds and clears all caches when a change in decap cms is committed.
	cacheTag("cms", "posts");

	return Object.fromEntries(
		(await fetchAllPosts()).map((post) => [post.frontmatter.slug, post]),
	);
}

export async function getPost(slug: string) {
	// fast because posts map is cached
	return (await generatePostsMap())[slug];
}
