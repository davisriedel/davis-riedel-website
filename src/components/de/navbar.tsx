import { AnimatedLink } from "@/components/animated-link";

export function NavBar() {
	return (
		<nav>
			<p className="text-lg">
				<AnimatedLink inverted href="/de">
					Startseite
				</AnimatedLink>
				<span> | </span>
				<AnimatedLink inverted href="/de/blog">
					Blog
				</AnimatedLink>
				<span> | </span>
				<AnimatedLink inverted href="/de/kontakt">
					Kontakt
				</AnimatedLink>
			</p>
		</nav>
	);
}
