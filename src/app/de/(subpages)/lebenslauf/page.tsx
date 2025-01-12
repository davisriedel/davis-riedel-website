import { headingFont } from "@/assets/fonts";
import ResumeTable from "./ResumeTable";

export const metadata = {
	alternates: {
		languages: {
			"en-US": "/en/resume",
			"de-DE": "/de/lebenslauf",
		},
	},
};

export default function Resume() {
	return (
		<section className="space-y-4">
			<h2 className={`${headingFont.className} text-3xl`}>Lebenslauf</h2>
			<ResumeTable />
		</section>
	);
}
