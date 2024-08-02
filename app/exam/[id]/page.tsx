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
import { Tables } from "@/types/supabase";
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import StartQuiz from "./StartQuiz";
import CountdownTimer from "./CountDown";

type Props = {
  params: { id: string };
};

const ExamPage = async ({ params }: Props) => {
  if (!params.id) return <div>ExamPage</div>;

  const supabase = createClient();
  const { data: quiz, error: dataError } = await supabase
    .from("exam")
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
  // if (submissionError) throw new Error(submissionError.message);
  if (submissions) isTaken = true;
  if (isTaken && !submissions.ended_at) {
    const date =
      new Date(submissions.created_at).getTime() + 2 * 60 * 60 * 1000;
    return (
      <main className="max-w-screen-md mx-auto border-1 border-gray-400 rounded-md p-4 border-solid">
        <div className="p-4 border-solid border-1 border-black">
          <CountdownTimer date={date} purchasedRoute_id={submissions.id} />
          <SingleQuiz
            questions={quiz?.questions as QuestionColumnType[]}
            proceed
            userId={user?.id}
            quizId={quiz?.id ?? undefined}
          />
        </div>
      </main>
    );
  }

  return (
    <main className="w-full mx-auto flex  justify-center items-center min-h-screen">
      <Card className="max-w-screen-sm mx-auto  flex-1">
        <CardHeader className="px-6 pt-6">
          <CardTitle className="text-2xl font-bold">
            Take the {quiz?.name} Quiz
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            {quiz?.instructions}
          </CardDescription>
        </CardHeader>
        <CardContent className="px-6 pb-6">
          {user ? (
            !isTaken ? (
              <StartQuiz quiz_id={quiz?.id!} userId={user.id} />
            ) : (
              <>
                <p className="mb-2 text-sm text-muted-foreground">
                  {" "}
                  You've already taken this quiz.
                </p>
                <Button className="w-fit">
                  <Link
                    href={
                      "/account/taken/?" +
                      new URLSearchParams({
                        id: submissions.id.toString() ?? "",
                      })
                    }
                  >
                    View your submission
                  </Link>
                </Button>
              </>
            )
          ) : (
            <Button className="w-full">
              <Link href={"/auth/login"}>Login to start</Link>
            </Button>
          )}
        </CardContent>
      </Card>{" "}
    </main>
  );

  // const quizInterface = (
  //   <main className="max-w-screen-md mx-auto border-1 border-gray-400 rounded-md p-4 border-solid">
  //     <div className="p-4 border-solid border-1 border-black">
  //       you're logged in as {user.email}{" "}
  //       <SingleQuiz
  //         questions={quiz?.questions as QuestionColumnType[]}
  //         proceed
  //         userId={user.id}
  //         quizId={quiz.id ?? undefined}
  //       />
  //     </div>
  //   </main>
  // );
  // return <>{`${(submissions, quiz)}`}</>;
};

export default ExamPage;
