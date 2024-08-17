"use client";
import { useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import SubmitButton from "@/components/global/SubmitButton";
import { toast } from "sonner";
import {
  ExamPageFormSchema,
  ExamPageFormSchemaType,
  QuestionColumnType,
} from "@/types/schemas";
import { Tables } from "@/types/supabase";
import CountdownTimer from "./CountDown";
import { createUrl } from "@/hooks/createUrl";
import { getResults } from "./action";
import { Button } from "@/components/ui/button";
type Props = {
  questions: QuestionColumnType[];
  quizId?: number;
  instructions?: string | null;
  name?: string | null;
  proceed?: boolean;
  failed?: boolean;
  exam?: Tables<"exam"> | null;
  userId?: string | null;
  date: number | null;
  submissionId: number;
};

const SingleQuiz = ({
  questions,

  instructions,
  name,
  quizId,
  date,
}: Props) => {
  const form = useForm<ExamPageFormSchemaType>({
    resolver: zodResolver(ExamPageFormSchema),
  });

  const onSubmit = async (data: ExamPageFormSchemaType) => {
    console.log(Object.values(data), data);
    const { status, message } = await getResults({
      answers: data,
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
          {date && (
            <CountdownTimer
              date={date}
              answers={form.getValues()}
              quizId={quizId!}
            />
          )}

          <div className="my-4">
            <h1 className="text-lg font-semibold leading-relaxed capitalize">
              {name}
            </h1>
            <p>{instructions}</p>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full  space-y-2"
            >
              {questions &&
                questions.map((question, index) => (
                  <Card className="w-full rounded-sm" key={question.id}>
                    <CardHeader className="px-4 pt-2 pb-0">
                      <CardTitle className="mb-4 capitalize text-lg font-normal text-gray-700">
                        {index + 1}. {question.name}
                      </CardTitle>
                      {question?.image && (
                        <div className="w-full h-full  mb-4 pb-4 max-w-44">
                          <Image
                            src={createUrl(
                              process.env.NEXT_PUBLIC_QUIZASSETS_URL!,
                              question?.image!
                            )}
                            alt={question?.name}
                            width={300}
                            height={150}
                            className="drop-shadow-sm rounded-md mt-2 object-cover "
                          />
                        </div>
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
              <div className="gap-1 grid col-span-2">
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <SubmitButton
                      type="button"
                      isLoading={form.formState.isSubmitting}
                    >
                      Submit Answers
                    </SubmitButton>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Are you absolutely sure?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        Please make sure you've answered all questions.
                        {
                          <p className="text-red-500">
                            {" "}
                            {questions.length -
                              Object.values(form.getValues("questions") || {})
                                .length}{" "}
                            questions not answered.
                          </p>
                        }
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <SubmitButton
                        isLoading={form.formState.isSubmitting}
                        type="button"
                        onClick={form.handleSubmit(onSubmit)}
                      >
                        Submit Answers
                      </SubmitButton>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </form>
          </Form>
        </>
      </>
    </div>
  );
};

export default SingleQuiz;
