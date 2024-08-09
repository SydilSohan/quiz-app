"use client";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
} from "@/components/ui/dialog";
import { DialogOverlay } from "@radix-ui/react-dialog";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";

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
      <DialogContent className="w-[95%] h-[90vh] sm:h-[70vh]">
        {children}

        <DialogFooter className="flex items-end justify-end">
          <DialogClose>
            <Button type="button" variant={"outline"}>
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
