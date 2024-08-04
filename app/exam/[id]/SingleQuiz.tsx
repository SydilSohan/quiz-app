"use client";
import React, { useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import SubmitButton from "@/components/global/SubmitButton";
import Link from "next/link";
import { toast } from "sonner";
import { QuestionColumnType } from "@/types/schemas";
import { getResults } from "@/app/exam/[id]/action";
import { Tables } from "@/types/supabase";
import CountdownTimer from "./CountDown";
import { data } from "autoprefixer";
type Props = {
  questions: QuestionColumnType[];
  quizId?: number;
  instructions?: string | null;
  name?: string | null;
  proceed?: boolean;
  failed?: boolean;
  exam?: Tables<"exam"> | null;
  userId?: string | null;
  date: number;
  submissionId: number;
};
const ansSchema = z.object({
  questionId: z.string(),
  answer: z.string().min(1, "Answer is required"),
});

export const formSchema = z.record(ansSchema);

const SingleQuiz = ({
  questions,

  instructions,
  name,
  proceed,
  failed,
  quizId,
  userId,
  date,
  submissionId,
}: Props) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    // console.log(Object.values(data));
    const { status, message } = await getResults({
      answers: Object.values(data),
      quizId: quizId!,
    });
    toast[status](message);
  };
  useEffect(() => {
    console.log(form.formState.errors);
  }, [form.formState.errors]);
  return (
    <div className="w-full sm:max-w-screen-sm">
      <>
        <>
          <CountdownTimer
            date={date}
            answers={form.getValues()}
            quizId={quizId!}
          />

          <div className="my-4">
            <h1 className="text-lg font-normal leading-relaxed">{name}</h1>
            <p>{instructions}</p>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full space-y-6"
            >
              {questions &&
                questions.map((question) => (
                  <Card className="shadow-none rounded-sm" key={question.id}>
                    <CardHeader>
                      <CardTitle className="mb-4 capitalize text-2xl">
                        {question.name}
                      </CardTitle>
                      {question?.image && (
                        <Image
                          src={
                            process.env.NEXT_PUBLIC_QUIZASSETS_URL! +
                            question?.image
                          }
                          alt={question?.name}
                          width={300}
                          height={150}
                          className="drop-shadow-sm rounded-md mt-2 object-cover w-1/2"
                        />
                      )}
                    </CardHeader>
                    <CardContent>
                      <input
                        type="hidden"
                        {...form.register(`${question.id}.questionId`)}
                        value={question.id}
                      />
                      {question?.type === "sampling" && (
                        <FormField
                          control={form.control}
                          name={`${question.id}.answer`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Answer</FormLabel>
                              <Select onValueChange={field.onChange}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select your answer" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {question?.options?.map((option) => (
                                    <SelectItem key={option} value={option}>
                                      {option}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>

                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      )}
                      {question?.type === "mcq" && (
                        <FormField
                          control={form.control}
                          name={`${question.id}.answer`}
                          render={() => (
                            <FormItem>
                              {question?.options?.map((item, index) => (
                                <FormField
                                  key={index}
                                  control={form.control}
                                  name={`${question.id}.answer`}
                                  render={({ field }) => {
                                    return (
                                      <FormItem
                                        key={index}
                                        className="flex flex-row items-start space-x-3 space-y-0"
                                      >
                                        <FormControl>
                                          <Checkbox
                                            checked={field.value === item}
                                            onCheckedChange={(checked) => {
                                              field.onChange(
                                                checked ? item : ""
                                              );
                                            }}
                                          />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                          {item}
                                        </FormLabel>
                                      </FormItem>
                                    );
                                  }}
                                />
                              ))}
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      )}
                      {question?.type === "truefalse" && (
                        <FormField
                          control={form.control}
                          name={`${question.id}.answer`}
                          render={() => (
                            <FormItem>
                              {question?.options?.map((item, index) => (
                                <FormField
                                  key={index}
                                  control={form.control}
                                  name={`${question.id}.answer`}
                                  render={({ field }) => {
                                    return (
                                      <FormItem
                                        key={index}
                                        className="flex flex-row items-start space-x-3 space-y-0"
                                      >
                                        <FormControl>
                                          <Checkbox
                                            checked={field.value === item}
                                            onCheckedChange={(checked) => {
                                              field.onChange(
                                                checked ? item : ""
                                              );
                                            }}
                                          />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                          {item}
                                        </FormLabel>
                                      </FormItem>
                                    );
                                  }}
                                />
                              ))}
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      )}
                      {question?.type === "fill" && (
                        <FormField
                          name={`${question.id}.answer`}
                          control={form.control}
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input
                                  {...field}
                                  placeholder="your answer"
                                  type="text"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      )}
                    </CardContent>
                  </Card>
                ))}
              <div>
                {Object.keys(form.formState.errors).length > 0 && (
                  <p className="text-red-500"> Please answer all questionss</p>
                )}
              </div>
              <div className="flex gap-1">
                <SubmitButton isLoading={form.formState.isSubmitting}>
                  Submit Answers
                </SubmitButton>
              </div>
            </form>
          </Form>
        </>
      </>
    </div>
  );
};

export default SingleQuiz;
