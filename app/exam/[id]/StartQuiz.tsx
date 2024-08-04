"use client";
import SubmitButton from "@/components/global/SubmitButton";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import React, { useTransition } from "react";
import { toast } from "sonner";

type Props = {
  quiz_id: number;
  userId: string;
};

const StartQuiz = ({ quiz_id, userId }: Props) => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const supabase = createClient();
  function handleQuizStart() {
    startTransition(async () => {
      const { error } = await supabase.from("submissions").insert({
        quiz_id: quiz_id,
        submitter: userId,
        created_at: new Date().toISOString(),
      });
      if (error) {
        toast.error(error.message);
        return;
      }

      toast.success("Quiz Started");
      router.refresh();
    });
  }
  return (
    <SubmitButton
      isLoading={isPending}
      onClick={handleQuizStart}
      className="w-fit"
    >
      Start Quiz
    </SubmitButton>
  );
};

export default StartQuiz;
