import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { LanguageToggle } from "./lang-toggle";
import { ThemeToggle } from "./theme-toggle";

interface Props {
  navBar: ReactNode;
  image?: ReactNode;
  lang: "en" | "de";
}

export function Header({ navBar, image, lang }: Props) {
  return (
    <header className={cn(image && "relative h-svh max-h-[1000px]")}>
      {image && (
        <div className="absolute top-0 left-0 z-0 h-full w-full">{image}</div>
      )}
      <div
        className={cn(
          "z-10 flex w-full flex-col gap-4 lh-8:gap-2 bg-primary lh-8:py-8 py-12 text-center text-primary-foreground",
          image && "absolute top-0 left-0 bg-primary/75 backdrop-blur-md"
        )}
      >
        <h1 className="text-4xl">
          <Link href={`/${lang}`}>Davis Riedel</Link>
        </h1>
        {navBar}
        <div className="flex w-full justify-center gap-4 text-primary-foreground">
          <ThemeToggle />
          <LanguageToggle />
        </div>
      </div>
    </header>
  );
}
