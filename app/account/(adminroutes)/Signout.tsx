"use client";

import SubmitButton from "@/components/global/SubmitButton";
import { createClient } from "@/utils/supabase/client";
import { ExitIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

type Props = {};

const Signout = (props: Props) => {
  const supabase = createClient();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const handleSignOut = async () => {
    startTransition(async () => {
      await supabase.auth.signOut();
    });
    router.refresh();
  };
  return (
    <SubmitButton
      variant={"ghost"}
      className="pl-3 text-left flex items-start justify-start "
      isLoading={isPending}
      onClick={handleSignOut}
    >
      <ExitIcon className="size-4  mr-2 " />
      SignOut
    </SubmitButton>
  );
};

export default Signout;
