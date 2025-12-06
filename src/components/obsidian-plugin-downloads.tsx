import { getObsidianPluginDownloadsString } from "@/lib/obsidian-plugin-downloads";
import { cacheLife } from "next/cache";

export async function ObsidianPluginDownloads({
	pluginId,
	lang,
}: { pluginId: string; lang: "en" | "de" }) {
	"use cache";
	cacheLife("hours");

	const downloads = await getObsidianPluginDownloadsString(pluginId, lang);
	return <span>{downloads}</span>;
}
