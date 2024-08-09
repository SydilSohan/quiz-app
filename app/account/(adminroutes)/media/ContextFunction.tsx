"use client";

import { ContextMenuItem } from "@/components/ui/context-menu";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { use, useTransition } from "react";
import { toast } from "sonner";

type Props = {
  type: "delete" | "copy" | "team" | "subscription";
  url: string;
  deleteKey: string;
  fileName: string;
};

const ContextFunction = ({ type, url, deleteKey, fileName }: Props) => {
  const supabase = createClient();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const handleDelete = () => {
    isPending ? toast.loading("Deleting...") : null;
    startTransition(async () => {
      const { error } = await supabase.storage
        .from("quizassets")
        .remove([deleteKey]);
      error
        ? toast.error(error.message)
        : toast.success("Successfully deleted" + " " + fileName);
    });
    router.refresh();
  };
  return (
    <>
      <ContextMenuItem
        onClick={
          type === "delete"
            ? handleDelete
            : () => navigator.clipboard.writeText(url)
        }
      >
        {type}
      </ContextMenuItem>
    </>
  );
};

export default ContextFunction;
