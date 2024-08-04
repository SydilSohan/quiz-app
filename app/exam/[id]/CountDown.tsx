"use client";
import React from "react";
import Countdown from "react-countdown";
// import { handleExpire } from './actions';
import { toast } from "sonner";
import DrawerCount from "./DrawerCount";
import { getResults } from "./action";
import { z } from "zod";
import { formSchema } from "./SingleQuiz";
import Spinner from "@/components/global/GlobalSpinner";

const CountdownTimer = ({
  date,
  quizId,
  answers,
}: {
  date: number;
  quizId: number;
  answers: z.infer<typeof formSchema>;
}) => {
  const [isPending, startTransition] = React.useTransition();
  function handleComplete() {
    toast.info("Countdown Expired, submitting answers...");
    startTransition(async () => {
      const { status, message } = await getResults({
        answers: Object.values(answers),
        quizId,
      });
      toast[status](message);
    });
  }
  return isPending ? (
    <Spinner />
  ) : (
    <Countdown
      date={date}
      onComplete={handleComplete}
      renderer={({ hours, minutes, seconds, completed }) => {
        if (completed) {
          return (
            <span suppressHydrationWarning className="text-2xl text-red-500">
              Countdown Expired!
            </span>
          );
        } else {
          return (
            <DrawerCount hours={hours} minutes={minutes} seconds={seconds} />
          );
        }
      }}
    />
  );
};

export default CountdownTimer;
