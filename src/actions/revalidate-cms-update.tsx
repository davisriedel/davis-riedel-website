"use server";

import { revalidatePath } from "next/cache";

export async function revalidateCmsUpdate() {
  "use server";

  revalidatePath("/en/(blog)/posts");
  revalidatePath("/en/(blog)/posts/tags");
  revalidatePath("/en/(blog)/posts/tags/[...slug]");
  revalidatePath("/en/(blog)/posts/[slug]");
}
