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
					href="/en/contact"
				>
          Contact
				</AnimatedLink>
				<span> | </span>
				<AnimatedLink className="text-white after:bg-white dark:text-white dark:after:bg-white" href="/en/imprint">
					Imprint
				</AnimatedLink>
				<span> | </span>
				<AnimatedLink className="text-white after:bg-white dark:text-white dark:after:bg-white" href="/en/privacy">
					Privacy
				</AnimatedLink>
			</p>

      <p className="text-sm">The source code of this website can be viewed on <AnimatedLink href="https://github.com/davisriedel/davis-riedel-website" target="_blank">GitHub</AnimatedLink>.</p>

      <Copyright lang="en"/>
		</footer>
	);
}