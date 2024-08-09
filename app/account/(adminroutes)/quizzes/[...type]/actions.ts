'use server'

import { revalidatePath } from "next/cache";

export function revalidateClientPath(path : string) {
  revalidatePath(path);
}