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
import { Suspense } from "react";

async function SubmissionsDashboard() {
  const sup = createClient();
  const {
    data: { user },
    error: userError,
  } = await sup.auth.getUser();
  const { data, error } = await sup
    .from("submissions")
    .select("id, profiles (first_name)")
    .neq("submitter", user?.id);
  return (
    <div className="border-solid border-2 border-gray-400  rounded-sm p-4 w-full grid col-span-2">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Examinee</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          <Suspense fallback={<div>Loading...</div>}>
            {data?.map((sub) => (
              <TableRow key={sub.id}>
                <TableCell className="font-medium">{sub.id}</TableCell>

                <TableCell className="font-medium">
                  {sub.profiles?.first_name}
                </TableCell>
                <TableCell className="font-medium"></TableCell>

                <TableCell className="text-left">
                  <Button asChild>
                    <Link href={`/account/submissions/${sub.id}`}>View</Link>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </Suspense>
        </TableBody>
      </Table>
    </div>
  );
}
export default SubmissionsDashboard;
