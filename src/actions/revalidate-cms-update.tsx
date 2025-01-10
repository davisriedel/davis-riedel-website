"use server";

import { revalidatePath, revalidateTag } from "next/cache";

export async function revalidateCmsUpdate() {
  "use server";

  console.log("Revalidating CMS caches");
  revalidateTag("cms");
  revalidatePath("/(web)/en/(blog)/posts", "page");
  revalidatePath("/(web)/en/(blog)/posts/tags", "page");
  revalidatePath("/(web)/en/(blog)/posts/tags/[...slug]", "page");
  revalidatePath("/(web)/en/(blog)/posts/[slug]", "page");
}
