import { headingFont } from "@/assets/fonts";
import { AnimatedLink } from "@/components/animated-link";

export const metadata = {
	alternates: {
		languages: {
			"en-US": "/en/copyright",
			"de-DE": "/de/copyright",
		},
	},
};

export default function Copyright() {
	return (
		<section className="space-y-4">
			<h2 className={`${headingFont.className} text-3xl`}>Copyright</h2>

			<p>
				The source code of this website can be viewed on{" "}
				<AnimatedLink
					href="https://github.com/davisriedel/davis-riedel-website"
					target="_blank"
				>
					GitHub
				</AnimatedLink>
				.
			</p>

			<p>
				<b>
					The content of this website (including (the text of) articles and
					pages, images, and other media) is copyrighted and may not be used,
					reproduced, or distributed without explicit permission.
				</b>
			</p>
		</section>
	);
}
