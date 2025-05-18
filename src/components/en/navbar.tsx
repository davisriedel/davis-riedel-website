import { AnimatedLink } from "@/components/animated-link";

export function NavBar() {
	return (
		<nav>
			<p className="text-lg">
				<AnimatedLink
          inverted
					href="/en"
				>
					Home
				</AnimatedLink>
				<span> | </span>
				<AnimatedLink
          inverted
					href="/en/blog"
				>
					Blog
				</AnimatedLink>
				<span> | </span>
				<AnimatedLink
          inverted
					href="/en/contact"
				>
					Contact
				</AnimatedLink>
			</p>
		</nav>
	);
}
