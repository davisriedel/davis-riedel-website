import Link from "next/link";
import { AnimatedLink } from "@/components/animated-link";
import { ObsidianPluginDownloads } from "@/components/obsidian-plugin-downloads";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const metadata = {
  alternates: {
    languages: {
      "en-US": "/en/software",
      // 'de-DE': '/de/studium',
    },
  },
};

export default function Resume() {
  return (
    <>
      <section className="space-y-4">
        <p>
          Hey there 👋 I am <b>Davis Riedel</b>. I study Computer Science at
          Karlsruhe Institute of Technology in Germany. In my spare time I
          develop the following open source projects:
        </p>
        <Card className="p-4 shadow-md">
          <h3 className="text-xl">Obsidian Typewriter Mode</h3>
          <p className="mt-2">
            <AnimatedLink
              href="https://github.com/davisriedel/obsidian-typewriter-mode"
              rel="noreferrer"
              target="_blank"
            >
              Typewriter&nbsp;Mode
            </AnimatedLink>{" "}
            is a plugin for{" "}
            <AnimatedLink
              href="https://obsidian.md/"
              rel="noreferrer"
              target="_blank"
            >
              Obsidian
            </AnimatedLink>{" "}
            that adds several features to turn Obsidian into a typewriter-like,
            distraction-free writing environment, including:
          </p>
          <div className="prose dark:prose-invert prose-li:m-0 my-4">
            <ul>
              <li>
                Typewriter scrolling (current line stays at a fixed position on
                the screen)
              </li>
              <li>Highlighting the current line</li>
              <li>Keeping a set number of lines above and below the cursor</li>
              <li>Dimming unfocused paragraphs / sentences</li>
              <li>Fullscreen writing focus</li>
              <li>Limit line length to set number of characters</li>
              <li>Restore the cursor's position when opening files</li>
            </ul>
          </div>
          <p>
            The plugin currently has over{" "}
            <ObsidianPluginDownloads lang="de" pluginId="typewriter-mode" />{" "}
            downloads.
          </p>
          <div className="mt-4 flex flex-row gap-4">
            <Button asChild>
              <Link href="/en/obsidian-typewriter-mode">Learn more</Link>
            </Button>
            <Button asChild>
              <Link
                href="https://github.com/davisriedel/obsidian-typewriter-mode"
                target="_blank"
              >
                GitHub Repo
              </Link>
            </Button>
          </div>
        </Card>
        <Card className="p-4 shadow-md">
          <h3 className="text-xl">Obsidian Fast Stats</h3>
          <p className="mt-2">
            <AnimatedLink
              href="https://github.com/davisriedel/obsidian-typewriter-mode"
              rel="noreferrer"
              target="_blank"
            >
              Fast Stats
            </AnimatedLink>{" "}
            is a plugin for{" "}
            <AnimatedLink
              href="https://obsidian.md/"
              rel="noreferrer"
              target="_blank"
            >
              Obsidian
            </AnimatedLink>{" "}
            that gives you fast, customizable typing statistics (word count,
            reading time, ...) in Obsidian's status bar and accessible via an
            API for other plugins / scripts like <code>dataviewjs</code>.
          </p>
          <p>
            <b>
              This plugin is still a work-in-progress and not released to the
              Obsidian plugin marketplace. However, you can install it via the{" "}
              <i>BRAT</i> plugin.
            </b>
          </p>
          <div className="mt-4 flex flex-row content-center items-center">
            <Button asChild>
              <Link
                href="https://github.com/davisriedel/obsidian-fast-stats"
                target="_blank"
              >
                GitHub Repo
              </Link>
            </Button>
          </div>
        </Card>
      </section>
      <section className="space-y-4">
        <h2 className="text-3xl">Support Me</h2>
        <p className="mt-2">
          You can support me and my work on these projects via{" "}
          <AnimatedLink
            href="https://github.com/sponsors/davisriedel"
            rel="noreferrer"
            target="_blank"
          >
            GitHub&nbsp;Sponsors
          </AnimatedLink>{" "}
          or{" "}
          <AnimatedLink
            href="https://www.buymeacoffee.com/davis.riedel"
            rel="noreferrer"
            target="_blank"
          >
            Buy&nbsp;Me&nbsp;a&nbsp;Coffee
          </AnimatedLink>
          . I am truly thankful for your support!
        </p>
        <div className="mt-4 flex flex-col items-center">
          <div>
            <a
              className="mr-2 inline-block"
              href="https://www.buymeacoffee.com/davis.riedel"
              rel="noreferrer"
              target="_blank"
            >
              <img
                alt="Buy Me A Coffee Logo"
                src="https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black"
              />
            </a>
            <a
              className="inline-block"
              href="https://github.com/sponsors/davisriedel"
              rel="noreferrer"
              target="_blank"
            >
              <img
                alt="GitHub Sponsors Logo"
                src="https://img.shields.io/badge/sponsor-30363D?style=for-the-badge&logo=GitHub-Sponsors&logoColor=#EA4AAA"
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
