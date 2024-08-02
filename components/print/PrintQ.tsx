import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { QuestionColumnType } from "@/types/schemas";
import Image from "next/image";

export function RadioGroupForm({ question }: { question: QuestionColumnType }) {
  return (
    <FormItem className="space-y-3">
      <FormLabel>
        {question.name}
        {question.image && (
          <Image alt="" src={question.image} height={200} width={200} />
        )}
      </FormLabel>
      <FormControl>
        <RadioGroup className="flex flex-col space-y-1">
          {question.options?.map((item, index) => (
            <FormItem
              key={index}
              className="flex items-center space-x-3 space-y-0"
            >
              <FormControl>
                <RadioGroupItem value={item} />
              </FormControl>
              <FormLabel className="font-normal">
                Question type :{question.type}
              </FormLabel>
            </FormItem>
          ))}
        </RadioGroup>
      </FormControl>
      <FormMessage />
    </FormItem>
  );
}
