"use client";
import Loader from "@/components/global/GlobalSpinner";
import { Button } from "@/components/ui/button";
import useGetUser from "@/hooks/useGetUser";
import { Link } from "next-view-transitions";
import React, { useEffect } from "react";

type Props = {};

const SignInButton = (props: Props) => {
  const { loading, user } = useGetUser({ getProfile: false });

  return (
    <Button className="w-24">
      {loading && <Loader />}
      {!loading && !user && <Link href={"/auth/login"}>Sign In</Link>}
      {!loading && user && <Link href={"/account/dashboard"}>Dashboard</Link>}
    </Button>
  );
};

export default SignInButton;
