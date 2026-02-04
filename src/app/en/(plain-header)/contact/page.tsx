import { ContactForm } from "@/components/contact-form";

export const metadata = {
  alternates: {
    languages: {
      "en-US": "/en/contact",
      "de-DE": "/de/kontakt",
    },
  },
};

export default function Contact() {
  return (
    <section className="space-y-4">
      <h2 className="text-center text-3xl">Contact me</h2>
      <ContactForm lang="en" />
    </section>
  );
}
