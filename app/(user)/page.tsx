import { Metadata } from "next";
import config from "@/app.config.json";
import { HeroHighlight } from "@/components/aceternity/hero-highlight";
import { createClient } from "@/utils/supabase/server";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
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
  return (
    <main className="max-w-screen-xl mx-auto  py-12">
      <HeroHighlight>
        <h1 className="font-black text-5xl">{config.content.tagline}</h1>
      </HeroHighlight>
      <section className="grid grid-cols-3 gap-4 place-items-start py-8 ">
        {data?.map((item) => (
          <Card className="w-full rounded-sm">
            <CardHeader>
              <CardTitle>
                <h2 className="capitalize text-xl">{item.name}</h2>
              </CardTitle>
              <CardDescription>
                by{" "}
                {`${item.profiles?.first_name} ${item.profiles?.last_name}` ||
                  "unknown"}
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button>
                <Link href={"/exam/" + item.id}>View</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </section>
    </main>
  );
}
