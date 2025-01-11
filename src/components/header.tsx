import { headingFont } from "@/assets/fonts";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import { LanguageToggle } from "./lang-toggle";
import { ThemeToggle } from "./theme-toggle";
import Link from "next/link";

type Props = {
	navBar: ReactNode;
	image?: ReactNode;
  lang: "en" | "de";
};

export function Header({ navBar, image, lang }: Props) {
	return (
		<header className={cn(image && "relative h-svh max-h-[1000px]")}>
			{image && (
				<div className="absolute top-0 left-0 w-full h-full z-0">
					{image}
				</div>
			)}
			<div
				className={cn(
					"w-full bg-indigo-950 text-white text-center mb-4 z-10 py-12",
					image && "absolute top-0 left-0 bg-indigo-950/75 backdrop-blur-md",
				)}
			>
				<h1 className={`${headingFont.className} text-4xl`}>
					<Link href={`/${lang}`}>Davis Riedel</Link>
				</h1>
				<div>{navBar}</div>
				<div className="mt-4 w-full flex gap-4 justify-center text-indigo-950 dark:text-white">
					<ThemeToggle />
					<LanguageToggle />
				</div>
			</div>
		</header>
	);
}
