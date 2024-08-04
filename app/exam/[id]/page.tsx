import SingleQuiz from "@/app/exam/[id]/SingleQuiz";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { QuestionColumnType } from "@/types/schemas";
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import StartQuiz from "./StartQuiz";
import { Separator } from "@/components/ui/separator";

type Props = {
  params: { id: string };
};

const ExamPage = async ({ params }: Props) => {
  if (!params.id) return <div>ExamPage</div>;
  console.log(params.id);
  const supabase = createClient();
  const { data: quiz, error: dataError } = await supabase
    .from("quizzes")
    .select("*")
    .eq("id", parseInt(params.id))
    .single();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  let isTaken = false;
  const { data: submissions, error: submissionError } = await supabase
    .from("submissions")
    .select("id, created_at, ended_at")
    .eq("quiz_id", parseInt(params.id))
    .single();
  const { count } = await supabase
    .from("submissions")
    .select("*", { count: "exact", head: true })
    .eq("quiz_id", quiz?.id!);
  if (submissions) isTaken = true;
  if (isTaken && !submissions?.ended_at) {
    const date =
      quiz?.time === 0 || !quiz?.time
        ? null
        : new Date(submissions?.created_at!).getTime() + quiz?.time * 60 * 1000;
    return (
      <main className="max-w-screen-md mx-auto border-1 border-gray-400 rounded-md p-4 border-solid">
        <div className="p-4 border-solid border-1 border-black">
          <SingleQuiz
            questions={quiz?.questions as QuestionColumnType[]}
            proceed
            date={date}
            userId={user?.id}
            quizId={quiz?.id ?? undefined}
            submissionId={submissions?.id!}
            name={quiz?.name}
            instructions={quiz?.instructions}
          />
        </div>
      </main>
    );
  }

  return (
    <main className="w-full mx-auto flex  justify-center items-center min-h-screen p-4">
      <Card className="max-w-screen-sm mx-auto  flex-1">
        <CardHeader className="px-6 pt-6">
          <CardTitle className="text-2xl font-bold">
            Take the {quiz?.name} Quiz
          </CardTitle>
          <CardDescription className="text-muted-foreground divide-x-2 divide-solid space-y-2">
            <p>{quiz?.instructions}</p>
            <Separator className="w-3/4" />
            Time Limit : {quiz?.time ? `${quiz.time} minutes` : "None"}
            <p>
              <Separator className="w-3/4" />
              Total Questions :{" "}
              {Array.isArray(quiz?.questions)
                ? quiz.questions.length
                : "Unknown"}
            </p>
            <Separator className="w-3/4" />
            <p>People who've taken this quiz: {count}</p>
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col">
          <p className="mb-2 text-sm text-muted-foreground">
            {" "}
            {isTaken
              ? `You've taken this quiz.`
              : "You haven't taken this quiz"}
          </p>
          {isTaken ? (
            <div className="space-x-2">
              <Button className="w-fit " variant={"secondary"}>
                <Link href={"/account/taken/" + submissions?.id}>
                  View your submission
                </Link>
              </Button>
              {quiz?.retake && (
                <StartQuiz
                  isTaken={isTaken}
                  subId={submissions?.id}
                  retake={quiz?.retake}
                  quiz_id={quiz?.id!}
                  userId={user?.id}
                />
              )}
            </div>
          ) : (
            <StartQuiz
              isTaken={isTaken}
              subId={submissions?.id}
              retake={quiz?.retake}
              quiz_id={quiz?.id!}
              userId={user?.id}
            />
          )}

          {!user && (
            <Button className="w-full">
              <Link href={"/auth/login"}>Login to start</Link>
            </Button>
          )}
        </CardContent>
      </Card>{" "}
    </main>
  );
};

export default ExamPage;
