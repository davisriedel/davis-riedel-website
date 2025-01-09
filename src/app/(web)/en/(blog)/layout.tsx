import { Footer } from "@/components/en/footer";
import { NavBar } from "@/components/en/navbar";
import { Header } from "@/components/header";
import type { PropsWithChildren } from "react";

// TODO: Add custom navbar for blog

// biome-ignore lint/complexity/noBannedTypes: no props to pass
export default function SubpageLayout({ children }: PropsWithChildren<{}>) {
	return (
		<div>
			<Header navBar={<NavBar />} />

			<main className="max-w-3xl mx-auto px-6 py-12 space-y-16">
				{children}
			</main>

			<Footer />
		</div>
	);
}
