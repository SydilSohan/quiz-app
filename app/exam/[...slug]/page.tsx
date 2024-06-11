import SingleQuiz from "@/app/account/(adminroutes)/quizzes/[...type]/SingleQuiz";
import { createClient } from "@/utils/supabase/server";
import React from "react";

type Props = {
  params: { slug: [string, string | null] };
};

const ExamPage = async ({ params }: Props) => {
  if (!params.slug[1]) return <div>ExamPage</div>;
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  // only signInAnonymously if theres no user
  let data, error;
  // only signInAnonymously if theres no user
  if (!user) {
    ({ data, error } = await supabase.auth.signInAnonymously());
  }
  console.log(data, error, user);
  const { data: quiz } = await supabase
    .from("exam")
    .select("*")
    .eq("id", parseInt(params.slug[1]))
    .single();
  return (
    <main className="max-w-screen-md mx-auto border-1 border-gray-400 rounded-md p-4 border-solid">
      <div className="p-4 border-solid border-1 border-black">
        you're logged in as{" "}
        {user?.user_metadata.first_name || user?.email || "anonymous"}
        <SingleQuiz questions={quiz?.questions!} {...quiz} proceed />
      </div>
    </main>
  );
};

export default ExamPage;
