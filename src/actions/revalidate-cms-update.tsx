"use server";

import { updateCmsFilesFromGitHub } from "@/lib/git-cms-live-update";
import { revalidatePath } from "next/cache";

export async function revalidateCmsUpdate() {
  "use server";

  console.log("Downloading new CMS files from GitHub");
  await updateCmsFilesFromGitHub();

  console.log("Revalidating CMS caches");
  revalidatePath("/(web)/en/(blog)/posts", "page");
  revalidatePath("/(web)/en/(blog)/posts/tags", "page");
  revalidatePath("/(web)/en/(blog)/posts/tags/[...slug]", "page");
  revalidatePath("/(web)/en/(blog)/posts/[slug]", "page");
}
