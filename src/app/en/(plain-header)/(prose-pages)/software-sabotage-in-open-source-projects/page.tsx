// @ts-ignore
import page from "./page.html";

export const metadata = {
  alternates: {
    languages: {
      'en-US': '/en/software-sabotage-in-open-source-projects',
    },
  },
};

export default function Page() {
	// biome-ignore lint/security/noDangerouslySetInnerHtml: safe, because executed in server component
	return <div dangerouslySetInnerHTML={{ __html: page }} />;
}
