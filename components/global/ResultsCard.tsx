import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../ui/accordion";
import { CheckCircleIcon, CircleX, TrophyIcon } from "lucide-react";
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { Tables } from "@/types/supabase";
import { Results } from "@/types/types";
import { Separator } from "../ui/separator";
type Props = {
  quiz_results: Results[];
  grade: string;
  score: number;
  quizData: Tables<"quizzes"> | null;
};
export default function ResultsCard({
  // purchasedRoute: { quiz_results },
  quiz_results,
  grade,
  score,
  quizData,
}: Props) {
  return (
    <>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="details">
          <AccordionTrigger>Details</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-gray-700">
            {quiz_results?.map((result) => (
              <>
                <h3> {result.name} </h3>
                <div className="flex gap-2">
                  <span className="font-semibold"> Your answer:</span>

                  <span
                    className={
                      result.isCorrect ? "text-green-700" : "text-red-700"
                    }
                  >
                    {result.answer}
                  </span>
                  {result.isCorrect ? (
                    <CheckCircleIcon size={20} color="green" />
                  ) : (
                    <CircleX color="red" size={20} />
                  )}
                  {result.correctAnswer && (
                    <p>Correct Answer : {result.correctAnswer}</p>
                  )}
                </div>
                <Separator />
              </>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
