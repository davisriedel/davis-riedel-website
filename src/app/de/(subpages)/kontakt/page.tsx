import { ContactForm } from "@/components/contact-form";
import { headingFont } from "@/assets/fonts";

export const metadata = {
  alternates: {
    languages: {
      'en-US': '/en/contact',
      'de-DE': '/de/kontakt',
    },
  },
};

export default function Contact() {
	return (
		<section className="space-y-4">
      <h2 className={`${headingFont.className} text-3xl text-center`}>
				Kontaktieren Sie mich
			</h2>
      <ContactForm lang="de" />
		</section>
	);
}
