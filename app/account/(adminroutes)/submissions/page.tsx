import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";

async function SubmissionsDashboard() {
  const sup = createClient();
  const {
    data: { user },
    error: userError,
  } = await sup.auth.getUser();
  const { data, error } = await sup
    .from("submissions")
    .select("*")
    .neq("submitter", user?.id);
  return (
    <div className="border-solid border-2 border-gray-400  rounded-sm p-4 w-full grid col-span-2">
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Link</TableHead>

            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((sub) => (
            <TableRow key={sub.id}>
              <TableCell className="font-medium">{sub.id}</TableCell>

              <TableCell className="font-medium">{sub.id}</TableCell>
              <TableCell className="font-medium"></TableCell>

              <TableCell className="text-right">
                <Button asChild>
                  <Link
                    href={`/account/submissions?${new URLSearchParams({
                      id: sub.id.toString(),
                    })}`}
                  >
                    View
                  </Link>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
export default SubmissionsDashboard;
