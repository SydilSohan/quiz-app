import ResultsCard from "@/components/global/ResultsCard";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Results } from "@/types/types";
import { createClient } from "@/utils/supabase/server";
import { TrophyIcon } from "lucide-react";

type Props = {};

const page = async ({
  searchParams: { id },
}: {
  searchParams: { id: string };
}) => {
  if (!id) return <div> no id</div>;
  const sup = createClient();
  const { data, error } = await sup
    .from("submissions")
    .select("* , quizzes (*), profiles (*)")
    .eq("id", id)
    .single();
  if (error) throw new Error("An error occured fetching submission");
  return (
    <main className=" grid col-span-2">
      <Card className="w-full ">
        <CardHeader className="flex flex-row items-center justify-between border-b pb-4">
          <div className="space-y-1">
            <h2 className="text-left   font-bold capitalize text-3xl">
              {data.quizzes?.name}
            </h2>
            <p className="text-sm text-muted-foreground">
              Examinee:{" "}
              {data.profiles.first_name + " " + data.profiles.last_name}
            </p>
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
              {data?.quizzes?.questions?.length - data?.score!}
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
    </main>
  );
};

export default page;
