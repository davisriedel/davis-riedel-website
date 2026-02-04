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
      <h2 className="mb-6 text-3xl">Datenschutzerklärung</h2>
      <Privacy />
    </div>
  );
}
