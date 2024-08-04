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
    .select("*, profiles (first_name)")
    .eq("submitter", user?.id!);
  return (
    <main className="border-solid border-2 border-gray-400  rounded-sm p-4  w-full min-w-fit">
      <Table className="w-full">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Examinee</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((sub) => (
            <TableRow key={sub.id}>
              <TableCell className="font-medium">{sub.id}</TableCell>

              <TableCell className="font-medium">
                {sub.profiles?.first_name}
              </TableCell>
              <TableCell className="font-medium"></TableCell>

              <TableCell className="text-left">
                <Button asChild>
                  <Link href={`/account/taken/${sub.id}`}>View</Link>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </main>
  );
}
export default SubmissionsDashboard;
