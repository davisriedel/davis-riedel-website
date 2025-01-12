import { faBrands } from "@/assets/fonts";
import { cn } from "@/lib/utils";

export function SocialButtons() {
	return (
		<div className={cn(faBrands.className, "text-center *:mr-2 ml-2")}>
			<a
				href="https://www.facebook.com/riedeldavis"
				target="_blank"
				className="hover:text-gray-400 icon-before icon-brands icon-facebook"
				rel="noreferrer"
				aria-label="facebook"
			/>
			<a
				href="https://www.instagram.com/davis.riedel/"
				target="_blank"
				className="hover:text-gray-400 icon-before icon-brands icon-instagram"
				rel="noreferrer"
				aria-label="instagram"
			/>
			<a
				href="https://www.threads.net/@davis.riedel"
				target="_blank"
				className="hover:text-gray-400 icon-before icon-brands icon-threads"
				rel="noreferrer"
				aria-label="threads"
			/>
			<a
				href="https://www.tiktok.com/@davis.riedel"
				target="_blank"
				className="hover:text-gray-400 icon-before icon-brands icon-tiktok"
				rel="noreferrer"
				aria-label="tiktok"
			/>
			<a
				href="https://whatsapp.com/channel/0029VaH7aI7CMY08S8WJmU1X"
				target="_blank"
				className="hover:text-gray-400 icon-before icon-brands icon-whatsapp"
				rel="noreferrer"
				aria-label="whatsapp"
			/>
		</div>
	);
}
