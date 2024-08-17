import { Metadata } from "next";
import config from "@/app.config.json";
import { HeroHighlight } from "@/components/aceternity/hero-highlight";
import { createClient } from "@/utils/supabase/client";
import QuizCard from "./QuizCard";
import { redirect } from "next/navigation";
export const revalidate = 60 * 3;
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

export default async function QuizPage() {
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
    <main className="max-w-screen-xl sm:mx-auto py-4  lg:py-12 w-full">
      <HeroHighlight>
        <h1 className="font-black text-5xl">{config.content.tagline}</h1>
      </HeroHighlight>
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-4 place-items-start py-8 px-4 ">
        {data?.map(({ profiles: user, id, name }) => (
          <QuizCard user={user} id={id} name={name} key={id} />
        ))}
      </section>
    </main>
  );
}
