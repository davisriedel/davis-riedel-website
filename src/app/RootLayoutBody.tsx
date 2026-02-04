import "@/globals.css";
import { Analytics } from "@vercel/analytics/next";
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
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        disableTransitionOnChange
        enableSystem
      >
        {children}
      </ThemeProvider>
      <Analytics />
    </body>
  );
}
