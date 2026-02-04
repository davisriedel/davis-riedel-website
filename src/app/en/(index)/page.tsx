import Link from "next/link";
import { AnimatedLink } from "@/components/animated-link";
import { ObsidianPluginDownloads } from "@/components/obsidian-plugin-downloads";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const metadata = {
  alternates: {
    languages: {
      "en-US": "/en",
      "de-DE": "/de",
    },
  },
};

export default function Home() {
  return (
    <>
      <section className="space-y-4" id="developer">
        <h2 className="text-3xl">Open-Source Developer</h2>
        <Card className="p-4 shadow-md">
          <h3 className="text-xl">
            <AnimatedLink href="/en/obsidian-typewriter-mode">
              Obsidian&nbsp;Typewriter&nbsp;Mode
            </AnimatedLink>
          </h3>
          <p className="mt-2">
            I am developing the{" "}
            <AnimatedLink
              href="https://obsidian.md/"
              rel="noreferrer"
              target="_blank"
            >
              Obsidian
            </AnimatedLink>{" "}
            plugin{" "}
            <AnimatedLink
              href="https://github.com/davisriedel/obsidian-typewriter-mode"
              rel="noreferrer"
              target="_blank"
            >
              Typewriter&nbsp;Mode
            </AnimatedLink>{" "}
            with currently over{" "}
            <ObsidianPluginDownloads lang="de" pluginId="typewriter-mode" />{" "}
            downloads.
          </p>
          <p className="mt-2">
            You can support the continued development of this plugin on{" "}
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
            . Thank you for your support!
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
        </Card>
        <div className="mt-4 flex flex-col items-center">
          <Button asChild>
            <Link href="/en/software">Learn more</Link>
          </Button>
        </div>
      </section>

      <section className="space-y-4" id="politician">
        <h2 className="text-3xl">Politician</h2>
        <Card className="p-4 shadow-md">
          <h3 className="text-xl">Local Councilor in Pforzheim-Eutingen</h3>
          <p className="mt-2">
            I was elected as a member of the{" "}
            <AnimatedLink
              href="https://www.spd-pforzheim.de/eutingen"
              rel="noreferrer"
              target="_blank"
            >
              Local Council in Pforzheim-Eutingen
            </AnimatedLink>{" "}
            (Germany) on June 9, 2024.
          </p>
          <p>
            I am thankful to represent the citizens of Eutingen and to bring
            their concerns to the attention of the city council. You can find
            out more about the work of our local group on the SPD Pforzheim
            website:
          </p>
          <div className="mt-4 flex flex-col items-center">
            <Button asChild>
              <Link
                href="https://www.spd-pforzheim.de/eutingen"
                rel="noreferrer"
                target="_blank"
              >
                Visit SPD Eutingen (DE)
              </Link>
            </Button>
          </div>
        </Card>
        <Card className="p-4 shadow-md">
          <h3 className="text-xl">Social Democrat</h3>
          <p className="mt-2">
            I have been a member of the{" "}
            <AnimatedLink
              href="https://www.spd.de"
              rel="noreferrer"
              target="_blank"
            >
              Social Democratic Party of Germany (SPD)
            </AnimatedLink>{" "}
            since 2016. I ran for the European Parliament in 2024. I am chair of
            the{" "}
            <AnimatedLink
              href="https://www.spd-enz-pf.de"
              rel="noreferrer"
              target="_blank"
            >
              Jusos Enzkreis/Pforzheim
            </AnimatedLink>
            , the local youth organization of my party. I am a board member of
            the district association{" "}
            <AnimatedLink
              href="https://www.spd-enz-pf.de"
              rel="noreferrer"
              target="_blank"
            >
              SPD Enzkreis/Pforzheim
            </AnimatedLink>{" "}
            and Vice-President of the local association{" "}
            <AnimatedLink
              href="https://www.spd-enz-pf.de"
              rel="noreferrer"
              target="_blank"
            >
              SPD Pforzheim
            </AnimatedLink>
            .
          </p>
        </Card>
      </section>

      <section className="space-y-4" id="student">
        <h2 className="text-3xl">Student</h2>
        <Card className="p-4 shadow-md">
          <h3 className="text-xl">
            Master of Education Mathematics and Computer Science
          </h3>
          <p className="mt-2">
            I am currently studying to become a high school teacher for the
            subjects mathematics and computer science at the{" "}
            <AnimatedLink
              href="https://uni-tuebingen.de/"
              rel="noreferrer"
              target="_blank"
            >
              University of Tübingen
            </AnimatedLink>{" "}
            in Germany.
          </p>
        </Card>
        <Card className="p-4 shadow-md">
          <h3 className="text-xl">Philosophy (Akademiestudium)</h3>
          <p className="mt-2">
            I am currently taking courses in Philosophy at the{" "}
            <AnimatedLink
              href="https://www.fernuni-hagen.de/"
              rel="noreferrer"
              target="_blank"
            >
              Distance-Learning University of Hagen
            </AnimatedLink>{" "}
            in Germany.
          </p>
        </Card>
        <Card className="p-4 shadow-md">
          <h3 className="text-xl">Computer Science B.Sc.</h3>
          <p className="mt-2">
            On September 26, 2025 I obtained my degree Bachelor of Science in
            Computer Science at the{" "}
            <AnimatedLink
              href="https://www.kit.edu"
              rel="noreferrer"
              target="_blank"
            >
              Karlsruhe Institute of Technology (KIT)
            </AnimatedLink>{" "}
            in Germany.
          </p>
        </Card>
        <p>
          Visit this link to learn more about my studies and my specializations{" "}
          <i>(currently only in german)</i>:
        </p>
        <div className="mt-4 flex flex-col items-center">
          <Button asChild>
            <Link href="/de/studium">Learn more (DE)</Link>
          </Button>
        </div>
      </section>

      <section className="space-y-4" id="writer">
        <h2 className="text-3xl">Writer</h2>
        <p>
          I am a hobbyist writer. I enjoy writing poetry and science fiction. I
          am currently working on my debut novel.
        </p>
        {/* <Card className="p-4 bg-white shadow-md"> */}
        {/*   <h3 className="text-xl  text-gray-700">Book Title</h3> */}
        {/*   <p className="mt-2">Description of the book...</p> */}
        {/* </Card> */}
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl">Get to know more about me</h2>
        <p>You can read my resumé here:</p>
        <div className="flex flex-col items-center">
          <Button asChild>
            <Link href="/en/resume">Resumé</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
