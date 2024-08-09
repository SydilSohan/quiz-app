"use client";

import { ChangeEvent } from "react";
import { createClient } from "@/utils/supabase/client";

import { toast } from "sonner";
import { revalidateClient } from "@/app/(user)/actions";
import { UploadCloudIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

type FormDataUpload = {
  file: FileList;
};
type Props = {
  userId: string;
};
const UploadForm = ({ userId }: Props) => {
  const supabase = createClient();
  const router = useRouter();
  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length < 1 || !userId) return;
    const file = e.target.files[0];
    const sizeInMB = file.size / (1024 * 1024);
    if (sizeInMB > 5) {
      return toast.warning("file too big, upload 4mb or less in size");
    }
    try {
      // Optimistic update
      // Update the state immediately with the new items
      // This will re-render the component and give the user instant feedback

      // setItems(newItems);

      // Send the updated data to the server in the background
      const { data, error } = await supabase.storage
        .from("quizassets")
        .upload(`${userId}/${file.name}`, file);
      console.log(error);

      // If the server update fails, rollback the optimistic update
      if (error) {
        // setItems(items);
        // remove cache
        throw new Error(error.message);
      }

      router.refresh();
    } catch (error: any) {
      console.log(error);
      toast.error("Upload error", {
        description: error,
      });
    }
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
        multiple={false}
        onChange={handleChange}
      />
      <UploadCloudIcon className="size-8 text-green-500" />
    </div>
  );
};

export default UploadForm;
