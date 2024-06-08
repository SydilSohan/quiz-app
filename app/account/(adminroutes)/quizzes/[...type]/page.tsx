import { Button } from "@/components/ui/button";
import Link from "next/link";
import ExamForm from "./QuizForm";

import { createClient } from "@/utils/supabase/server";
import SingleQuiz from "./SingleQuiz";
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

  const { data } = params.type[1]
    ? await supabase
        .from("quizzes")
        .select("*")
        .eq("id", parseInt(params.type[1]))
        .single()
    : { data: null };

  if (params.type[0] === "compose")
    return (
      <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        <div className="flex items-center justify-between">
          {/* <h1 className="text-lg font-semibold md:text-2xl">
          {params.type} Quiz - {data?.name}
        </h1> */}

          <Button asChild className="mt-4">
            <Link href={"/account/quizzes"}>Go Back</Link>
          </Button>
          {params.type[1] && (
            <Button asChild className="mt-4">
              <Link href={"/account/quizzes/preview/" + params.type[1]}>
                Preview
              </Link>
            </Button>
          )}
        </div>
        <ExamForm quiz={data} />
      </main>
    );
  console.log(params.type[0] === "preview");
  if (params.type[0] === "preview") {
    return (
      <main className="p-4">
        <Button asChild className="my-2">
          <Link href={"/account/quizzes/compose/" + params.type[1]}>Edit</Link>
        </Button>
        <SingleQuiz
          questions={data?.questions!}
          instructions={data?.instructions!}
          proceed
          name={data?.name!}
          quizId={data?.id!}
        />
      </main>
    );
  }
}
export default Page;
