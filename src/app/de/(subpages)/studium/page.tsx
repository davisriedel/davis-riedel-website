import { headingFont } from "@/assets/fonts";
import { AnimatedLink } from "@/components/animated-link";

export const metadata = {
	alternates: {
		languages: {
			// TODO: Translation missing
			// 'en-US': '/en/studies',
			"de-DE": "/de/studium",
		},
	},
};

export default function Resume() {
	return (
		<section className="space-y-4">
			<h2 className={`${headingFont.className} text-3xl`}>Mein Studium</h2>
			<p>
				<b>
					Ich studiere aktuell Informatik am{" "}
					<AnimatedLink
						href="https://www.kit.edu"
						target="_blank"
						rel="noreferrer"
					>
						Karlsruher Institut für Technologie (KIT)
					</AnimatedLink>
					.
				</b>
			</p>
			<br />
			<p>
				Ich habe zusätzlich zum üblichen Studienumfang weitere
				Mathematik-Vorlesungen belegt (Analysis, Geometrieverarbeitung).
			</p>
			<p>
				Als Ergänzungsfach habe ich BWL mit dem Profil "Informationssysteme im
				Wertpapierhandel" gewählt.
			</p>
			<p>
				Im Wahlbereich meines Studiums habe ich den Fokus auf
				Software-Engineering, Echtzeitsysteme und Mensch-Maschine-Interaktion
				gelegt.
			</p>
			<p>
				Als Schlüsselmodule habe ich zwei Kurse zum Thema Technikphilosophie
				belegt.
			</p>
			<p>
				Meine Proseminar-Arbeit "Software Sabotage in Open Source Projects"
				stammt ebenfalls aus dem Themengebiet der Technikphilosophie. Sie
				erhielt den "Best Paper Award" des Instituts für Softwaredesign und
				-Qualität (SDQ), als kursbeste Arbeit. Sie können die Arbeit{" "}
				<AnimatedLink href="/en/software-sabotage-in-open-source-projects">
					hier lesen
				</AnimatedLink>{" "}
				<i>(auf englisch)</i>.
			</p>
			<br />
			<p>
				Neben meinem Informatik-Studium belege ich aktuell <b>Philosophie</b>
				-Vorlesungen im Rahmen eines{" "}
				<b>
					Akademiestudiums an der{" "}
					<AnimatedLink
						href="https://www.fernuni-hagen.de/"
						target="_blank"
						rel="noreferrer"
					>
						FernUni Hagen
					</AnimatedLink>
				</b>
				, um mich für die Zulassung zum Master Philosophie zu qualifizieren.
			</p>
		</section>
	);
}
