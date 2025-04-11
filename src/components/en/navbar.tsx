import { AnimatedLink } from "@/components/animated-link";

export function NavBar() {
	return (
		<nav>
			<p className="text-lg">
				<AnimatedLink
					className="text-white after:bg-white dark:text-white dark:after:bg-white"
					href="/en"
				>
					Home
				</AnimatedLink>
				<span> | </span>
				<AnimatedLink
					className="text-white after:bg-white dark:text-white dark:after:bg-white"
					href="/en/blog"
				>
					Blog
				</AnimatedLink>
				<span> | </span>
				<AnimatedLink
					className="text-white after:bg-white dark:text-white dark:after:bg-white"
					href="/en/contact"
				>
					Contact
				</AnimatedLink>
			</p>
		</nav>
	);
}
