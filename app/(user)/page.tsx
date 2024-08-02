import { Metadata } from "next";
import config from "@/app.config.json";
import {
  CardBody,
  CardContainer,
  CardItem,
} from "@/components/aceternity/3d-card";
import { HeroHighlight } from "@/components/aceternity/hero-highlight";
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
  return (
    <main className="max-w-screen-xl mx-auto  py-12">
      <HeroHighlight>
        <h1 className="font-black text-5xl">{config.content.tagline}</h1>
      </HeroHighlight>
    </main>
  );
}
