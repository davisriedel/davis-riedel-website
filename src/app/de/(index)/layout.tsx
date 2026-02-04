import Image from "next/image";
import type { PropsWithChildren } from "react";
import HeaderImage from "@/assets/images/header.jpg";
import { AnimatedLink } from "@/components/animated-link";
import { Footer } from "@/components/de/footer";
import { NavBar } from "@/components/de/navbar";
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
            alt="Davis Riedel vor dem Europäischen Parlament in Brüssel"
            className="h-full object-cover"
            src={HeaderImage}
          />
        }
        lang="de"
        navBar={
          <>
            <p className="mx-8 -mt-4 lh-8:-mt-2 text-lg">
              <AnimatedLink href="/de#programmierer" inverted>
                Programmierer
              </AnimatedLink>
              ,{" "}
              <AnimatedLink href="/de#politiker" inverted>
                Politiker
              </AnimatedLink>
              ,{" "}
              <AnimatedLink href="/de#autor" inverted>
                Schriftsteller
              </AnimatedLink>{" "}
              und{" "}
              <AnimatedLink href="/de#student" inverted>
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
