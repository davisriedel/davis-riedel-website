import ResumeTable from "@/app/de/(plain-header)/lebenslauf/ResumeTable";

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
      <h2 className="text-3xl">Resumé</h2>
      <p>My resumé is currently only available in german.</p>
      <ResumeTable />
    </section>
  );
}
