import { AnimatedLink } from "@/components/animated-link";
import { Footer } from "@/components/de/footer";
import { NavBar } from "@/components/de/navbar";
import { Header } from "@/components/header";
import RouterScrollWorkaround from "@/components/router-scroll-workaround";
import HeaderImage from "@/images/header.jpg";
import Image from "next/image";
import type { PropsWithChildren } from "react";

// biome-ignore lint/complexity/noBannedTypes: no props to pass
export default function HomeLayout({ children }: PropsWithChildren<{}>) {
	return (
		<RouterScrollWorkaround>
			<Header
				navBar={
          <>
					<p className="mt-2 text-lg">
						<AnimatedLink
							className="text-white after:bg-white dark:text-white dark:after:bg-white"
							href="/de#programmierer"
						>
							Programmierer
						</AnimatedLink>
						,{" "}
						<AnimatedLink
							className="text-white after:bg-white dark:text-white dark:after:bg-white"
							href="/de#politiker"
						>
							Politiker
						</AnimatedLink>
						,{" "}
						<AnimatedLink
							className="text-white after:bg-white dark:text-white dark:after:bg-white"
							href="/de#autor"
						>
							Schriftsteller
						</AnimatedLink>{" "}
						und{" "}
						<AnimatedLink
							className="text-white after:bg-white dark:text-white dark:after:bg-white"
							href="/de#student"
						>
							Student
						</AnimatedLink>
					</p>
          <NavBar />
          </>
				}
				image={
					<Image
						src={HeaderImage}
						alt="Davis Riedel vor dem Europäischen Parlament in Brüssel"
            className="object-cover h-full"
					/>
				}
			/>

			<main className="max-w-3xl mx-auto px-6 py-12 space-y-16">
				{children}
			</main>

			<Footer />
		</RouterScrollWorkaround>
	);
}