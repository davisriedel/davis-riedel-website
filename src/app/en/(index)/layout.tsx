import Image from "next/image";
import type { PropsWithChildren } from "react";
import HeaderImage from "@/assets/images/header.jpg";
import { AnimatedLink } from "@/components/animated-link";
import { Footer } from "@/components/en/footer";
import { NavBar } from "@/components/en/navbar";
import { Header } from "@/components/header";
import RouterScrollWorkaround from "@/components/router-scroll-workaround";
import { SocialButtons } from "@/components/social-buttons";

// biome-ignore lint/complexity/noBannedTypes: no props to pass
export default function HomeLayout({ children }: PropsWithChildren<{}>) {
  return (
    <RouterScrollWorkaround>
      <Header
        image={
          <Image
            alt="Davis Riedel in front of the European Parliament in Brussels"
            className="h-full object-cover"
            src={HeaderImage}
          />
        }
        lang="en"
        navBar={
          <>
            <p className="mx-8 -mt-4 lh-8:-mt-2 text-lg">
              <AnimatedLink href="/en#developer" inverted>
                Developer
              </AnimatedLink>
              ,{" "}
              <AnimatedLink href="/en#politician" inverted>
                Politician
              </AnimatedLink>
              ,{" "}
              <AnimatedLink href="/en#writer" inverted>
                Writer
              </AnimatedLink>
              , and{" "}
              <AnimatedLink href="/en#student" inverted>
                Student
              </AnimatedLink>
            </p>
            <div className="lh-6:hidden text-2xl">
              <SocialButtons />
            </div>
            <NavBar />
          </>
        }
      />

      <main className="mx-auto max-w-3xl space-y-16 px-6 py-12">
        {children}
      </main>

      <Footer />
    </RouterScrollWorkaround>
  );
}
