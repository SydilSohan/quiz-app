import { Metadata } from "next";
import config from "@/app.config.json";
import { HeroHighlight } from "@/components/aceternity/hero-highlight";
import { createClient } from "@/utils/supabase/client";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HeartIcon } from "@radix-ui/react-icons";
import QuizCard from "./QuizCard";
import Image from "next/image";
export const metadata: Metadata = {
  title: config.appName,
  description: config.metaDescription,
  keywords: config.keywords,
  openGraph: {
    url: process.env.NEXT_PUBLIC_SITE_URL!,
    type: "website",
    title: config.appName,
    description: config.metaDescription,
    images: [
      {
        url: config.brandLogo,
        width: 1200,
        height: 630,
        alt: config.appName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: config.appName,
    description: config.metaDescription,
    creator: config.author,
    site: process.env.NEXT_PUBLIC_SITE_URL!,
    images: [
      {
        url: config.brandLogo,
        width: 1200,
        height: 630,
        alt: config.appName,
      },
    ],
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL!,
  },
};

export default async function Index() {
  const supabase = createClient();
  const { data } = await supabase
    .from("quizzes")
    .select("name, id, profiles(first_name, last_name)")
    .eq("privacy", "public")
    .limit(10);
  const { data: storage, error } = await supabase.storage
    .from("quizassets")
    .list("a05fa8dd-0abd-453d-8b8b-661f848e8a54");
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return (
    <main className="max-w-screen-xl mx-auto  py-12">
      <HeroHighlight>
        <h1 className="font-black text-5xl">{config.content.tagline}</h1>
      </HeroHighlight>
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-4 place-items-start py-8 px-4 ">
        {data?.map(({ profiles: user, id, name }) => (
          <QuizCard user={user} id={id} name={name} />
        ))}
      </section>
    </main>
  );
}
