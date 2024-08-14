import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Tables } from "@/types/supabase";
import { HeartIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import HeartButton from "./HeartButton";

type Props = {
  user: Partial<Tables<"profiles">> | null;
  id: number;
  name: string;
};

const QuizCard = ({ id, name, user }: Props) => {
  return (
    <Card key={id} className="w-full rounded-sm">
      <CardHeader>
        <CardTitle className="capitalize text-xl">{name}</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardFooter className="space-x-2">
        {/* <HeartButton id={id} /> */}
        <Button>
          <Link href={"/exam/" + id}>View</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default QuizCard;
