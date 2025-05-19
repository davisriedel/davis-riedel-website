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
				<AnimatedLink inverted href="/de/kontakt">
					Kontakt
				</AnimatedLink>
				<span> | </span>
				<AnimatedLink inverted href="/de/impressum">
					Impressum
				</AnimatedLink>
				<span> | </span>
				<AnimatedLink inverted href="/de/datenschutz">
					Datenschutz
				</AnimatedLink>
			</p>

			<p className="text-sm">
				Der Quellcode dieser Website kann auf{" "}
				<AnimatedLink
					inverted
					href="https://github.com/davisriedel/davis-riedel-website"
					target="_blank"
				>
					GitHub
				</AnimatedLink>{" "}
				eingesehen werden.
			</p>

			<Copyright lang="de" />
		</footer>
	);
}
