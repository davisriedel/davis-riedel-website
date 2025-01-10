import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Content Manager",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
      <head>
        <title>Content Manager</title>
        <link href="/admin/config.yml" type="text/yaml" rel="cms-config-url" />
      </head>
			<body suppressHydrationWarning>
        {children}
			</body>
		</html>
	);
}
