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
        <AnimatedLink href="/en/contact" inverted>
          Contact
        </AnimatedLink>
        <span> | </span>
        <AnimatedLink href="/en/imprint" inverted>
          Imprint
        </AnimatedLink>
        <span> | </span>
        <AnimatedLink href="/en/privacy" inverted>
          Privacy
        </AnimatedLink>
      </p>

      <p className="text-sm">
        The source code of this website can be viewed on{" "}
        <AnimatedLink
          href="https://github.com/davisriedel/davis-riedel-website"
          inverted
          target="_blank"
        >
          GitHub
        </AnimatedLink>
        .
      </p>

      <Copyright lang="en" />
    </footer>
  );
}
