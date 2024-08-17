import { Button } from "@/components/ui/button";
import Link from "next/link";
import GenerateQuiz from "./Generate";
import PaginateTable from "@/components/Table/PaginateTable";
async function QuizzesPage({
  params,
  searchParams,
}: {
  params: {
    currentPage: string;
  };
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(params.currentPage) || 0;
  console.log(currentPage);
  return (
    <main className="flex   flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold md:text-2xl">Quizzes</h1>
        <div className="flex gap-2">
          <GenerateQuiz />
          <Button asChild className="">
            <Link href={"/account/quizzes/compose"}>Add Quiz</Link>
          </Button>
        </div>
      </div>
      <PaginateTable currentPage={currentPage} query={query} table="quizzes" />
    </main>
  );
}
export default QuizzesPage;
