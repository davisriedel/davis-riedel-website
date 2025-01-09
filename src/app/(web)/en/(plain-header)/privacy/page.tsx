import { Privacy } from "@/components/privacy";
import { headingFont } from "@/fonts";

export const metadata = {
  alternates: {
    languages: {
      'en-US': '/en/privacy',
      'de-DE': '/de/datenschutz',
    },
  },
};

export default function PrivacyPage() {
  return (
    <div>
			<h2 className={`${headingFont.className} text-3xl mb-6`}>
        Privacy Policy
			</h2>
      <p><i>The privacy policy is only available in german.</i></p>
      <br />
      <Privacy />
    </div>
  )
}
