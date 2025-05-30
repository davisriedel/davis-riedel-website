export const metadata = {
	alternates: {
		languages: {
			"en-US": "/en/imprint",
			"de-DE": "/de/impressum",
		},
	},
};

export default function Imprint() {
	return (
		<section className="space-y-4">
			<h2 className="text-3xl">Imprint</h2>

			<p className="mt-3">
				<b>Declarations according to § 5 TMG / Angaben gemäß § 5 TMG</b>
			</p>
			<p>Davis Riedel, Im Ludlein 25, 75181 Pforzheim</p>
			<p>E-Mail: mail@davis-riedel.de</p>

			<p className="mt-3">
				<b>Editorial responsibility / Redaktionell verantwortlich</b>
			</p>
			<p>Davis Riedel, Im Ludlein 25, 75181 Pforzheim</p>
		</section>
	);
}
