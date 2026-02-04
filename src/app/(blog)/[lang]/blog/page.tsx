import { redirect } from "next/navigation";

export async function generateStaticParams() {
  return [{ lang: "de" }, { lang: "en" }];
}

export default async function Redirect({
  params,
}: {
  params: Promise<{ lang: "de" | "en" }>;
}) {
  const { lang } = await params;
  redirect(`/${lang}/blog/posts/1`);
}
