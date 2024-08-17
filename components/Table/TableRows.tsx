import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TableCell, TableRow } from "@/components/ui/table";
import { TableCommonReturn, TablesEnum } from "@/types/types";
import DeleteButton from "./DeleteButton";
export default function TableDemo({
  query,
  currentPage,
  data,
  table,
}: {
  query: string;
  currentPage: number;
  data: TableCommonReturn;
  table: TablesEnum;
}) {
  return (
    <>
      {" "}
      {data?.length === 0 && (
        <TableRow>
          <TableCell>Nothing more to show</TableCell>
        </TableRow>
      )}
      {data?.map(({ id, name }, index) => (
        <TableRow key={index} className="h-12 ">
          <TableCell className="font-medium  p-0">{name}</TableCell>

          <TableCell className="text-right justify-end p-0 flex gap-3 text-xs items-center align-middle my-auto">
            {" "}
            <Button variant={"secondary"} className="h-6 rounded-full text-xs">
              <Link href={`/account/${table}/${id}`}>View</Link>
            </Button>
            {table === "quizzes" && (
              <>
                <Button className="h-6 rounded-full text-xs">
                  <Link href={`/account/${table}/compose/${id}`}>Edit</Link>
                </Button>
                <DeleteButton table={table} id={id} name={name} />
              </>
            )}
          </TableCell>
        </TableRow>
      ))}
    </>
  );
}
