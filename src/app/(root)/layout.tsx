import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Davis Riedel",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html suppressHydrationWarning>
      <body>
        {children}
      </body>
		</html>
	);
}
