'use server'

import { TableCommonReturn, TablesEnum } from "@/types/types";
import { createClient } from "@/utils/supabase/server";
type ReturnData = {
    data : TableCommonReturn 
    count : number | null;
}
export async function getTableData({table = "quizzes"  , currentPage = 1, query = "" } : {
    table: TablesEnum;
    currentPage: number;
    query: string;
}) : Promise<ReturnData> {
    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    const { from, to } = getPagination(currentPage, 10);
    if ( table === "quizzes") {
          const {
      data,
      count,
    } = await supabase
      .from(table)
      .select("id, name", { count: "exact" })
      .eq("user_id", user?.id!)
      .order("created_at", { ascending: false })
      .ilike("name", `%${query}%`)
      .range(from, to)
    return {  data , count }
    }
    else if ( table === "submissions") {
        console.log(table)
          const {
      data, error : err,
      count,
    } = await supabase
      .from("submissions")
      .select("id, quizzes (name)", { count: "exact" })
      .eq("submitter", user?.id!)
    //   .order("created_at", { ascending: false })
    //   .ilike("quizzes (name)", `%${query}%`)
      .range(from, to)
      console.log(err)
    if (!data) return { data : [] , count : 0 }
    const newD : TableCommonReturn =   data.map(({ id, quizzes }) => ({ id, name: quizzes!.name })) 
    return {  data : newD , count }
} 
  return { data : [] , count : 0 }
}

const getPagination = (page: number, size: number) => {
  const limit = size ? +size : 3;
  const from = page ? page * limit : 0;
  const to = page ? from + size : size;

  return { from, to };
};
