import { AnimatedLink } from "@/components/animated-link";

export function NavBar() {
	return (
		<nav>
			<p className="text-lg">
				<AnimatedLink
					className="text-white after:bg-white dark:text-white dark:after:bg-white"
					href="/de"
				>
					Startseite
				</AnimatedLink>
				<span> | </span>
				<AnimatedLink
					className="text-white after:bg-white dark:text-white dark:after:bg-white"
					href="/de/blog"
				>
					Blog
				</AnimatedLink>
				<span> | </span>
				<AnimatedLink
					className="text-white after:bg-white dark:text-white dark:after:bg-white"
					href="/de/kontakt"
				>
					Kontakt
				</AnimatedLink>
			</p>
		</nav>
	);
}
