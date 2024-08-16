import { Skeleton } from "@/components/ui/skeleton";
import { TableCell, TableRow } from "@/components/ui/table";
import React from "react";

type Props = {};

const TableSkeleton = (props: Props) => {
  return (
    <>
      <TableRow>
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
      <TableRow>
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
      <TableRow>
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
      <TableRow>
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
    </>
  );
};

export default TableSkeleton;
