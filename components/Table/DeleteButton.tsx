"use client";
import SubmitButton from "@/components/global/SubmitButton";
import { TablesEnum } from "@/types/types";
import { createClient } from "@/utils/supabase/client";
import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

type Props = {
  id: number;
  table: TablesEnum;
  name: string;
};

const DeleteButton = ({ id, table, name }: Props) => {
  const [isPending, startTransition] = React.useTransition();
  const { refresh } = useRouter();
  const handleDelete = () => {
    startTransition(async () => {
      const supabase = createClient();
      const { data, error } = await supabase.from(table).delete().eq("id", id);
      error
        ? toast.error(error.message)
        : (() => {
            toast.success(`Deleted ${name}`);
            refresh();
          })();
    });
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <SubmitButton
          isLoading={isPending}
          variant={"destructive"}
          type="button"
        >
          Delete
        </SubmitButton>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete this
            record named {name}.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteButton;
