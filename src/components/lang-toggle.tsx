"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Globe } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface AlternateMap {
  en?: string;
  de?: string;
}

export function LanguageToggle() {
  const [alternates, setAlternates] = useState<AlternateMap>({});

  useEffect(() => {
    const alternateMap = Array.from(document.querySelectorAll<HTMLLinkElement>('link[rel="alternate"]'))
      .reduce(
      (acc, link) => {
        const lang = link.getAttribute("hreflang") || "";
        const href = link.getAttribute("href") || "";
        if (lang === "en-US") {
           return { ...acc, en: href }
        } else if (lang === "de-DE") {
           return { ...acc, de: href }
        }
        return acc;
      },
      {}
    );

    setAlternates(alternateMap);
  }, []);

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
          <DropdownMenuItem asChild>
            <Link href={alternates.en}>English</Link>
          </DropdownMenuItem>
        ) : (
          <DropdownMenuItem disabled>English</DropdownMenuItem>
        )}

        {/* Deutsch */}
        {alternates.de ? (
          <DropdownMenuItem asChild>
            <Link href={alternates.de}>Deutsch</Link>
          </DropdownMenuItem>
        ) : (
          <DropdownMenuItem disabled>Deutsch</DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
