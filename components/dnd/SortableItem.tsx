import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { DeleteIcon, GripIcon } from "lucide-react";
import { FormItem } from "../ui/form";
import { AccordionItem, AccordionTrigger } from "../ui/accordion";
import { UseFieldArrayRemove } from "react-hook-form";
import { Button } from "../ui/button";
type Props = {
  id: string;
  index: number;
  children?: React.ReactNode;
  name: string;
};
export default function SortableItem({ id, index, children, name }: Props) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <AccordionItem
      value={id}
      className=" px-4 shadow-lg  bg-white"
      key={id}
      ref={setNodeRef}
      style={{
        border: "1px solid #e3e3e3",
        borderRadius: "12px",
        transformOrigin: "0 0",
        ...style,
      }}
    >
      <div className="">
        <div>
          <AccordionTrigger className="no-underline hover:no-underline flex  justify-between items-start border-1 border-solid border-gray-700">
            <div className="flex gap-2 ">
              <GripIcon
                className="cursor-grab"
                {...attributes}
                {...listeners}
              />
              <p className=" font-normal text-gray-600 capitalize text-left">
                {name}
              </p>
            </div>
            {/* <div className="w-full">
              <div
                className="flex justify-center items-center bg-red-400 size-8"
                onClick={() => removeQuestion(index)}
              >
                <DeleteIcon size={12} />
              </div>
            </div> */}
          </AccordionTrigger>
        </div>
        <div>{children}</div>
      </div>
    </AccordionItem>
  );
}
