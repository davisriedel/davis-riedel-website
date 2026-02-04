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
      <section className="space-y-4" id="programmierer">
        <h2 className="text-3xl">Open-Source Entwickler</h2>
        <Card className="p-4 shadow-md">
          <h3 className="text-xl">
            <AnimatedLink href="/en/obsidian-typewriter-mode">
              Obsidian&nbsp;Typewriter&nbsp;Mode
            </AnimatedLink>
          </h3>
          <p className="mt-2">
            Ich entwickle das{" "}
            <AnimatedLink
              href="https://obsidian.md/"
              rel="noreferrer"
              target="_blank"
            >
              Obsidian
            </AnimatedLink>{" "}
            Plugin{" "}
            <AnimatedLink
              href="https://github.com/davisriedel/obsidian-typewriter-mode"
              rel="noreferrer"
              target="_blank"
            >
              Typewriter&nbsp;Mode
            </AnimatedLink>
            , das aktuell bereits über{" "}
            <ObsidianPluginDownloads lang="de" pluginId="typewriter-mode" /> mal
            heruntergeladen wurde.
          </p>

          <p className="mt-2">
            Sie können die Weiterentwicklung des Plugins auf{" "}
            <AnimatedLink
              href="https://github.com/sponsors/davisriedel"
              rel="noreferrer"
              target="_blank"
            >
              GitHub&nbsp;Sponsors
            </AnimatedLink>{" "}
            oder{" "}
            <AnimatedLink
              href="https://www.buymeacoffee.com/davis.riedel"
              rel="noreferrer"
              target="_blank"
            >
              Buy&nbsp;Me&nbsp;a&nbsp;Coffee
            </AnimatedLink>{" "}
            unterstützen. Vielen Dank für Ihre Unterstützung!
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
          <div className="mt-4 flex flex-col items-center">
            <Button asChild>
              <Link href="/en/obsidian-typewriter-mode">
                Mehr erfahren (EN)
              </Link>
            </Button>
          </div>
        </Card>
      </section>

      <section className="space-y-4" id="politiker">
        <h2 className="text-3xl">Politiker</h2>
        <Card className="p-4 shadow-md">
          <h3 className="text-xl">Ortschaftsrat in Pforzheim-Eutingen</h3>
          <p className="mt-2">
            Ich wurde am 9. Juni 2024 in den{" "}
            <AnimatedLink
              href="https://www.spd-pforzheim.de/eutingen"
              rel="noreferrer"
              target="_blank"
            >
              Ortschaftsrat Eutingen
            </AnimatedLink>{" "}
            in Pforzheim gewählt.
          </p>
          <p>
            Ich freue mich sehr, die Bürger:innen Eutingens und ihre Anliegen
            gegenüber der Stadt vertreten zu drüfen. Auf der Website der SPD
            Pforzheim können Sie mehr zur Arbeit unserer Ortschaftsratsfraktion
            erfahren:
          </p>
          <div className="mt-4 flex flex-col items-center">
            <Button asChild>
              <Link
                href="https://www.spd-pforzheim.de/eutingen"
                rel="noreferrer"
                target="_blank"
              >
                Zur SPD Eutingen
              </Link>
            </Button>
          </div>
        </Card>
        <Card className="p-4 shadow-md">
          <h3 className="text-xl">Sozialdemokrat</h3>
          <p className="mt-2">
            Ich bin bereits seit 2016 Mitglied der{" "}
            <AnimatedLink
              href="https://www.spd.de"
              rel="noreferrer"
              target="_blank"
            >
              Sozialdemokratischen Partei Deutschlands (SPD)
            </AnimatedLink>
            . 2024 habe ich für das Europäische Parlament kandidiert. Ich bin
            Kreisvorsitzender der{" "}
            <AnimatedLink
              href="https://www.jusos-enz-pf.de"
              rel="noreferrer"
              target="_blank"
            >
              Jusos Enzkreis/Pforzheim
            </AnimatedLink>
            , Beisitzer im Kreisvorstand der{" "}
            <AnimatedLink
              href="https://www.spd-enz-pf.de"
              rel="noreferrer"
              target="_blank"
            >
              SPD Enzkreis/Pforzheim
            </AnimatedLink>{" "}
            und stv. Vorsitzender der{" "}
            <AnimatedLink
              href="https://www.spd-pforzheim.de"
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
          <h3 className="text-xl">Lehramt Mathematik & Informatik (M.Ed.)</h3>
          <p className="mt-2">
            Ich studiere aktuell gymnasiales Lehramt für die Fächer Mathematik
            und Informatik als Quereinstieg an der{" "}
            <AnimatedLink
              href="https://uni-tuebingen.de/"
              rel="noreferrer"
              target="_blank"
            >
              Universität Tübingen
            </AnimatedLink>{" "}
            mit dem Studienziel Master of Education.
          </p>
        </Card>
        <Card className="p-4 shadow-md">
          <h3 className="text-xl">Philosophie (Akademiestudium)</h3>
          <p className="mt-2">
            Ich belege aktuell Philosophie-Vorlesungen im Rahmen eines
            Akademiestudiums an der{" "}
            <AnimatedLink
              href="https://www.fernuni-hagen.de/"
              rel="noreferrer"
              target="_blank"
            >
              FernUni Hagen
            </AnimatedLink>
            .
          </p>
        </Card>
        <Card className="p-4 shadow-md">
          <h3 className="text-xl">Informatik B.Sc.</h3>
          <p className="mt-2">
            Am 26.09.2025 habe ich meinen Abschluss Informatik Bachelor of
            Science am{" "}
            <AnimatedLink
              href="https://www.kit.edu"
              rel="noreferrer"
              target="_blank"
            >
              Karlsruher Institut für Technologie (KIT)
            </AnimatedLink>{" "}
            erlangt.
          </p>
        </Card>
        <p>
          Hier können Sie mehr zu meinem Studium und meinen Spezialisierungen
          erfahren:
        </p>
        <div className="mt-4 flex flex-col items-center">
          <Button asChild>
            <Link href="/de/studium">Mehr erfahren</Link>
          </Button>
        </div>
      </section>

      <section className="space-y-4" id="autor">
        <h2 className="text-3xl">Schriftsteller</h2>
        <p>
          Ich bin Hobby-Schriftsteller und schreibe meistens Science-Fiction und
          Lyrik. Aktuell arbeite ich an meinem Debut-Roman.
        </p>
        {/* <Card className="p-4 bg-white shadow-md"> */}
        {/*   <h3 className="text-xl  text-gray-700">Book Title</h3> */}
        {/*   <p className="mt-2">Description of the book...</p> */}
        {/* </Card> */}
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl">Erfahren Sie mehr über mich</h2>
        <p>Hier können Sie meinen ausführlichen Lebenslauf lesen:</p>
        <div className="flex flex-col items-center">
          <Button asChild>
            <Link href="/de/lebenslauf">Lebenslauf</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
