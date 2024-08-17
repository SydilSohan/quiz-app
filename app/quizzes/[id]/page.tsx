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
import SingleQuiz from "./SingleQuiz";

type Props = {
  params: { id: string };
};

const ExamPage = async ({ params }: Props) => {
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
      <main className=" mx-auto border-1 border-gray-400 rounded-md p-4 border-solid w-full">
        <div className="p-4 border-solid border-1 border-black mx-auto max-w-screen-md">
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
    <main className="w-full mx-auto space-y-2 p-4 flex-col">
      <Button>
        <Link href="/">Back</Link>
      </Button>
      <Card className="max-w-screen-sm mx-auto  flex-1">
        <CardHeader className="px-6 pt-6">
          <CardTitle className="text-2xl font-bold">
            Take the {quiz?.name} Quiz
          </CardTitle>
          <CardDescription className="text-muted-foreground divide-x-2 divide-solid space-y-2">
            {quiz?.instructions}
            <br />
            Time Limit : {quiz?.time ? `${quiz.time} minutes` : "None"}
            <br />
            Total Questions :{" "}
            {Array.isArray(quiz?.questions)
              ? quiz.questions.length
              : "Unknown"}{" "}
            <br />
            People who've taken this quiz: {count}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col">
          <p className="mb-2 text-sm text-muted-foreground">
            {" "}
            {isTaken
              ? `You've taken this quiz.`
              : "You haven't taken this quiz"}
          </p>
          {user &&
            (isTaken ? (
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
            ))}

          {!user && (
            <Button className="w-fit">
              <Link href={"/auth/login"}>Login to start</Link>
            </Button>
          )}
        </CardContent>
      </Card>{" "}
    </main>
  );
};

export default ExamPage;
