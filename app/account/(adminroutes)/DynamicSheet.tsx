"use client";
import Link from "next/link";
import {
  FileIcon,
  FileQuestionIcon,
  GraduationCap,
  Home,
  Menu,
  ShoppingCart,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import { Sheet, SheetContent } from "@/components/ui/sheet";
import Signout from "./Signout";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

function DynamicSheet({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathName = usePathname();
  useEffect(() => {
    if (open) setOpen(false);
  }, [pathName]);
  const userNavigation = [
    {
      label: "Home",
      href: "/account",
      icon: <Home size={18} />,
    },

    {
      label: "quizzes",
      href: "/account/quizzes",
      icon: <FileQuestionIcon size={18} />,
    },

    {
      label: "Submissions",
      href: "/account/submissions",
      icon: <ShoppingCart size={18} />,
    },
    {
      label: "Exams Taken",
      href: "/account/taken",
      icon: <GraduationCap size={18} />,
    },
    {
      label: "Media",
      href: "/account/media",
      icon: <FileIcon size={18} />,
    },
  ];

  return (
    <Sheet open={open} onOpenChange={() => setOpen((prev) => !prev)}>
      <Button
        onClick={() => setOpen(true)}
        variant="outline"
        size="icon"
        className="shrink-0 md:hidden"
      >
        <Menu className="h-5 w-5" />
        <span className="sr-only">Toggle navigation menu</span>
      </Button>
      <SheetContent side="left" className="flex flex-col">
        {children}
      </SheetContent>
    </Sheet>
  );
}
export default DynamicSheet;
