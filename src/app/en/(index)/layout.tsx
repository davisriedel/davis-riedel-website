import { AnimatedLink } from "@/components/animated-link";
import { Footer } from "@/components/en/footer";
import { NavBar } from "@/components/en/navbar";
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
        lang="en"
				navBar={
          <>
					<p className="mt-2 text-lg">
						<AnimatedLink
							className="text-white after:bg-white dark:text-white dark:after:bg-white"
							href="/en#developer"
						>
							Developer
						</AnimatedLink>
						,{" "}
						<AnimatedLink
							className="text-white after:bg-white dark:text-white dark:after:bg-white"
							href="/en#politician"
						>
							Politician
						</AnimatedLink>
						,{" "}
						<AnimatedLink
							className="text-white after:bg-white dark:text-white dark:after:bg-white"
							href="/en#writer"
						>
							Writer
						</AnimatedLink>
						, and{" "}
						<AnimatedLink
							className="text-white after:bg-white dark:text-white dark:after:bg-white"
							href="/en#student"
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
						alt="Davis Riedel in front of the European Parliament in Brussels"
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