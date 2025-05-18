import { getAllTags } from "@/lib/tags";
import { redirect } from "next/navigation";

export const dynamic = "force-static";
export const dynamicParams = false;

export async function generateStaticParams() {
	return await Promise.all(
		(["de", "en"] as const).map(async (lang) => {
			const tags = await getAllTags(lang);
			return tags.map((tag) => ({ lang, tag: tag.slug }));
		}),
	);
}

export default async function Redirect({
	params,
}: { params: Promise<{ lang: "de" | "en"; tag: string }> }) {
	const { lang, tag } = await params;
	redirect(`/${lang}/blog/tags/${tag}/1`);
}
