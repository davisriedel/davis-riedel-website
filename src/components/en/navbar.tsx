import { AnimatedLink } from "@/components/animated-link";

export function NavBar() {
	return (
		<nav>
			<p className="mt-4 text-lg">
				<AnimatedLink className="text-white after:bg-white dark:text-white dark:after:bg-white" href="/en">
					Home
				</AnimatedLink>
        <span> | </span>
				<AnimatedLink className="text-white after:bg-white dark:text-white dark:after:bg-white" href="/en/contact">
					Contact
				</AnimatedLink>
			</p>
		</nav>
	);
}

// <span> | </span>
// <AnimatedLink className="text-white after:bg-white dark:text-white dark:after:bg-white" href="/en/posts">
// 	Blog
// </AnimatedLink>
