import HeaderImage from "@/assets/images/header.jpg";
import { AnimatedLink } from "@/components/animated-link";
import { Footer } from "@/components/de/footer";
import { NavBar } from "@/components/de/navbar";
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
				lang="de"
				navBar={
					<>
						<p className="text-lg -mt-4 lh-8:-mt-2 mx-8">
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
						<div className="text-2xl lh-6:hidden">
							<SocialButtons />
						</div>
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
