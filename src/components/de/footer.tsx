import { headingFont } from "@/assets/fonts";
import { AnimatedLink } from "@/components/animated-link";
import { Copyright } from "@/components/copyright";
import { SocialButtons } from "../social-buttons";

export function Footer() {
  return (
    <footer
      className={`${headingFont.className} space-y-2 bg-primary py-4 text-center text-primary-foreground`}
    >
      <SocialButtons />
      <p>
        <AnimatedLink href="/de/kontakt" inverted>
          Kontakt
        </AnimatedLink>
        <span> | </span>
        <AnimatedLink href="/de/impressum" inverted>
          Impressum
        </AnimatedLink>
        <span> | </span>
        <AnimatedLink href="/de/datenschutz" inverted>
          Datenschutz
        </AnimatedLink>
      </p>

      <p className="text-sm">
        Der Quellcode dieser Website kann auf{" "}
        <AnimatedLink
          href="https://github.com/davisriedel/davis-riedel-website"
          inverted
          target="_blank"
        >
          GitHub
        </AnimatedLink>{" "}
        eingesehen werden.
      </p>

      <Copyright lang="de" />
    </footer>
  );
}
