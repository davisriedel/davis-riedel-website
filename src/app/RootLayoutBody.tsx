import "@/globals.css";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import { bodyFont, headingFont } from "@/assets/fonts";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

export default function RootLayoutBody({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body
      className={cn(
        bodyFont.variable,
        headingFont.variable,
        "font-body antialiased"
      )}
    >
      <Suspense fallback={null}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
          enableSystem
        >
          {children}
        </ThemeProvider>
      </Suspense>
      <Analytics />
    </body>
  );
}
