"use client";

import { Globe } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname } from "next/navigation";

interface AlternateMap {
	en?: string;
	de?: string;
}

export function LanguageToggle() {
	const [alternates, setAlternates] = useState<AlternateMap>({});
	const [lang, setLang] = useState<"de" | "en" | null>(null);

  const path = usePathname();

	useEffect(() => {
    // Read lang from path and set to state and localstorage
    if (path.startsWith("/en")) {
      localStorage.setItem("lang", "en")
      setLang("en");
    } else if (path.startsWith("/de")) {
      localStorage.setItem("lang", "de")
      setLang("de");
    }

    // Read alternates from html head
		const alternateMap = Array.from(
			document.querySelectorAll<HTMLLinkElement>('link[rel="alternate"]'),
		).reduce(
			(acc, link) => {
				const lang = link.getAttribute("hreflang") || "";
				const href = link.getAttribute("href") || "";
				if (lang === "en-US") {
					acc.en = href;
				} else if (lang === "de-DE") {
					acc.de = href;
				}
				return acc;
			},
			{} as { en?: string; de?: string },
		);
		setAlternates(alternateMap);
	}, [path]);

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline" size="icon">
					<Globe className="h-[1.2rem] w-[1.2rem]" />
					<span className="sr-only">Toggle language</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				{/* English */}
				{alternates.en ? (
					<DropdownMenuItem disabled={lang == "en"} asChild>
						<Link href={alternates.en}>English</Link>
					</DropdownMenuItem>
				) : (
					<DropdownMenuItem disabled>English</DropdownMenuItem>
				)}

				{/* Deutsch */}
				{alternates.de ? (
					<DropdownMenuItem disabled={lang == "de"} asChild>
						<Link href={alternates.de}>Deutsch</Link>
					</DropdownMenuItem>
				) : (
					<DropdownMenuItem disabled>Deutsch</DropdownMenuItem>
				)}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
