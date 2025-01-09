import ResumeTable from "@/app/(web)/de/(subpages)/lebenslauf/ResumeTable";
import { headingFont } from "@/fonts";

export const metadata = {
  alternates: {
    languages: {
      'en-US': '/en/resume',
      'de-DE': '/de/lebenslauf',
    },
  },
};

export default function Resume() {
	return (
		<section className="space-y-4">
      <h2 className={`${headingFont.className} text-3xl`}>
				Resumé
			</h2>
			<p>My resumé is currently only available in german.</p>
			<ResumeTable />
		</section>
	);
}
