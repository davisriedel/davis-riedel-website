export async function getObsidianPluginDownloads(pluginId: string) {
  const response = await fetch(
    "https://raw.githubusercontent.com/obsidianmd/obsidian-releases/refs/heads/master/community-plugin-stats.json",
    {
      next: { revalidate: 86_400 }, // Revalidate once per day (24 hours)
    }
  );
  const json = await response.json();
  return json[pluginId].downloads as number;
}

function formatCompactGerman(nr: number) {
  if (nr >= 1_000_000_000) {
    return `${(nr / 1_000_000_000).toFixed(1).replace(".", ",")} Mrd.`;
  }
  if (nr >= 1_000_000) {
    return `${(nr / 1_000_000).toFixed(1).replace(".", ",")} Mio.`;
  }
  if (nr >= 1000) {
    return `${(nr / 1000).toFixed(1).replace(".", ",")} Tsd.`;
  }
  return nr.toString().replace(".", ",");
}

export async function getObsidianPluginDownloadsString(
  pluginId: string,
  locale: "en" | "de"
) {
  const downloads = await getObsidianPluginDownloads(pluginId);

  // Custom formatter for german
  if (locale === "de") {
    return formatCompactGerman(downloads);
  }

  const formatter = Intl.NumberFormat(locale, {
    notation: "compact",
    compactDisplay: "short",
  });
  return formatter.format(downloads);
}
