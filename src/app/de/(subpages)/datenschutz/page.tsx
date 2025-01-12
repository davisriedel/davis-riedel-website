import { headingFont } from "@/assets/fonts";
import { Privacy } from "@/components/privacy";

export const metadata = {
	alternates: {
		languages: {
			"en-US": "/en/privacy",
			"de-DE": "/de/datenschutz",
		},
	},
};

export default function PrivacyPage() {
	return (
		<div>
			<h2 className={`${headingFont.className} text-3xl mb-6`}>
				Datenschutzerklärung
			</h2>
			<Privacy />
		</div>
	);
}
