import { headingFont } from "@/assets/fonts";
import { AnimatedLink } from "@/components/animated-link";
import { ObsidianPluginDownloads } from "@/components/obsidian-plugin-downloads";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";

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
			<section id="programmierer" className="space-y-4">
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
							target="_blank"
							rel="noreferrer"
						>
							Obsidian
						</AnimatedLink>{" "}
						Plugin{" "}
						<AnimatedLink
							href="https://github.com/davisriedel/obsidian-typewriter-mode"
							target="_blank"
							rel="noreferrer"
						>
							Typewriter&nbsp;Mode
						</AnimatedLink>
						, das aktuell bereits über{" "}
						<ObsidianPluginDownloads pluginId="typewriter-mode" lang="de" /> mal
						heruntergeladen wurde.
					</p>

					<p className="mt-2">
						Sie können die Weiterentwicklung des Plugins auf{" "}
						<AnimatedLink
							href="https://github.com/sponsors/davisriedel"
							target="_blank"
							rel="noreferrer"
						>
							GitHub&nbsp;Sponsors
						</AnimatedLink>{" "}
						oder{" "}
						<AnimatedLink
							href="https://www.buymeacoffee.com/davis.riedel"
							target="_blank"
							rel="noreferrer"
						>
							Buy&nbsp;Me&nbsp;a&nbsp;Coffee
						</AnimatedLink>{" "}
						unterstützen. Vielen Dank für Ihre Unterstützung!
					</p>
					<div className="flex flex-col items-center mt-4">
						<div>
							<a
								href="https://www.buymeacoffee.com/davis.riedel"
								target="_blank"
								className="mr-2 inline-block"
								rel="noreferrer"
							>
								<img
									src="https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black"
									alt="Buy Me A Coffee Logo"
								/>
							</a>
							<a
								href="https://github.com/sponsors/davisriedel"
								target="_blank"
								className="inline-block"
								rel="noreferrer"
							>
								<img
									src="https://img.shields.io/badge/sponsor-30363D?style=for-the-badge&logo=GitHub-Sponsors&logoColor=#EA4AAA"
									alt="GitHub Sponsors Logo"
								/>
							</a>
						</div>
					</div>
					<div className="flex flex-col items-center mt-4">
						<Button
							effect="gooeyLeft"
							className={cn(
								"bg-indigo-950 hover:bg-indigo-800 text-white text-xl",
								headingFont.className,
							)}
							asChild
						>
							<Link href="/en/obsidian-typewriter-mode">
								Mehr erfahren (EN)
							</Link>
						</Button>
					</div>
				</Card>
			</section>

			<section id="politiker" className="space-y-4">
				<h2 className="text-3xl">Politiker</h2>
				<Card className="p-4 shadow-md">
					<h3 className="text-xl">Ortschaftsrat in Pforzheim-Eutingen</h3>
					<p className="mt-2">
						Ich wurde am 9. Juni 2024 in den{" "}
						<AnimatedLink
							href="https://www.spd-pforzheim.de/eutingen"
							target="_blank"
							rel="noreferrer"
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
					<div className="flex flex-col items-center mt-4">
						<Button
							effect="gooeyLeft"
							className={cn(
								"bg-indigo-950 hover:bg-indigo-800 text-white text-xl",
								headingFont.className,
							)}
							asChild
						>
							<Link
								href="https://www.spd-pforzheim.de/eutingen"
								target="_blank"
								rel="noreferrer"
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
							target="_blank"
							rel="noreferrer"
						>
							Sozialdemokratischen Partei Deutschlands (SPD)
						</AnimatedLink>
						. 2024 habe ich für das Europäische Parlament kandidiert. Ich bin
						Beisitzer im Kreisvorstand der{" "}
						<AnimatedLink
							href="https://www.spd-enz-pf.de"
							target="_blank"
							rel="noreferrer"
						>
							SPD Enzkreis/Pforzheim
						</AnimatedLink>{" "}
						und stv. Vorsitzender der{" "}
						<AnimatedLink
							href="https://www.spd-pforzheim.de"
							target="_blank"
							rel="noreferrer"
						>
							SPD Pforzheim
						</AnimatedLink>
						.
					</p>
				</Card>
			</section>

			<section id="student" className="space-y-4">
				<h2 className="text-3xl">Student</h2>
				<Card className="p-4 shadow-md">
					<h3 className="text-xl">Informatik (B.Sc.)</h3>
					<p className="mt-2">
						Ich studiere aktuell Informatik am{" "}
						<AnimatedLink
							href="https://www.kit.edu"
							target="_blank"
							rel="noreferrer"
						>
							Karlsruher Institut für Technologie (KIT)
						</AnimatedLink>
						.
					</p>
				</Card>
				<Card className="p-4 shadow-md">
					<h3 className="text-xl">Philosophie (Akademiestudium)</h3>
					<p className="mt-2">
						Ich belege aktuell Philosophie-Vorlesungen im Rahmen eines
						Akademiestudiums an der{" "}
						<AnimatedLink
							href="https://www.fernuni-hagen.de/"
							target="_blank"
							rel="noreferrer"
						>
							FernUni Hagen
						</AnimatedLink>
						, um mich für die Zulassung zum Master Philosophie zu qualifizieren.
					</p>
				</Card>
				<p>
					Hier können Sie mehr zu meinem Studium und meinen Spezialisierungen
					erfahren:
				</p>
				<div className="flex flex-col items-center mt-4">
					<Button
						effect="gooeyLeft"
						className={cn(
							"bg-indigo-950 hover:bg-indigo-800 text-white text-xl",
							headingFont.className,
						)}
						asChild
					>
						<Link href="/de/studium">Mehr erfahren</Link>
					</Button>
				</div>
			</section>

			<section id="autor" className="space-y-4">
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
				<div className="flex flex-col items-center ">
					<Button
						effect="gooeyLeft"
						className={cn(
							"bg-indigo-950 hover:bg-indigo-800 text-white text-xl",
							headingFont.className,
						)}
						asChild
					>
						<Link href="/de/lebenslauf">Lebenslauf</Link>
					</Button>
				</div>
			</section>
		</>
	);
}
