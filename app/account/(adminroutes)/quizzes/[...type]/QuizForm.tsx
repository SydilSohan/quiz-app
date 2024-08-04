"use client";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

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
const OptionFieldsNew = ({ form, questionIndex }: any) => {
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: `questions.${questionIndex}.options` as const,
  });

  return (
    <div className="w-2/5">
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
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
    console.log(form.formState.errors, "errors");
  }, [form.formState.errors]);
  const onSubmit = async (data: QuizValues) => {
    const supabase = createClient();
    const uploadPromises = data.questions.map(async (question) => {
      if (question.image instanceof File === false) return question;
      const { data, error } = await supabase.storage
        .from("quizassets")
        .upload(`/${Math.random()}-${question.image.name}`, question.image);
      console.log(error, "error on image");
      console.log(data?.path);
      return {
        ...question,
        image: data?.path,
      };
    });

    const dataWithImagePathPromise = Promise.all(uploadPromises);
    const dataWithImagePath = await dataWithImagePathPromise;
    console.log(dataWithImagePath);

    const { error, data: updatedData } = await supabase
      .from("quizzes")
      .upsert({
        name: data.name,
        instructions: data.instructions,
        image: data.image,
        inst: data.inst,
        questions: dataWithImagePath,
        user_id: user?.id!,
        id: quiz?.id ?? undefined,
        time: data.time || null,
        retake: data.retake,
        privacy: data.privacy,
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

      const newItems = arrayMove(questionFields, oldIndex, newIndex);
      replace(newItems);
    }
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
      modifiers={[restrictToVerticalAxis]}
    >
      <SortableContext items={questionFields}>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-wrap gap-4 "
          >
            <div className=" w-full flex gap-2">
              {" "}
              <SubmitButton isLoading={form.formState.isSubmitting}>
                Save
              </SubmitButton>
              <Dialog>
                <DialogTrigger suppressHydrationWarning type="button">
                  <Button variant={"secondary"} type="button">
                    Settings
                  </Button>
                </DialogTrigger>
                <DialogContent suppressHydrationWarning>
                  <FormField
                    control={form.control}
                    name={`time` as const}
                    render={({ field }) => (
                      <FormItem suppressHydrationWarning className="">
                        <FormLabel> Time Limit</FormLabel>
                        <FormControl>
                          <Input type="number" {...field} />
                        </FormControl>
                        <FormDescription>
                          Enter Time limit in minutes. Leave empty or 0 for no
                          limit.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`retake` as const}
                    render={({ field }) => (
                      <FormItem suppressHydrationWarning className="">
                        <FormControl className="mt-4" suppressHydrationWarning>
                          <Checkbox
                            className="mt-2"
                            suppressHydrationWarning
                            checked={field.value}
                            onCheckedChange={(checked) => {
                              checked
                                ? field.onChange(true)
                                : field.onChange(false);
                            }}
                          />
                        </FormControl>
                        <FormLabel> Can Retake?</FormLabel>
                        <FormDescription>
                          Whether examinees can retake the quiz
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="privacy"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel>Choose your quiz privacy...</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-1"
                          >
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="public" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                Public
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="private" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                Private
                              </FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </DialogContent>
              </Dialog>
            </div>
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
                  <AccordionContent className="gap-4 space-y-4 flex-row flex-wrap flex">
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
                        <FormItem className="  w-full ">
                          <FormLabel>
                            {" "}
                            Question {index + 1} description
                          </FormLabel>
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
                        <FormItem className="w-2/5">
                          {/* display the image here only if it exists */}

                          <FormLabel className="capitalize">
                            Quiz Image
                          </FormLabel>
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
                          {field.value && (
                            <div className="relative  aspect-video">
                              <Image
                                height={200}
                                width={300}
                                src={
                                  field.value instanceof File
                                    ? URL.createObjectURL(field.value)
                                    : process.env.NEXT_PUBLIC_QUIZASSETS_URL! +
                                      field.value
                                }
                                alt="quiz image"
                                className=" aspect-auto object-cover rounded-md  drop-shadow-xl my-4"
                              />
                              <Button
                                className="space-x-5"
                                onClick={() => field.onChange("")}
                              >
                                Remove Image <Trash2Icon className="ml-3" />
                              </Button>
                            </div>
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

            <div className="flex w-full flex-row flex-wrap gap-2">
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
                Add MCQ Question
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
                Add True/False
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
                Add fill Question
              </Button>
            </div>
          </form>
        </Form>
      </SortableContext>
    </DndContext>
  );
}
