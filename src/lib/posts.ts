import { promises as fs } from "node:fs";
import path from "node:path";
import { compileMDX } from "next-mdx-remote/rsc";
import {
	unstable_cacheLife as cacheLife,
	unstable_cacheTag as cacheTag,
} from "next/cache";
import type { PostFrontmatter } from "./post-frontmatter";
import { MdxInstagramPostFallback } from "@/components/mdx-instagram-post";
import { MdxImageFallback } from "@/components/mdx-image";

export type PostContent = {
	readonly source: string;
	readonly frontmatter: PostFrontmatter;
	readonly excerpt: string;
	readonly fullPath: string;
};

function truncateWithEllipses(text: string, max: number) {
	return text.substr(0, max - 1) + (text.length > max ? "&hellip;" : "");
}

export async function fetchAllPosts(lang: "de" | "en"): Promise<PostContent[]> {
	"use cache";
	cacheLife("max"); // next rebuilds and clears all caches when a change in decap cms is committed.
	cacheTag("cms", "posts");

	const postsDirectory = path.join(process.cwd(), `cms/${lang}/posts`);

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
          // Only render fallbacks for excerpt
          components: { InstagramPost: MdxInstagramPostFallback, Image: MdxImageFallback }
				});

        let excerpt = frontmatter.description;
        if (!excerpt) {
          const ReactDOMServer = (await import("react-dom/server")).default;
          const plainContent = ReactDOMServer.renderToString(content).replace(
            /\<(?!b|i|strong|em).*?\>/g,
            "",
          );
          excerpt = truncateWithEllipses(plainContent, 250);
        }

				const slug = fileName.replace(/\.mdx$/, "");

				// Validate slug string
				if (frontmatter.slug !== slug) {
					throw new Error(
						"slug field does not match with the path of its content source",
					);
				}

				return { source: fileContents, frontmatter, excerpt, fullPath };
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

export async function countPosts(
	lang: "de" | "en",
	tag?: string,
): Promise<number> {
	"use cache";
	cacheLife("max"); // next rebuilds and clears all caches when a change in decap cms is committed.
	cacheTag("cms", "posts");

	const posts = await fetchAllPosts(lang);
	if (tag) {
		return posts.filter((it) => it.frontmatter.tags?.includes(tag)).length;
	}
	return posts.length;
}

export async function listPostContent(
	lang: "de" | "en",
	page: number,
	limit: number,
	tag?: string,
): Promise<PostContent[]> {
	"use cache";
	cacheLife("max"); // next rebuilds and clears all caches when a change in decap cms is committed.
	cacheTag("cms", "posts");

	return (await fetchAllPosts(lang))
		.filter((it) => !tag || it.frontmatter.tags?.includes(tag))
		.slice((page - 1) * limit, page * limit);
}

async function generatePostsMap(lang: "de" | "en") {
	"use cache";
	cacheLife("max"); // next rebuilds and clears all caches when a change in decap cms is committed.
	cacheTag("cms", "posts");

	return Object.fromEntries(
		(await fetchAllPosts(lang)).map((post) => [post.frontmatter.slug, post]),
	);
}

export async function getPost(lang: "de" | "en", slug: string) {
	// fast because posts map is cached
	return (await generatePostsMap(lang))[slug];
}
