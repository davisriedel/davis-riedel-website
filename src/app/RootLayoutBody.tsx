import "@/globals.css";
import { bodyFont, headingFont } from "@/assets/fonts";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/next";

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
				"font-body antialiased",
			)}
		>
			<ThemeProvider
				attribute="class"
				defaultTheme="system"
				enableSystem
				disableTransitionOnChange
			>
				{children}
			</ThemeProvider>
			<Analytics />
		</body>
	);
}
