import { Suspense } from "react";
import TableDemo from "./TableRows";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import SearchInput from "./SearchInput";
import { TablesEnum } from "@/types/types";
import { getTableData } from "./action";
import { ScrollArea } from "@/components/ui/scroll-area";
import PaginateButton from "./PaginateButton";
import TableSkeleton from "./TableSkeleton";
type Props = {
  currentPage: number;
  query: string;
  table: TablesEnum;
};

const PaginateTable = async ({ currentPage = 0, query = "", table }: Props) => {
  const { data, count } = await getTableData({ table, currentPage, query });
  console.log(data, count);
  return (
    <div className="space-y-2">
      <SearchInput placeholder={`Search ${table}`} />

      <ScrollArea className="h-[65vh] sm:h-96 shadow-inner">
        <Table className="">
          <TableHeader className="p-0">
            <TableRow className="py-2 px-0">
              <TableHead>Name</TableHead>

              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <Suspense fallback={<TableSkeleton />}>
              <TableDemo
                query={query}
                currentPage={currentPage}
                data={data}
                table={table}
              />
            </Suspense>
          </TableBody>
        </Table>
      </ScrollArea>
      <PaginateButton
        currentPage={currentPage}
        nextDisabled={(data?.length || 0) < 10}
      />
    </div>
  );
};

export default PaginateTable;
