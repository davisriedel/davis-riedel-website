"use client";

import { useState } from "react";
import { InstagramEmbed } from "react-social-media-embed";
import { Button } from "./ui/button";

export function InstagramPost({
  url,
  disclaimer,
}: {
  url: string | string[];
  disclaimer: string | null;
}) {
  const [isConsented, setIsConsented] = useState(false);

  return (
    (!isConsented && (
      <div className="flex flex-col items-center">
        <p>
          <i>
            {disclaimer ??
              "Dieser Artikel ist nur als Instagram-Post verfügbar. Um ihn zu lesen stimmen Sie bitte über folgenden Button zu, dass Inhalte von Instagram geladen werden dürfen:"}
          </i>
        </p>
        <Button onClick={() => setIsConsented(true)}>
          Ich stimme zu, den Post-Inhalt von Instagram zu laden
        </Button>
      </div>
    )) ||
    (Array.isArray(url) && (
      <div className="grid grid-cols-1 place-content-center gap-10 md:grid-cols-2 lg:grid-cols-3">
        {url.map((u) => (
          <InstagramEmbed key={u} url={u} width="100%" />
        ))}
      </div>
    )) || (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <InstagramEmbed url={url as string} width="100%" />
      </div>
    )
  );
}
