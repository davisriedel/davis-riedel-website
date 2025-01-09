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
		<html lang="en">
      <head>
        <link href="https://www.davis-riedel.de/admin/config.yml" type="text/yaml" rel="cms-config-url" />
      </head>
			<body>
        {children}
			</body>
		</html>
	);
}
