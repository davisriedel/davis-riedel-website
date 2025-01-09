import { unstable_cacheLife as cacheLife } from 'next/cache'
import { AnimatedLink } from './animated-link';

export async function Copyright({ lang }: { lang: "en" | "de" }) {
  "use cache";
  cacheLife("days");

  return <p><AnimatedLink className="text-white after:bg-white dark:text-white dark:after:bg-white" href={`/${lang}/copyright`}>&copy; {new Date().getFullYear()} Davis Riedel</AnimatedLink></p>;
}
