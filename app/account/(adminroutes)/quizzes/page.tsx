import { Button } from "@/components/ui/button";
import Link from "next/link";
import GenerateQuiz from "./Generate";
import PaginateTable from "@/components/Table/PaginateTable";
import { Suspense } from "react";
import TableSkeleton from "@/components/Table/TableSkeleton";
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
  return (
    <main className="flex   flex-col gap-4 p-4 lg:gap-6 lg:p-6 w-full">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold md:text-2xl">Quizzes</h1>
        <div className="flex gap-2">
          <GenerateQuiz />
          <Button asChild className="">
            <Link href={"/account/quizzes/compose"}>Add Quiz</Link>
          </Button>
        </div>
      </div>
      <Suspense fallback={<TableSkeleton />}>
        <PaginateTable
          currentPage={currentPage}
          query={query}
          table="quizzes"
        />
      </Suspense>
    </main>
  );
}
export default QuizzesPage;
