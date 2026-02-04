import { getObsidianPluginDownloadsString } from "@/lib/obsidian-plugin-downloads";

export async function ObsidianPluginDownloads({
  pluginId,
  lang,
}: {
  pluginId: string;
  lang: "en" | "de";
}) {
  const downloads = await getObsidianPluginDownloadsString(pluginId, lang);
  return <span>{downloads}</span>;
}
