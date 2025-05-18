import type { Metadata } from "next";
import RootLayoutBody from "../RootLayoutBody";

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
			<RootLayoutBody>{children}</RootLayoutBody>
		</html>
	);
}
