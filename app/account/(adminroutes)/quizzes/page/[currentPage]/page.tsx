import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Suspense } from "react";
import Spinner from "@/components/global/GlobalSpinner";
import { createClient } from "@/utils/supabase/server";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import GenerateQuiz from "../../Generate";
import SearchInput from "../../../../../../components/Table/SearchInput";
import TableSkeleton from "../../../../../../components/Table/TableSkeleton";
import TableDemo from "../../../../../../components/Table/TableRows";
import PaginateTable from "../../../../../../components/Table/PaginateTable";
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
      <Suspense fallback={<TableSkeleton />}>
        <PaginateTable
          currentPage={currentPage}
          query={query}
          table={"quizzes"}
        />
      </Suspense>
    </main>
  );
}
export default QuizzesPage;
