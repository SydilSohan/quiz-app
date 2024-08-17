import PaginateTable from "@/components/Table/PaginateTable";
import TableSkeleton from "@/components/Table/TableSkeleton";
import { Suspense } from "react";

async function SubmissionsDashboard({
  params,
  searchParams,
}: {
  params: { currentPage: string };
  searchParams?: { query?: string };
}) {
  return (
    <main className="border-solid border-2 border-gray-400  rounded-sm p-4  w-full min-w-fit">
      <Suspense fallback={<TableSkeleton />}>
        <PaginateTable
          currentPage={Number(params.currentPage) || 0}
          query={searchParams?.query || ""}
          table="submissions"
        />
      </Suspense>
    </main>
  );
}
export default SubmissionsDashboard;
