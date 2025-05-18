import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ReactNode } from "react";
import { LanguageToggle } from "./lang-toggle";
import { ThemeToggle } from "./theme-toggle";

type Props = {
	navBar: ReactNode;
	image?: ReactNode;
	lang: "en" | "de";
};

export function Header({ navBar, image, lang }: Props) {
	return (
		<header className={cn(image && "relative h-svh max-h-[1000px]")}>
			{image && (
				<div className="absolute top-0 left-0 w-full h-full z-0">{image}</div>
			)}
			<div
				className={cn(
					"w-full bg-primary text-primary-foreground text-center z-10 py-12 lh-8:py-8 flex flex-col gap-4 lh-8:gap-2",
					image && "absolute top-0 left-0 bg-primary/75 backdrop-blur-md",
				)}
			>
				<h1 className="text-4xl">
					<Link href={`/${lang}`}>Davis Riedel</Link>
				</h1>
				{navBar}
				<div className="w-full flex gap-4 justify-center text-primary-foreground">
					<ThemeToggle />
					<LanguageToggle />
				</div>
			</div>
		</header>
	);
}
