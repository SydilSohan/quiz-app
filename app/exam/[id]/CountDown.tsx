"use client";
import React from "react";
import Countdown from "react-countdown";
// import { handleExpire } from './actions';
import { toast } from "sonner";
import DrawerCount from "./DrawerCount";

const CountdownTimer = ({
  date,
  purchasedRoute_id,
}: {
  date: number;
  purchasedRoute_id: number;
}) => {
  const [isPending, startTransition] = React.useTransition();
  return (
    <Countdown
      date={date}
      onComplete={
        () => {}
        // startTransition(async () => {
        //   const { status, message } = await handleExpire(purchasedRoute_id);
        //   toast[status](message);
        // })
      }
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
