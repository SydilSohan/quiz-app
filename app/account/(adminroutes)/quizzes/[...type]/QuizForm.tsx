"use client";

import { Button } from "@/components/ui/button";
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
import { useForm, useFieldArray, UseFormReturn } from "react-hook-form";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Tables } from "@/types/supabase";
import { zodResolver } from "@hookform/resolvers/zod";
import { QuestionType, QuizValues, QuizValuesSchema } from "@/types/schemas";
import SubmitButton from "@/components/global/SubmitButton";
import { createClient } from "@/utils/supabase/client";
import Image from "next/image";
import { ImagePlusIcon, PlusIcon, Trash2Icon, TrashIcon } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
  DragOverlay,
  UniqueIdentifier,
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

type Props = {
  quiz?: Tables<"quizzes"> | null;
  user: User | null;
};
export default function QuizForm({ quiz, user }: Props) {
  // const [activeItem, setActiveItem] = useState<QuestionType>({});
  const [activeId, setActiveId] = useState(null);
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

    const { error } = await supabase.from("quizzes").upsert({
      ...data,
      questions: data.questions,
      user_id: user?.id!,
      id: quiz?.id ?? undefined,
    });
    if (error)
      toast.error("Error", {
        description: error.message,
      });
    else if (!data) toast.error("No data updated");
    else toast.success("Success");
    router.refresh();
  };
  const handleNewDragEnd = useCallback(
    (event: DragEndEvent) => {
      const { active, over } = event;

      if (active.id !== over?.id) {
        const oldIndex = questionFields.findIndex(
          (item) => item.id === active.id
        );
        const newIndex = questionFields.findIndex(
          (item) => item.id === over?.id
        );

        const newItems = arrayMove(
          form.getValues("questions"),
          oldIndex,
          newIndex
        );
        replace(newItems);
      }
      setActiveId(null);
    },
    [questionFields]
  );
  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (active.id !== over?.id) {
      const oldIndex = questionFields.findIndex(
        (item) => item.id === active.id
      );
      const newIndex = questionFields.findIndex((item) => item.id === over?.id);

      const newItems = arrayMove(
        form.getValues("questions"),
        oldIndex,
        newIndex
      );
      replace(newItems);
    }
    setActiveId(null);
  }
  function handleDragStart(event: any) {
    setActiveId(event.active.id);
  }
  function handleDragCancel() {
    setActiveId(null);
  }
  return (
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
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleNewDragEnd}
          onDragCancel={handleDragCancel}
          onDragStart={handleDragStart}
          modifiers={[restrictToVerticalAxis]}
        >
          <Accordion type="multiple" className="w-full space-y-4">
            <SortableContext items={questionFields}>
              {questionFields.map((field, index) => (
                <SortableItem
                  key={field.id}
                  id={field.id}
                  index={index}
                  name={field.name}
                >
                  <AccordionContent className="flex flex-row gap-4 flex-wrap bg-white">
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
                              <Input
                                onChange={(e) => {
                                  e.preventDefault();
                                  field.onChange(field.value);
                                }}
                              />
                            </FormControl>
                            <FormDescription>
                              This is your answer.
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    )}

                    <FormField
                      control={form.control}
                      name={`questions.${index}.image` as const}
                      render={({ field }) => (
                        <FormItem className=" w-full sm:w-1/2">
                          <Link
                            prefetch
                            scroll={false}
                            className="bg-gray-300   flex items-center justify-center relative rounded-sm  w-1/2 "
                            href={
                              "?" +
                              new URLSearchParams({
                                index: index.toString(),
                              })
                            }
                          >
                            {field.value ? (
                              <Image
                                // fill
                                layout="responsive"
                                width={240}
                                height={160}
                                src={createUrl(
                                  process.env.NEXT_PUBLIC_QUIZASSETS_URL!,
                                  field.value
                                )}
                                alt="quiz image"
                                className=" "
                                sizes="(max-width: 640px) 100vw, 640px; (max-width: 1280px) 33vw; "
                              />
                            ) : (
                              <ImagePlusIcon size={30} />
                            )}
                          </Link>
                          {field.value && (
                            <Button
                              type="button"
                              className="flex z-20 text-xs"
                              variant={"destructive"}
                              onClick={() => field.onChange("")}
                            >
                              Remove Image
                            </Button>
                          )}

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="w-full">
                      <Button
                        type="button"
                        variant={"destructive"}
                        onClick={() => removeQuestion(index)}
                      >
                        <TrashIcon size={16} className="mr-1" /> Delete question
                      </Button>
                    </div>
                  </AccordionContent>
                </SortableItem>
              ))}
            </SortableContext>

            <DragOverlay adjustScale={true}>
              {activeId ? (
                <SortableItem
                  id={activeId}
                  index={questionFields.findIndex(
                    (item) => item.id === activeId
                  )}
                  name={
                    questionFields.find((item) => item.id === activeId)
                      ?.name as string
                  }
                />
              ) : null}
            </DragOverlay>
          </Accordion>
        </DndContext>
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
  );
}

const OptionFieldsNew = ({
  form,
  questionIndex,
}: {
  form: UseFormReturn<QuizValues>;
  questionIndex: number;
}) => {
  const { fields, append, remove, update } = useFieldArray({
    control: form.control,
    name: `questions.${questionIndex}.options` as const,
  });
  const [input, setInput] = useState("");
  const [isKeyReleased, setIsKeyReleased] = useState(true);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);
  };
  function handleKeyDown(
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
    value?: string[] | null
  ) {
    const { key } = e;
    const possibleSaveKeys = new Set(["Enter", "Tab", ","]);
    if (possibleSaveKeys.has(key)) {
      e.preventDefault();
      append(input);
      setInput("");
    }

    if (
      key === "Backspace" &&
      !input.length &&
      value?.length &&
      isKeyReleased
    ) {
      e.preventDefault();
      const poppedInput = value.pop();
      setInput(poppedInput!);
      remove(value.length);
    }
    setIsKeyReleased(false);
  }
  function handleKeyUp() {
    setIsKeyReleased(true);
  }
  return (
    <div className="w-full sm:w-2/5">
      <FormField
        control={form.control}
        name={`questions.${questionIndex}.options` as const}
        render={({ field }) => (
          <FormItem className=" w-full  space-x-3 ">
            <FormField
              control={form.control}
              name={`questions.${questionIndex}.answer` as const}
              render={({ field: answerField }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Options...</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={answerField.onChange}
                      defaultValue={answerField.value}
                      className="flex flex-col space-y-1"
                    >
                      {field.value?.map((option, index) => (
                        <FormItem className="flex items-center space-x-3 space-y-0 justify-stretch">
                          <FormControl>
                            <RadioGroupItem value={option} />
                          </FormControl>
                          <FormLabel className="font-normal flex gap-1 items-center justify-between w-full">
                            <span>{option}</span>
                            <Trash2Icon
                              size={14}
                              onClick={() => remove(index)}
                            />
                          </FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormControl>
              <Input
                className="mt-12"
                type="text"
                placeholder="eg option 1"
                value={input}
                onChange={handleChange}
                onKeyDown={(e) => handleKeyDown(e, questionIndex, field.value)}
                onKeyUp={() => setIsKeyReleased(true)}
              />
            </FormControl>
            <FormDescription>
              enter options one by one, press enter or "," to save, backspace to
              delete
            </FormDescription>
          </FormItem>
        )}
      />
    </div>
  );
};
