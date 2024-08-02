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
  } = await sup.auth.getUser();
  const { data, error } = await sup
    .from("submissions")
    .select("*")
    .eq("submitter", user?.id!);
  return (
    <div className="grid col-span-3">
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
                    href={`/account/taken?${new URLSearchParams({
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
