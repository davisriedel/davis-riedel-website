import { AnimatedLink } from "@/components/animated-link";
import { headingFont } from "@/fonts";
import { Copyright } from "@/components/copyright";

export function Footer() {
	return (
		<footer
			className={`${headingFont.className} bg-indigo-950 text-white text-center py-4 space-y-2`}
		>
			<p>
				<AnimatedLink
					className="text-white after:bg-white dark:text-white dark:after:bg-white"
					href="/de/kontakt"
				>
          Kontakt
				</AnimatedLink>
				<span> | </span>
				<AnimatedLink
					className="text-white after:bg-white dark:text-white dark:after:bg-white"
					href="/de/impressum"
				>
					Impressum
				</AnimatedLink>
				<span> | </span>
				<AnimatedLink
					className="text-white after:bg-white dark:text-white dark:after:bg-white"
					href="/de/datenschutz"
				>
					Datenschutz
				</AnimatedLink>
			</p>

      <p className="text-sm">Der Quellcode dieser Website kann auf <AnimatedLink href="https://github.com/davisriedel/davis-riedel-website" target="_blank">GitHub</AnimatedLink> eingesehen werden.</p>

      <Copyright lang="de" />
		</footer>
	);
}
