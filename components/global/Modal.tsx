"use client";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const Modal = ({ children }: Props) => {
  const router = useRouter();
  function handleOpenChange() {
    router.back();
  }
  return (
    <Dialog modal defaultOpen open onOpenChange={handleOpenChange}>
      <DialogContent className="w-[95%]">
        {children}

        <DialogFooter>
          <DialogClose>Close</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
