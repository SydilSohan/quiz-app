"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm, useFieldArray } from "react-hook-form";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Tables } from "@/types/supabase";
import { zodResolver } from "@hookform/resolvers/zod";
import { QuestionType, QuizValues, QuizValuesSchema } from "@/types/schemas";
import SubmitButton from "@/components/global/SubmitButton";
import { createClient } from "@/utils/supabase/client";
import Image from "next/image";
import { DeleteIcon, Trash2Icon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const OptionFieldsNew = ({ form, questionIndex }: any) => {
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: `questions.${questionIndex}.options` as const,
  });

  return (
    <div>
      {fields.map((oField, index) => (
        <div
          key={oField.id}
          className="flex w-full flex-row items-center justify-center gap-4 align-middle"
        >
          <FormField
            control={form.control}
            name={`questions.${questionIndex}.options.${index}` as const}
            render={({ field }) => (
              <FormItem className=" w-full  ">
                <FormControl>
                  <Input
                    placeholder={`enter option ${index + 1} `}
                    type="text"
                    {...field}
                  />
                </FormControl>
                <FormDescription></FormDescription>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name={`questions.${questionIndex}.answer` as const}
            render={({ field }) => (
              <FormItem className=" flex w-1/5 items-center gap-4">
                <FormControl>
                  <Checkbox
                    checked={
                      field.value ===
                      form.watch(`questions.${questionIndex}.options.${index}`)
                    }
                    onCheckedChange={(checked: any) => {
                      if (checked) {
                        field.onChange(
                          form.watch(
                            `questions.${questionIndex}.options.${index}`
                          )
                        );
                      } else {
                        field.onChange("");
                      }
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="button"
            variant={"ghost"}
            className="my-2  text-red-500 "
            onClick={() => remove(index)}
          >
            <Trash2Icon />
          </Button>
        </div>
      ))}
      <Button type="button" className="my-2" onClick={() => append("")}>
        Add Option
      </Button>
    </div>
  );
};
type Props = {
  quiz?: Tables<"quizzes"> | null;
};
export default function QuizForm({ quiz }: Props) {
  const router = useRouter();
  const form = useForm<QuizValues>({
    resolver: zodResolver(QuizValuesSchema),
    defaultValues: {
      name: quiz?.name || "",
      instructions: quiz?.instructions || "",
      questions: (quiz?.questions as QuestionType[]) || [],
    },
  });
  const {
    fields: questionFields,
    append: appendQuestion,
    remove: removeQuestion,
  } = useFieldArray({
    control: form.control,
    name: "questions",
  });

  const onSubmit = async (data: QuizValues) => {
    console.log(data, "data");
    //upload all images to supabase first and store the file path in the database
    const supabase = createClient();

    const uploadPromises = data.questions.map(async (question) => {
      if (!question.image || question.image instanceof File === false)
        return question;

      const { data, error } = await supabase.storage
        .from("quizassets")
        .upload(`/${question.image.name}`, question.image);

      return {
        ...question,
        image: data?.path,
      };
    });

    const dataWithImagePathPromise = Promise.all(uploadPromises);
    const dataWithImagePath = await dataWithImagePathPromise;

    toast.promise(dataWithImagePathPromise, {
      loading: "Uploading images...",
      success: () => "Images uploaded successfully",
      error: "Error while uploading images",
    });

    const { error } = await supabase.from("quizzes").upsert({
      id: quiz?.id,
      name: data.name,
      instructions: data.instructions,
      questions: dataWithImagePath
        .filter((q) => q !== undefined)
        .map((question) => ({
          id: question!.id,
          name: question!.name,
          type: question!.type,
          options: question!.options,
          answer: question!.answer,
          image: question!.image,
        })),
    });
    error
      ? toast.error("Error", {
          description: error.message,
        })
      : toast.success("Success");
    router.refresh();
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-wrap gap-4 max-w-screen-sm"
      >
        <FormField
          control={form.control}
          name={`name` as const}
          render={({ field }) => (
            <FormItem className=" w-full lg:w-[45%]">
              <FormLabel> Quiz Title</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={`instructions` as const}
          render={({ field }) => (
            <FormItem className=" w-full lg:w-1/2">
              <FormLabel> Quiz Instructions</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        {/* <h2 className="text-2xl"> Quiz Questions and Answers Below</h2> */}
        <Separator />
        {questionFields.map((field, index) => (
          <Card key={field.id} className="space-y-4 w-full py-8">
            <CardContent className="gap-4 space-y-4">
              <input
                {...form.register(`questions.${index}.id` as const)}
                type="number"
                value={index}
                hidden
              />
              <FormField
                control={form.control}
                name={`questions.${index}.name` as const}
                render={({ field }) => (
                  <FormItem className="  w-full lg:w-2/5">
                    <FormLabel> Question {index + 1} description</FormLabel>
                    <FormControl>
                      <Textarea {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name={`questions.${index}.image` as const}
                render={({ field }) => (
                  <FormItem>
                    {/* display the image here only if it exists */}
                    {field.value && (
                      <Image
                        src={
                          field.value instanceof File
                            ? URL.createObjectURL(field.value)
                            : process.env.NEXT_PUBLIC_QUIZASSETS_URL! +
                              field.value
                        }
                        alt="quiz image"
                        className=" aspect-auto object-cover rounded-md  drop-shadow-xl my-4"
                        height={200}
                        width={300}
                      />
                    )}
                    <FormLabel className="capitalize">Quiz Image</FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        accept="image/png, image/gif, image/jpeg"
                        onChange={(e) => {
                          const file = e.target.files![0];
                          field.onChange(file);
                        }}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <h2 className="text-2xl">Option and answer</h2>

              {field.type !== "fill" ? (
                <OptionFieldsNew form={form} questionIndex={index} />
              ) : (
                <FormField
                  control={form.control}
                  name={`questions.${index}.answer` as const}
                  render={({ field }) => (
                    <FormItem className=" w-full">
                      <FormLabel> Fill in Blank Answer</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormDescription>This is your answer.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}
              <div className="w-full">
                <Button
                  type="button"
                  className="my-2  bg-red-400"
                  onClick={() => removeQuestion(index)}
                >
                  <DeleteIcon />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}

        <div className="flex w-full flex-row flex-wrap gap-2">
          <Button
            variant={"outline"}
            className="my-2"
            type="button"
            onClick={() =>
              appendQuestion({
                id: questionFields.length,

                name: "",
                type: "mcq",
                answer: "A",
                options: ["A", "B", "C", "D"],
              })
            }
          >
            Add MCQ Question
          </Button>
          <Button
            variant={"outline"}
            className="my-2"
            type="button"
            onClick={() =>
              appendQuestion({
                id: questionFields.length,

                name: "Example True False Statement",
                type: "truefalse",
                options: ["True", "False"],
                answer: "True",
              })
            }
          >
            Add True/False
          </Button>
          <Button
            variant={"outline"}
            className="my-2"
            type="button"
            onClick={() =>
              appendQuestion({
                id: questionFields.length,

                name: "",
                type: "fill",
                answer: "example answer",
                options: [],
              })
            }
          >
            Add fill Question
          </Button>
          <Button
            variant={"outline"}
            className="my-2"
            type="button"
            onClick={() =>
              appendQuestion({
                id: questionFields.length,
                name: "",
                type: "sampling",
                answer: "A",
                options: ["A", "B", "C", "D"],
              })
            }
          >
            Add Beer Sampling Question
          </Button>
        </div>
        <div className="grid lg:col-span-3">
          <SubmitButton isLoading={form.formState.isSubmitting}>
            Submit
          </SubmitButton>
        </div>
      </form>
    </Form>
  );
}
