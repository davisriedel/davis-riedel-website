import { AnimatedLink } from "./animated-link";

export function Copyright({ lang }: { lang: "en" | "de" }) {
  return (
    <p>
      <AnimatedLink href={`/${lang}/copyright`} inverted>
        &copy; {new Date().getFullYear()} Davis Riedel
      </AnimatedLink>
    </p>
  );
}
