import PaginateTable from "@/components/Table/PaginateTable";
import TableSkeleton from "@/components/Table/TableSkeleton";
import { Suspense } from "react";

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
    <main className="flex   flex-col lg:gap-6 lg:p-6">
      <Suspense fallback={<TableSkeleton />}>
        <PaginateTable
          currentPage={currentPage}
          query={query}
          table={"submissions"}
        />
      </Suspense>
    </main>
  );
}
export default QuizzesPage;
