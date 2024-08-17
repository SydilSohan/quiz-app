import { Button } from "@/components/ui/button";
import Link from "next/link";
import ExamForm from "./QuizForm";

import { createClient } from "@/utils/supabase/server";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { redirect } from "next/navigation";
export const revalidate = 0;
export const dynamic = "force-dynamic";

async function Page({
  params,
}: {
  params: {
    type: [string, string | null];
  };
}) {
  const supabase = createClient();
  const id = params.type[1] ? parseInt(params.type[1]) : null;
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const type = params.type[0];
  const { data } = id
    ? await supabase.from("quizzes").select("*").eq("id", id).single()
    : { data: null };

  if (type === "compose")
    return (
      <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        <Suspense fallback={<Skeleton className="w-full h-full" />}>
          <ExamForm quiz={data} user={user} />
        </Suspense>
      </main>
    );
  else redirect("/quizzes/" + params.type[0]);
}
export default Page;
