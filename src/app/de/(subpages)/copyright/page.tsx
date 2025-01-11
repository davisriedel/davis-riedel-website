import { AnimatedLink } from "@/components/animated-link";
import { headingFont } from "@/assets/fonts";

export const metadata = {
  alternates: {
    languages: {
      'en-US': '/en/copyright',
      'de-DE': '/de/copyright',
    },
  },
};

export default function Copyright() {
	return (
		<section className="space-y-4">
      <h2 className={`${headingFont.className} text-3xl`}>
				Copyright
			</h2>

      <p>Der Quellcode dieser Website kann auf <AnimatedLink href="https://github.com/davisriedel/davis-riedel-website" target="_blank">GitHub</AnimatedLink> eingesehen werden.</p>

      <p><b>Der Inhalt dieser Website (einschließlich (des Textes von) Artikeln und Seiten, Bildern und anderen Medien) ist urheberrechtlich geschützt und darf ohne ausdrückliche Genehmigung nicht verwendet, reproduziert oder verbreitet werden.</b></p>
		</section>
	);
}
