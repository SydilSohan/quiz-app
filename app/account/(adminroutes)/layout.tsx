import Link from "next/link";
import {
  BeerIcon,
  FileQuestionIcon,
  Home,
  MapIcon,
  Menu,
  ShoppingCart,
  User2,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { createClient } from "@/utils/supabase/server";
import SingleNav from "@/components/global/SingleNav";
import BreadCrumbs from "@/components/global/BreadCrumbs";

async function DashboardLayout({ children }: { children: React.ReactNode }) {
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
      label: "orders",
      href: "/account/orders",
      icon: <ShoppingCart size={18} />,
    },
    {
      label: "Submissions",
      href: "/account/route-status",
      icon: <ShoppingCart size={18} />,
    },
  ];
  /*   const { data, error } = await supabase.auth.getUser();
  const { data: role, error: perr } = await supabase
    .from('profiles')
    .select('role')
    .single();
  if (role?.role === 'user') return redirect('/account/dashboard');
  if (error) redirect(`/login?status=failed`); */

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
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              {userNavigation.map((nav, i) => (
                <SingleNav key={i} item={nav} />
              ))}
            </nav>
          </div>
        </div>
      </div>
      <div className="flex max-w-[100vw] flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium">
                {userNavigation.map((nav, i) => (
                  <SingleNav key={i} item={nav} />
                ))}
              </nav>
            </SheetContent>
          </Sheet>

          <BreadCrumbs />
        </header>
        {children}
      </div>
    </div>
  );
}
export default DashboardLayout;
