"use server";

import { revalidatePath } from "next/cache";

export async function revalidateCmsUpdate() {
  "use server";

  revalidatePath("/(web)/en/(blog)/posts", "page");
  revalidatePath("/(web)/en/(blog)/posts/tags", "page");
  revalidatePath("/(web)/en/(blog)/posts/tags/[...slug]", "page");
  revalidatePath("/(web)/en/(blog)/posts/[slug]", "page");
}
