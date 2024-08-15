"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { promptSchema, PromptType } from "@/types/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { User } from "@supabase/supabase-js";
import React from "react";
import { useForm } from "react-hook-form";
import { generateQuiz } from "./actions";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import SubmitButton from "@/components/global/SubmitButton";
import { Input } from "@/components/ui/input";

type Props = {
  user: User | null;
};

const GenerateQuiz = ({ user }: Props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Dialog open={isOpen} onOpenChange={() => setIsOpen((prev) => !prev)}>
      <DialogTrigger asChild>
        <Button variant={"secondary"}>Generate Quiz</Button>
      </DialogTrigger>
      <DialogContent className="w-[95%] rounded-xl">
        <GenerateQuizForm />
      </DialogContent>
    </Dialog>
  );
};

export default GenerateQuiz;

function GenerateQuizForm() {
  const form = useForm<PromptType>({
    resolver: zodResolver(promptSchema),
  });
  const router = useRouter();
  async function onSubmit(data: PromptType) {
    const { status, message } = await generateQuiz(data);
    toast.info(message);

    form.reset();
    router.refresh();
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-2 space-x-2"
      >
        <FormField
          name="prompt"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Prompt</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormDescription>
                Enter prompt to generate quiz, minimum 10 characters
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />{" "}
        <div className="flex gap-4 w-full">
          {/* <FormField
            name="topic"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Quiz Topic</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription>describe topic in brief </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          /> */}
          <FormField
            name="number_of_questions"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Number of questions</FormLabel>
                <FormControl>
                  <Input min={1} max={50} type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          name="difficulty"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Difficulty</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  {["easy", "medium", "hard"].map((option, index) => (
                    <FormItem
                      key={index}
                      className="flex items-center space-x-3 space-y-0 justify-stretch"
                    >
                      <FormControl>
                        <RadioGroupItem value={option} />
                      </FormControl>
                      <FormLabel className="font-normal flex gap-1 items-center justify-between w-full">
                        {option}
                      </FormLabel>
                    </FormItem>
                  ))}
                </RadioGroup>
              </FormControl>
              <FormDescription>Enter difficulty level</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <SubmitButton isLoading={form.formState.isSubmitting}>
          Generate Quiz
        </SubmitButton>
      </form>
    </Form>
  );
}
