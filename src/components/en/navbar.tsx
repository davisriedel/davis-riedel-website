import { AnimatedLink } from "@/components/animated-link";

export function NavBar() {
  return (
    <nav>
      <p className="text-lg">
        <AnimatedLink href="/en" inverted>
          Home
        </AnimatedLink>
        <span> | </span>
        <AnimatedLink href="/en/blog" inverted>
          Blog
        </AnimatedLink>
        <span> | </span>
        <AnimatedLink href="/en/contact" inverted>
          Contact
        </AnimatedLink>
      </p>
    </nav>
  );
}
