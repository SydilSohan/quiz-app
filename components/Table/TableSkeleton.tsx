import { Skeleton } from "@/components/ui/skeleton";
import { TableCell, TableRow } from "@/components/ui/table";
import React from "react";

type Props = {};

const TableSkeleton = (props: Props) => {
  return (
    <>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
        <TableRow key={item}>
          <TableCell>
            <Skeleton className="w-full h-10" />
          </TableCell>
          <TableCell>
            <Skeleton className="w-full h-10" />
          </TableCell>
          <TableCell>
            <Skeleton className="w-full h-10" />
          </TableCell>
        </TableRow>
      ))}
    </>
  );
};

export default TableSkeleton;
