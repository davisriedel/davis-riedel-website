import type { Metadata } from "next";
import "@/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { bodyFont, headingFont } from "@/assets/fonts";

export const metadata: Metadata = {
	title: "Davis Riedel",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${bodyFont.variable} ${headingFont.variable} font-body antialiased`}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
