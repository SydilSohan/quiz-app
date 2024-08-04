"use client";

import useGetUser from "@/hooks/useGetUser";
import AuthTabs from "./AuthTab";
import Loader from "../../global/GlobalSpinner";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Link } from "next-view-transitions";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import Signout from "@/app/account/(adminroutes)/Signout";

const ClientLogin = () => {
  const { user, loading } = useGetUser();

  const router = useRouter();
  if (loading) return <Loader />;
  if (user)
    return (
      <Card className="m-2 w-4/5 max-w-screen-sm">
        <CardHeader>
          <CardTitle>
            Welcome back,{" "}
            {user.user_metadata.first_name ||
              user.user_metadata.name ||
              user.email?.split("@")[0]}
          </CardTitle>
        </CardHeader>

        <CardContent>
          <p>You are signed in.</p>

          <p className="underline">
            <Link href={"/account"}>Go to dashboard</Link>
          </p>
          <Signout />
        </CardContent>
      </Card>
    );
  return <AuthTabs />;
};

export default ClientLogin;
