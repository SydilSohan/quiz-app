"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
type Props = {
  currentPage: number;
  nextDisabled: boolean;
};

const PaginateButton = ({ currentPage, nextDisabled }: Props) => {
  const pathName = usePathname();
  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;
  const baseUrl = pathName.includes("page") ? "" : `${pathName}/page/`;
  //if pathname containes page then append

  return (
    <div className="p-0 pt-2">
      <Button disabled={currentPage === 0}>
        <Link prefetch href={`${currentPage - 1}`}>
          Prev
        </Link>
      </Button>
      <Button className="mx-2" disabled={nextDisabled}>
        <Link prefetch href={`${baseUrl}${currentPage + 1}`}>
          Next
        </Link>
      </Button>
    </div>
  );
};

export default PaginateButton;
