"use client";
import SubmitButton from "@/components/global/SubmitButton";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import React, { useTransition } from "react";
import { toast } from "sonner";

type Props = {
  quiz_id: number;
  userId?: string;
  retake?: boolean;
  subId?: number;
  isTaken: boolean;
};

const StartQuiz = ({ quiz_id, userId, subId, isTaken }: Props) => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const supabase = createClient();
  function handleQuizStart() {
    startTransition(async () => {
      const { error } = await supabase.from("submissions").upsert({
        quiz_id: quiz_id,
        submitter: userId,
        created_at: new Date().toISOString(),
        ended_at: null,
        id: subId || undefined,
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
      {isTaken ? "Retake Quiz" : "Start Quiz"}
    </SubmitButton>
  );
};

export default StartQuiz;
