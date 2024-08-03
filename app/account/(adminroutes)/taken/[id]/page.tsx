import ResultsCard from "@/components/global/ResultsCard";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Results } from "@/types/types";
import { createClient } from "@/utils/supabase/server";
import { TrophyIcon } from "lucide-react";

type Props = {
  params: {
    id: string;
  };
  searchParams: {
    id: string;
  };
};

const TakenIdPage = async ({ params }: Props) => {
  const sup = createClient();
  const { data, error } = await sup
    .from("submissions")
    .select("* , quizzes (*, profiles(*)), profiles (*)")
    .eq("id", params.id)
    .single();
  if (error) return <div>An error occured fetching submission</div>;
  return (
    <>
      <Card className="w-full ">
        <CardHeader className="flex flex-row items-center justify-between border-b pb-4">
          <div className="space-y-1">
            <h2 className="text-left   font-bold capitalize text-3xl">
              {data.quizzes?.name}
            </h2>
            <p className="text-sm text-muted-foreground">
              Examinee:{" "}
              {data?.profiles?.first_name + " " + data.profiles?.last_name}
            </p>
            Examiner:{" "}
            {data?.quizzes?.profiles?.first_name +
              " " +
              data.quizzes?.profiles?.last_name}
          </div>
          <TrophyIcon className="h-8 w-8 text-primary" />
        </CardHeader>
        <CardContent className="grid grid-cols-3 gap-4 py-6">
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold text-green-600">
              {data.score}
            </div>
            <p className="text-sm text-muted-foreground">Right Answers</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold text-red-600">
              {Array.isArray(data?.quizzes?.questions)
                ? data?.quizzes?.questions.length - data?.score!
                : 0}
            </div>
            <p className="text-sm text-muted-foreground">Wrong Answers</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold text-success">A-</div>
            <p className="text-sm text-muted-foreground">Grade</p>
          </div>
        </CardContent>
      </Card>
      <ResultsCard
        grade="F"
        quizData={data.quizzes}
        quiz_results={data.results as Results[]}
        score={data.score ?? 0}
        key={data.id}
      />
    </>
  );
};

export default TakenIdPage;
