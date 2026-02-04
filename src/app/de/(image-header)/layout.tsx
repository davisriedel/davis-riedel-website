import Image from "next/image";
import type { PropsWithChildren } from "react";
import HeaderImage from "@/assets/images/header.jpg";
import { Footer } from "@/components/en/footer";
import { NavBar } from "@/components/en/navbar";
import { Header } from "@/components/header";
import RouterScrollWorkaround from "@/components/router-scroll-workaround";

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
        navBar={<NavBar />}
      />

      <main className="mx-auto max-w-3xl space-y-16 px-6 py-12">
        {children}
      </main>

      <Footer />
    </RouterScrollWorkaround>
  );
}
