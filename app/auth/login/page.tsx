import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { Brand } from "@/app/(user)/_components/Header";
import ClientLogin from "@/components/auth/ClientLogin";

export default async function LoginForm() {
  const supabase = createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  const { data: role, error: perr } = await supabase
    .from("profiles")
    .select("role")
    .single();
  if (role?.role === "admin") return redirect("/admin");
  if (role?.role === "user") return redirect("/account/dashboard");
  const headersList = headers();
  const currentHost = headersList.get("host");
  const currentProto = headersList.get("x-forwarded-proto");
  const currentUrl = currentProto + "://" + currentHost; // to get domain

  return (
    <main className="space-y-4 flex flex-col items-center ">
      <Brand />
      <ClientLogin />
    </main>
  );
}
