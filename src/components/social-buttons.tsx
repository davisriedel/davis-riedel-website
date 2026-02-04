import { faBrands } from "@/assets/fonts";
import { cn } from "@/lib/utils";

export function SocialButtons() {
  return (
    <div className={cn(faBrands.className, "ml-2 text-center *:mr-2")}>
      <a
        aria-label="facebook"
        className="icon-before icon-brands icon-facebook hover:text-gray-400"
        href="https://www.facebook.com/riedeldavis"
        rel="noreferrer"
        target="_blank"
      />
      <a
        aria-label="instagram"
        className="icon-before icon-brands icon-instagram hover:text-gray-400"
        href="https://www.instagram.com/davis.riedel/"
        rel="noreferrer"
        target="_blank"
      />
      <a
        aria-label="threads"
        className="icon-before icon-brands icon-threads hover:text-gray-400"
        href="https://www.threads.net/@davis.riedel"
        rel="noreferrer"
        target="_blank"
      />
      <a
        aria-label="tiktok"
        className="icon-before icon-brands icon-tiktok hover:text-gray-400"
        href="https://www.tiktok.com/@davis.riedel"
        rel="noreferrer"
        target="_blank"
      />
      <a
        aria-label="whatsapp"
        className="icon-before icon-brands icon-whatsapp hover:text-gray-400"
        href="https://whatsapp.com/channel/0029VaH7aI7CMY08S8WJmU1X"
        rel="noreferrer"
        target="_blank"
      />
    </div>
  );
}
