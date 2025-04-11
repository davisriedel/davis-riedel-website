import HeaderImage from "@/assets/images/header.jpg";
import { AnimatedLink } from "@/components/animated-link";
import { Footer } from "@/components/en/footer";
import { NavBar } from "@/components/en/navbar";
import { Header } from "@/components/header";
import RouterScrollWorkaround from "@/components/router-scroll-workaround";
import { SocialButtons } from "@/components/social-buttons";
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
						<p className="text-lg -mt-4 lh-8:-mt-2 mx-8">
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
						<div className="text-2xl lh-6:hidden">
							<SocialButtons />
						</div>
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
