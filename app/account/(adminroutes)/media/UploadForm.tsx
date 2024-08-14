"use client";

import { ChangeEvent } from "react";
import { createClient } from "@/utils/supabase/client";

import { toast } from "sonner";
import { revalidateClient } from "@/app/(user)/actions";
import { UploadCloudIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { ActionResponse } from "@/app/exam/[id]/action";
import { uploadFile } from "@/hooks/uploadFile";
import { create } from "domain";

type FormDataUpload = {
  file: FileList;
};
type Props = {
  userId: string;
};
const UploadForm = ({ userId }: Props) => {
  const router = useRouter();
  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length < 1 || !userId) return;
    const files = e.target.files;
    if (files.length > 10) {
      return toast.warning("You can only upload 10 files at a time");
    }
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const { status, message } = await uploadFile(
        file,
        `${userId}/${file.name}`
      );
      if (status === "error") {
        return toast[status](message, {
          dismissible: true,
          action: "HI",
        });
      }
    }

    router.refresh();
  };

  return (
    <div className="shadow-md rounded-md aspect-square flex justify-center items-center relative  size-20">
      <Input
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
        }}
        type="file"
        multiple={true}
        onChange={handleChange}
      />
      <UploadCloudIcon className="size-8 text-green-500" />
    </div>
  );
};

export default UploadForm;
