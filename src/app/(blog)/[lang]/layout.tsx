import { Footer } from "@/components/en/footer";
import { NavBar as EnNavBar } from "@/components/en/navbar";
import { NavBar as DeNavBar } from "@/components/de/navbar";
import { Header } from "@/components/header";
import type { PropsWithChildren } from "react";

// biome-ignore lint/complexity/noBannedTypes: no props to pass
export default async function SubpageLayout({ children, params }: PropsWithChildren<{ params: Promise<{ lang: "de" | "en" }>}>) {
  const { lang } = await params;

	return (
		<div>
			<Header lang={lang} navBar={lang == "en" ? <EnNavBar /> : <DeNavBar />} />

			<main className="max-w-3xl mx-auto px-6 py-12 space-y-16">
				{children}
			</main>

			<Footer />
		</div>
	);
}
