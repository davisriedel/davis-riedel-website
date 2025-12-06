import { toHast } from "mdast-util-to-hast";
import { cacheLife } from "next/cache";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import html, { type Options } from "remark-html";

export const metadata = {
	alternates: {
		languages: {
			"en-US": "/en/obsidian-typewriter-mode",
		},
	},
};

// Define a custom handler for links
const customHtmlHandlers: Options["handlers"] = {
	link(_, node) {
		const props: Record<string, string> = {};

		// Add attributes for external links
		if (node.url.startsWith("http")) {
			props.href = node.url;
		} else {
			props.href = `https://github.com/davisriedel/obsidian-typewriter-mode/blob/main/${node.url}`;
		}
		props.target = "_blank";

		const children = node.children.map(toHast);

		return { type: "element", tagName: "a", properties: props, children };
	},
};

export default async function Page() {
	"use cache";
	cacheLife("hours");

	const res = await fetch(
		"https://raw.githubusercontent.com/davisriedel/obsidian-typewriter-mode/refs/heads/main/README.md",
	);
	const markdown = await res.text();
	const rendered = await remark()
		.use(html, { handlers: customHtmlHandlers })
		.use(remarkGfm)
		.process(markdown);

	// biome-ignore lint/security/noDangerouslySetInnerHtml: safe, because executed in server component
	return <div dangerouslySetInnerHTML={{ __html: rendered.toString() }} />;
}
