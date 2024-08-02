import { Tables } from "@/types/supabase";
import { NextRequest, NextResponse } from "next/server";

type Payload = {
  type: 'INSERT';
  table: string;
  schema: string;
  record: Tables<'submissions'>;
  old_record: null;
};
export async function POST(req: NextRequest, res: NextResponse) {
  console.log(req.body)
  const payload: Payload = await req.json();
    console.log(payload)
  return NextResponse.json(payload)
}