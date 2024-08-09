"use client";

import Modal from "@/components/global/Modal";
import { Card } from "@/components/ui/card";
import { QuizValues } from "@/types/schemas";
import { createClient } from "@/utils/supabase/client";

import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { UseFormSetValue } from "react-hook-form";
import { FilePreview } from "../../media/MediaCard";
import { createUrl } from "@/hooks/createUrl";
import { DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Button } from "@/components/ui/button";

type Props = {
  userId: string;
  setValue: UseFormSetValue<QuizValues>;
};
type File = {
  id: string;
  name: string;
  updated_at: string;
  metadata: {
    mimetype: string;
  };
};
const MediaPicker = ({ userId, setValue }: Props) => {
  const searchParams = useSearchParams();
  const index = searchParams.get("index");

  const router = useRouter();
  const [files, setFiles] = useState<File[] | null>(null);
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  useEffect(() => {
    const getFiles = async () => {
      const supabase = createClient();
      const { data, error } = await supabase.storage
        .from("quizassets")
        .list(userId);
      setFiles(data as any); // Cast 'data' to 'File[]'
    };
    getFiles();
  }, []);

  function handleSelect() {
    if (!index || !selectedFile) return alert("no index found");
    setValue(
      `questions.${parseInt(index)}.image`,
      createUrl(userId, selectedFile)
    );
    setSelectedFile(null);
    router.back();
  }
  return (
    <>
      {index ? (
        <Modal>
          <DialogTitle>Media Picker</DialogTitle>
          <ScrollArea className="max-h-fit grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4  gap-2 overflow-y-auto">
            {files?.map(({ id, name, updated_at, metadata }) => (
              <Card
                onClick={() => setSelectedFile(name)}
                key={id}
                className={`rounded-sm aspect-square ease-linear duration-150 relative  ${
                  selectedFile === name
                    ? "shadow-2xl border-primary border-4 "
                    : ""
                }`}
              >
                {" "}
                <FilePreview
                  url={createUrl(
                    process.env.NEXT_PUBLIC_QUIZASSETS_URL!,
                    userId,
                    name
                  )}
                  name={name}
                  type={metadata.mimetype}
                />
                <div className="flex flex-col items-center justify-center p-4 z-20">
                  <div className=""></div>
                  <p className="text-sm font-medium truncate">
                    {name.substring(0, 10)}
                  </p>
                  <div className="text-xs text-muted-foreground">
                    {updated_at.split("T")[0]}
                  </div>
                </div>
              </Card>
            ))}
          </ScrollArea>
          <Button
            className="w-fit ml-auto"
            type="button"
            onClick={handleSelect}
          >
            Select
          </Button>
        </Modal>
      ) : null}
    </>
  );
};

export default MediaPicker;
