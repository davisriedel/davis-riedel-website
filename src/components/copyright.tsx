import { headers } from "next/headers";
import { AnimatedLink } from "./animated-link";

export async function Copyright({ lang }: { lang: "en" | "de" }) {
  // Read headers, to make new Date work in server component
  await headers();
  const year = new Date().getFullYear();

  return (
    <p>
      <AnimatedLink href={`/${lang}/copyright`} inverted>
        &copy; {year} Davis Riedel
      </AnimatedLink>
    </p>
  );
}
