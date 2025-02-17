import { redirect } from "next/navigation";

export const dynamic = 'force-static';
export const dynamicParams = false;

export async function generateStaticParams() {
  return [{ lang: "de" }, { lang: "en" }];
}

export default async function Redirect({ params }: { params: Promise<{ lang: "de" | "en" }> }) {
  const { lang } = await params;
  redirect(`/${lang}/blog/posts/1`);
}

