import { Button } from "@/components/ui/button";
import Link from "next/link";
import GenerateQuiz from "./Generate";
import { Suspense } from "react";
import TableDemo from "./QuizzesTable";
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
import TableSkeleton from "./TableSkeleton";
import SearchInput from "./SearchInput";
async function QuizzesPage({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 0;
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
      <SearchInput placeholder="hey" />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>

            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <Suspense fallback={<TableSkeleton />}>
            <TableDemo query={query} currentPage={currentPage} />
          </Suspense>
        </TableBody>
      </Table>
    </main>
  );
}
export default QuizzesPage;
