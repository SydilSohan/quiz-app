import Link from "next/link";
import {
  FileIcon,
  FileQuestionIcon,
  GraduationCap,
  Home,
  ShoppingCart,
  User2,
} from "lucide-react";

import SingleNav from "@/components/global/SingleNav";
import BreadCrumbs from "@/components/global/BreadCrumbs";
import Signout from "./Signout";
import DynamicSheet from "./DynamicSheet";

async function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid min-h-screen max-w-[100vw] overflow-x-hidden md:w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <User2 className="h-6 w-6" />
            </Link>
          </div>
          <div className="flex-1">
            <UserNav />
          </div>
        </div>
      </div>
      <div className="flex max-w-[100vw] flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <DynamicSheet>
            <UserNav />
          </DynamicSheet>
          <BreadCrumbs />
        </header>
        {children}
      </div>
    </div>
  );
}
export default DashboardLayout;

const UserNav = () => {
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
    <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
      {userNavigation.map((nav, i) => (
        <SingleNav key={i} item={nav} />
      ))}
      <Signout />
    </nav>
  );
};
