import { headingFont } from "@/assets/fonts";
import { AnimatedLink } from "@/components/animated-link";
import { Copyright } from "@/components/copyright";
import { SocialButtons } from "../social-buttons";

export function Footer() {
	return (
		<footer
			className={`${headingFont.className} bg-primary text-primary-foreground text-center py-4 space-y-2`}
		>
			<SocialButtons />
			<p>
				<AnimatedLink
          inverted
					href="/en/contact"
				>
					Contact
				</AnimatedLink>
				<span> | </span>
				<AnimatedLink
          inverted
					href="/en/imprint"
				>
					Imprint
				</AnimatedLink>
				<span> | </span>
				<AnimatedLink
          inverted
					href="/en/privacy"
				>
					Privacy
				</AnimatedLink>
			</p>

			<p className="text-sm">
				The source code of this website can be viewed on{" "}
				<AnimatedLink
          inverted
					href="https://github.com/davisriedel/davis-riedel-website"
					target="_blank"
				>
					GitHub
				</AnimatedLink>
				.
			</p>

			<Copyright lang="en" />
		</footer>
	);
}
