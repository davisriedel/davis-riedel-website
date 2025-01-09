import React from "react";

const ResumeTable = () => {
	return (
		<div className="overflow-x-scroll">
			<table className="w-full min-w-[600px] border-collapse border border-gray-300">
				<tbody>
					{/* Personal Information */}
					<tr className="border-b border-gray-300">
						<th className="p-2 text-left">Geboren</th>
						<td className="p-2">25.09.2000 in Pforzheim</td>
					</tr>

					{/* Bildung Section */}
					<tr className="bg-gray-100 dark:bg-gray-900">
						<th colSpan={2} className="p-2 text-left text-lg font-semibold">
							Bildung
						</th>
					</tr>
					<tr className="border-b border-gray-300">
						<td className="p-2">Seit 10.2024</td>
						<td className="p-2">
							Akademiestudium Philosophie an der Fernuniversität Hagen
						</td>
					</tr>
					<tr className="border-b border-gray-300">
						<td className="p-2">Seit 10.2019</td>
						<td className="p-2">
							Studium Informatik B.Sc. am Karlsruher Institut für Technologie
							(KIT)
						</td>
					</tr>
					<tr className="border-b border-gray-300">
						<td className="p-2">05.07.2019</td>
						<td className="p-2">Allgemeine Hochschulreife (Abitur)</td>
					</tr>
					<tr className="border-b border-gray-300">
						<td className="p-2">08.2011 - 07.2019</td>
						<td className="p-2">Theodor-Heuss-Gymnasium Mühlacker</td>
					</tr>

					{/* Berufliche Tätigkeiten Section */}
					<tr className="bg-gray-100 dark:bg-gray-900">
						<th colSpan={2} className="p-2 text-left text-lg font-semibold">
							Berufliche Tätigkeiten
						</th>
					</tr>
					<tr className="border-b border-gray-300">
						<td className="p-2">15.02.2022 – 15.09.2024</td>
						<td className="p-2">
							Studentischer Mitarbeiter bei Prof. Dr. René Repasi MdEP
							<br />
							Aufgaben: Betreuung Social-Media-Auftritt und Website,
							Videoschnitt, politische Korrespondenz mit Bürger:innen und
							Parteigremien
						</td>
					</tr>
					<tr className="border-b border-gray-300">
						<td className="p-2">08.2019 - 02.2022</td>
						<td className="p-2">
							Nebenjob im Büro der Bäckerei Riedel (elterlicher Betrieb)
							<br />
							Aufgaben: Fakturierung, Kassenführung, vorbereitende Buchhaltung
							und Lohnbuchhaltung, Betreuung der IT-Infrastruktur
						</td>
					</tr>

					{/* Politisches Engagement Section */}
					<tr className="bg-gray-100 dark:bg-gray-900">
						<th colSpan={2} className="p-2 text-left text-lg font-semibold">
							Politisches Engagement
						</th>
					</tr>
					<tr className="border-b border-gray-300">
						<td className="p-2">Seit 11.2024</td>
						<td className="p-2">Stv. Vorsitzender SPD Pforzheim</td>
					</tr>
					<tr className="border-b border-gray-300">
						<td className="p-2">Seit 09.06.2024</td>
						<td className="p-2">Ortschaftsrat in Pforzheim-Eutingen</td>
					</tr>
					<tr className="border-b border-gray-300">
						<td className="p-2">09.06.2024</td>
						<td className="p-2">
							Kandidat der SPD Enzkreis/Pforzheim für die Wahl zum Europäischen
							Parlament vom 09.06.2024
						</td>
					</tr>
					<tr className="border-b border-gray-300">
						<td className="p-2">Seit 09.2023</td>
						<td className="p-2">
							Pressesprecher der Jungen Europäischen Föderalist:innen Karlsruhe
						</td>
					</tr>
					<tr className="border-b border-gray-300">
						<td className="p-2">03.2023 – 09.2024</td>
						<td className="p-2">Vorsitzender SPD Mühlacker</td>
					</tr>
					<tr className="border-b border-gray-300">
						<td className="p-2">Seit 04.2022</td>
						<td className="p-2">
							Beisitzer im Kreisvorstand der SPD Enzkreis/Pforzheim
						</td>
					</tr>
					<tr className="border-b border-gray-300">
						<td className="p-2">06.2019 - 08.2022</td>
						<td className="p-2">Kreisvorsitzender der Jusos Enzkreis</td>
					</tr>

					{/* Hochschulpolitisches Engagement Section */}
					<tr className="bg-gray-100 dark:bg-gray-900">
						<th colSpan={2} className="p-2 text-left text-lg font-semibold">
							Hochschulpolitisches Engagement
						</th>
					</tr>
					<tr className="border-b border-gray-300">
						<td className="p-2">Seit 09.2023</td>
						<td className="p-2">
							Referent für Presse und Öffentlichkeitsarbeit der
							Landesstudierendenvertretung Baden-Württemberg
						</td>
					</tr>
					<tr className="border-b border-gray-300">
						<td className="p-2">WiSe 22/23 – WiSe 23/24</td>
						<td className="p-2">
							Referent für Presse und Öffentlichkeitsarbeit im AStA am KIT
						</td>
					</tr>
					<tr className="border-b border-gray-300">
						<td className="p-2">WiSe 22/23 – SoSe 23</td>
						<td className="p-2">
							Stellvertretender Vorsitzender des AStA am KIT
						</td>
					</tr>
					<tr className="border-b border-gray-300">
						<td className="p-2">Seit 10.07.2022</td>
						<td className="p-2">
							Vorsitzender des Fördervereins der Landesstudierendenvertretung BW
						</td>
					</tr>
					<tr className="border-b border-gray-300">
						<td className="p-2">SoSe 21 - WiSe 21/22</td>
						<td className="p-2">
							Abgeordneter im Studierendenparlament des KIT
						</td>
					</tr>
					<tr className="border-b border-gray-300">
						<td className="p-2">WiSe 20/21 – WiSe 22/23</td>
						<td className="p-2">
							Referent für Äußeres und Hochschulpolitik im AStA am KIT
						</td>
					</tr>

					{/* Auszeichnungen und Förderungen Section */}
					<tr className="bg-gray-100 dark:bg-gray-900">
						<th colSpan={2} className="p-2 text-left text-lg font-semibold">
							Auszeichnungen und Förderungen
						</th>
					</tr>
					<tr className="border-b border-gray-300">
						<td className="p-2">10.2022</td>
						<td className="p-2">
							Ehrenamtspreis des Karlsruher Instituts für Technologie (KIT)
						</td>
					</tr>
					<tr className="border-b border-gray-300">
						<td className="p-2">07.2022</td>
						<td className="p-2">
							Best-Paper-Award für die Seminararbeit „Software Sabotage in Open
							Source Projects“
						</td>
					</tr>
					<tr className="border-b border-gray-300">
						<td className="p-2">02.2020 - 09.2022</td>
						<td className="p-2">
							Stipendiat der Studienstiftung des deutschen Volkes
						</td>
					</tr>
					<tr className="border-b border-gray-300">
						<td className="p-2">09.2016</td>
						<td className="p-2">
							Nominierung zum 3. Kölner Junge Autoren Award
						</td>
					</tr>

					{/* Kenntnisse und Fähigkeiten Section */}
					<tr className="bg-gray-100 dark:bg-gray-900">
						<th colSpan={2} className="p-2 text-left text-lg font-semibold">
							Kenntnisse und Fähigkeiten
						</th>
					</tr>
					<tr className="border-b border-gray-300">
						<td className="p-2">Sprachen</td>
						<td className="p-2">
							Deutsch: Muttersprache
							<br />
							Englisch: C2, TOEFL iBT Score 116 von 120 (Test vom 6. März 2024)
						</td>
					</tr>
					<tr className="border-b border-gray-300">
						<td className="p-2">Programme</td>
						<td className="p-2">
							Fundierter Umgang mit gängigen Office-Programmen, Grafik- und
							Videoschnittprogrammen (Adobe, Affinity)
						</td>
					</tr>
					<tr className="border-b border-gray-300">
						<td className="p-2">Programmiersprachen</td>
						<td className="p-2">
							JavaScript/TypeScript, Rust, PHP, Java/Kotlin
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default ResumeTable;
