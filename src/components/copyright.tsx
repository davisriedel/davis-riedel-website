import { cacheLife } from "next/cache";
import { AnimatedLink } from "./animated-link";

export async function Copyright({ lang }: { lang: "en" | "de" }) {
	"use cache";
	cacheLife("days");

	return (
		<p>
			<AnimatedLink inverted href={`/${lang}/copyright`}>
				&copy; {new Date().getFullYear()} Davis Riedel
			</AnimatedLink>
		</p>
	);
}
