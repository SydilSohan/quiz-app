import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { TableCell, TableRow } from "@/components/ui/table";
export default async function TableDemo({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const { from, to } = getPagination(currentPage, 10);
  const {
    data: quizzes,
    error,
    count,
  } = await supabase
    .from("quizzes")
    .select("id, name", { count: "exact" })
    .eq("user_id", user?.id!)
    .order("created_at", { ascending: false })
    .ilike("name", `%${query}%`)
    .range(from, to);
  return (
    <>
      {quizzes?.map((quiz, index) => (
        <TableRow key={index} className="h-12 ">
          <TableCell className="font-medium  p-0">{quiz.name}</TableCell>

          <TableCell className="text-right justify-end p-0 flex gap-3 text-xs items-center align-middle my-auto">
            {" "}
            <Button variant={"secondary"} className="h-6 rounded-full text-xs">
              <Link
                href={
                  process.env.NEXT_PUBLIC_SITE_URL! + "/account/exam/" + quiz.id
                }
              >
                View
              </Link>
            </Button>
            <Button className="h-6 rounded-full text-xs">
              <Link href={`/account/quizzes/compose/${quiz.id}/`}>Edit</Link>
            </Button>
          </TableCell>
        </TableRow>
      ))}
      <TableRow className="mt-4 pt-2">
        <TableCell className="p-0 pt-4">
          <Button disabled={currentPage === 0}>
            <Link href={`?page=${currentPage - 1}`}>Prev</Link>
          </Button>
          <Button className="mx-2" disabled={(quizzes?.length || 0) < 10}>
            <Link href={`?page=${currentPage + 1}`}>Next</Link>
          </Button>
        </TableCell>
      </TableRow>
    </>
  );
}

const getPagination = (page: number, size: number) => {
  const limit = size ? +size : 3;
  const from = page ? page * limit : 0;
  const to = page ? from + size : size;

  return { from, to };
};
