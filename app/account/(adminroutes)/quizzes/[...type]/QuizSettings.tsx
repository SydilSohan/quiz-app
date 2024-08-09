"use client";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { QuizValues } from "@/types/schemas";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@radix-ui/react-scroll-area";
type Props = {
  form: UseFormReturn<QuizValues>;
};

const QuizSettings = ({ form }: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"secondary"} type="button">
          Settings
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[95%] h-[90vh] sm:h-[70vh]">
        <ScrollArea className=" max-h-fit overflow-y-auto">
          <FormField
            control={form.control}
            name={`time` as const}
            render={({ field }) => (
              <FormItem className="">
                <FormLabel> Time Limit</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormDescription>
                  Enter Time limit in minutes. Leave empty or 0 for no limit.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name={`retake` as const}
            render={({ field }) => (
              <FormItem className="">
                <FormControl className="mt-4">
                  <Checkbox
                    className="mt-2"
                    checked={field.value}
                    onCheckedChange={(checked) => {
                      checked ? field.onChange(true) : field.onChange(false);
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
            name={`hidden_answers` as const}
            render={({ field }) => (
              <FormItem className="">
                <FormControl className="mt-4">
                  <Checkbox
                    className="mt-2"
                    checked={field.value}
                    onCheckedChange={(checked) => {
                      checked ? field.onChange(true) : field.onChange(false);
                    }}
                  />
                </FormControl>
                <FormLabel> Can See correct answer in results?</FormLabel>
                <FormDescription>
                  Whether examinees can see the right answer after taking the
                  quiz
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="neg_marking"
            render={({ field }) => (
              <FormItem>
                <FormLabel> Negative Marking</FormLabel>
                <FormControl>
                  <Input
                    step={0.01}
                    min={0}
                    max={10}
                    type="number"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Enter the negative marking per wrong answer (0-10)
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="pass_mark"
            render={({ field }) => (
              <FormItem>
                <FormLabel> Pass Mark</FormLabel>
                <FormControl>
                  <Input min={0} max={100} type="number" {...field} />
                </FormControl>
                <FormDescription>
                  Enter the minimum mark required to pass in percentage (1-99)
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
                    defaultValue={field.value || "public"}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="public" />
                      </FormControl>
                      <FormLabel className="font-normal">Public</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="private" />
                      </FormControl>
                      <FormLabel className="font-normal">Private</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </ScrollArea>
        <DialogFooter className="flex items-end justify-end h-5 ">
          <DialogClose>
            <Button type="button" variant={"outline"}>
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default QuizSettings;
