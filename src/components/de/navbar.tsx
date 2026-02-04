import { AnimatedLink } from "@/components/animated-link";

export function NavBar() {
  return (
    <nav>
      <p className="text-lg">
        <AnimatedLink href="/de" inverted>
          Startseite
        </AnimatedLink>
        <span> | </span>
        <AnimatedLink href="/de/blog" inverted>
          Blog
        </AnimatedLink>
        <span> | </span>
        <AnimatedLink href="/de/kontakt" inverted>
          Kontakt
        </AnimatedLink>
      </p>
    </nav>
  );
}
