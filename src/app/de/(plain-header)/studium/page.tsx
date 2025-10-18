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

export default function Studies() {
	return (
		<section className="space-y-4">
			<h2 className="text-3xl">Mein Studium</h2>

			<h3 className="text-3xl mt-4">Aktuelle Studiengänge</h3>
			<p>
        Ich studiere aktuell <b>gymnasiales Lehramt</b> für die Fächer <b>Mathematik und Informatik</b> als Quereinstieg an der{" "}
        <b><AnimatedLink
          href="https://uni-tuebingen.de/"
          target="_blank"
          rel="noreferrer"
        >
          Universität Tübingen
        </AnimatedLink></b>{" "}mit dem Studienziel <b>Master of Education</b>.
			</p>
			<p>
				Neben meinem Haupt-Studium belege ich seit dem Wintersemester 2023/2024 <b>Philosophie</b>
				-Vorlesungen im Rahmen eines{" "}
				<b>Akademiestudiums</b> an der{" "}
					<b><AnimatedLink
						href="https://www.fernuni-hagen.de/"
						target="_blank"
						rel="noreferrer"
					>
						FernUni Hagen
					</AnimatedLink></b>
          .
			</p>

			<h3 className="text-3xl mt-4">Abgeschlossenes Studium Informatik B.Sc.</h3>
			<p>
				<b>
					Am 26.09.2025 habe ich meinen Abschluss <b>Informatik Bachelor of Science</b> am{" "}
					<b><AnimatedLink
						href="https://www.kit.edu"
						target="_blank"
						rel="noreferrer"
					>
						Karlsruher Institut für Technologie (KIT)
					</AnimatedLink></b>{" "}erlangt.
				</b>
			</p>
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
      <p>
        In meiner Bachelorarbeit "3SIM: Blockchain Simulator for Investigating the Blockchain Trilemma"
        habe ich einen Blockchain Simulator entwickelt und mit dessen Hilfe untersucht, wie konkrete
        Konfigurationen von Blockchain Systemen die Manifestation des Blockchain Trilemmas beeinflussen.
        Die Bachelorarbeit habe ich am Institut für Softwaredesign und -Qualität (SDQ) in Kooperation
        mit dem Institut für Angewandte Informatik und Formale Beschreibungsverfahren (AIFB), absolviert.
      </p>
		</section>
	);
}
