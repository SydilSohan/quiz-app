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
import {
  DeleteIcon,
  ImageOff,
  ImagePlusIcon,
  Images,
  PlusIcon,
  Trash2Icon,
} from "lucide-react";
import { useEffect } from "react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import { Accordion, AccordionContent } from "@/components/ui/accordion";
import SortableItem from "@/components/dnd/SortableItem";
import { User } from "@supabase/supabase-js";
import QuizSettings from "./QuizSettings";
import Link from "next/link";
import MediaPicker from "./MediaPicker";
import { createUrl } from "@/hooks/createUrl";
const OptionFieldsNew = ({ form, questionIndex }: any) => {
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: `questions.${questionIndex}.options` as const,
  });

  return (
    <div className="w-full sm:w-2/5">
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
  user: User | null;
};
export default function QuizForm({ quiz, user }: Props) {
  // const [activeItem, setActiveItem] = useState<QuestionType>({});
  const privacy = ["public", "private"];
  const router = useRouter();
  const form = useForm<QuizValues>({
    resolver: zodResolver(QuizValuesSchema),
    defaultValues: quiz
      ? {
          name: quiz?.name,
          instructions: quiz?.instructions,
          questions: quiz!.questions as QuestionType[],
          time: quiz.time || 0,
          retake: quiz.retake,
          privacy: quiz.privacy,
          hidden_answers: quiz.hidden_answers,
          neg_marking: quiz.neg_marking!,
          pass_mark: quiz.pass_mark!,
        }
      : undefined,
  });
  const {
    fields: questionFields,
    append: appendQuestion,
    remove: removeQuestion,
    update,
    replace,
  } = useFieldArray({
    control: form.control,
    name: "questions",
  });
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );
  useEffect(() => {
    console.log(form.getValues("questions"));
  }, [form.getValues()]);
  const onSubmit = async (data: QuizValues) => {
    const supabase = createClient();
    const uploadPromises = data.questions.map(async (question) => {
      if (question.image instanceof File === false) return question;
      const { data, error } = await supabase.storage
        .from("quizassets")
        .upload(`/${Math.random()}-${question.image.name}`, question.image);
      return {
        ...question,
        image: data?.path,
      };
    });

    const dataWithImagePathPromise = Promise.all(uploadPromises);
    const dataWithImagePath = await dataWithImagePathPromise;
    const { error, data: updatedData } = await supabase
      .from("quizzes")
      .upsert({
        ...data,
        questions: dataWithImagePath,
        user_id: user?.id!,
        id: quiz?.id ?? undefined,
      })
      .select("*");
    if (error)
      toast.error("Error", {
        description: error.message,
      });
    else if (!data) toast.error("No data updated");
    else toast.success("Success");
    router.refresh();
  };
  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (active.id !== over?.id) {
      const oldIndex = questionFields.findIndex(
        (item) => item.id === active.id
      );
      console.log(oldIndex);
      const newIndex = questionFields.findIndex((item) => item.id === over?.id);
      console.log(newIndex);

      const newItems = arrayMove(
        form.getValues("questions"),
        oldIndex,
        newIndex
      );
      replace(newItems);
    }
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
      // modifiers={[restrictToVerticalAxis]}
    >
      <SortableContext items={questionFields}>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-wrap gap-4 "
          >
            <MediaPicker userId={user?.id!} setValue={form.setValue} />
            <div className=" w-full flex gap-2">
              {" "}
              <SubmitButton isLoading={form.formState.isSubmitting}>
                Save
              </SubmitButton>
              <QuizSettings form={form} />
              <Button type="button" className="">
                <Link href={"/account/quizzes"}>Go Back</Link>
              </Button>
            </div>

            <FormField
              control={form.control}
              name={`name` as const}
              render={({ field }) => (
                <FormItem className=" w-full lg:w-[45%]">
                  <FormLabel> Quiz Title</FormLabel>
                  <FormControl>
                    <Input type="text" {...field} />
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
            {/* <Separator /> */}
            <Accordion type="multiple" className="w-full space-y-4">
              {questionFields.map((field, index) => (
                <SortableItem
                  id={field.id}
                  index={index}
                  name={field.name}
                  removeQuestion={removeQuestion}
                  // className="space-y-4 w-full py-2 px-6 shadow-lg rounded-md"
                >
                  <AccordionContent className="flex flex-row gap-4 flex-wrap">
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
                        <FormItem className="  w-full grid col-span-1 ">
                          {/* <FormLabel> Name</FormLabel> */}
                          <FormControl>
                            <Input
                              placeholder="Enter question name"
                              type="text"
                              {...field}
                            />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name={`questions.${index}.image` as const}
                      render={({ field }) => (
                        <FormItem className="space-x-2 w-full sm:w-1/2">
                          {/* display the image here only if it exists */}
                          {/* <FormLabel className="capitalize w-full">
                            Quiz Image
                          </FormLabel>{" "} */}

                          {/* <FormControl> */}
                          {/* <Input
                              type="file"
                              accept="image/png, image/gif, image/jpeg"
                              onChange={(e) => {
                                const file = e.target.files![0];
                                field.onChange(file);
                              }}
                            /> */}
                          {/* </FormControl> */}
                          <Link
                            prefetch
                            scroll={false}
                            className="bg-gray-300 w-full aspect-video  flex items-center justify-center relative rounded-sm "
                            href={
                              "?" +
                              new URLSearchParams({
                                index: index.toString(),
                              })
                            }
                          >
                            {field.value ? (
                              <>
                                <Image
                                  fill
                                  src={
                                    field.value instanceof File
                                      ? URL.createObjectURL(field.value)
                                      : createUrl(
                                          process.env
                                            .NEXT_PUBLIC_QUIZASSETS_URL!,
                                          field.value
                                        )
                                  }
                                  alt="quiz image"
                                  className=" "
                                />
                              </>
                            ) : (
                              <ImagePlusIcon size={40} />
                            )}
                          </Link>
                          {field.value && (
                            <Button
                              type="button"
                              className="flex justify-self-start self-start z-20"
                              variant={"destructive"}
                              onClick={() => field.onChange("")}
                            >
                              <ImageOff className="" />
                            </Button>
                          )}

                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {field.type !== "fill" ? (
                      <OptionFieldsNew form={form} questionIndex={index} />
                    ) : (
                      <FormField
                        control={form.control}
                        name={`questions.${index}.answer` as const}
                        render={({ field }) => (
                          <FormItem className=" w-full sm:w-2/5">
                            <FormLabel> Fill in Blank Answer</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormDescription>
                              This is your answer.
                            </FormDescription>
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
                  </AccordionContent>
                </SortableItem>
              ))}
            </Accordion>

            <div className="flex w-full flex-row flex-wrap gap-2 items-center">
              <PlusIcon strokeWidth={0.6} />
              <Button
                variant={"outline"}
                className="my-2"
                type="button"
                onClick={() =>
                  appendQuestion({
                    id: questionFields.length.toString(),

                    name: "",
                    type: "mcq",
                    answer: "A",
                    options: ["A", "B", "C", "D"],
                  })
                }
              >
                MCQ
              </Button>
              <Button
                variant={"outline"}
                className="my-2"
                type="button"
                onClick={() =>
                  appendQuestion({
                    id: questionFields.length.toString(),

                    name: "Example True False Statement",
                    type: "truefalse",
                    options: ["True", "False"],
                    answer: "True",
                  })
                }
              >
                True/False
              </Button>
              <Button
                variant={"outline"}
                className="my-2"
                type="button"
                onClick={() =>
                  appendQuestion({
                    id: questionFields.length.toString(),

                    name: "",
                    type: "fill",
                    answer: "example answer",
                    options: [],
                  })
                }
              >
                Filler
              </Button>
            </div>
          </form>
        </Form>
      </SortableContext>
    </DndContext>
  );
}
