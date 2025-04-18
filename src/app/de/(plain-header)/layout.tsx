import { Footer } from "@/components/de/footer";
import { NavBar } from "@/components/de/navbar";
import { Header } from "@/components/header";
import type { PropsWithChildren } from "react";

// biome-ignore lint/complexity/noBannedTypes: no props to pass
export default function SubpageLayout({ children }: PropsWithChildren<{}>) {
	return (
		<div>
			<Header lang="de" navBar={<NavBar />} />

			<main className="max-w-3xl mx-auto px-6 py-12 space-y-16">
				{children}
			</main>

			<Footer />
		</div>
	);
}
