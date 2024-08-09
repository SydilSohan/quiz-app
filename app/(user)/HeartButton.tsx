"use client";

import useGetUser from "@/hooks/useGetUser";
import { createClient } from "@/utils/supabase/client";
import { BookMarked, HeartIcon } from "lucide-react";
import { toast } from "sonner";
import { useState, useTransition } from "react";
import SubmitButton from "@/components/global/SubmitButton";
import { HeartFilledIcon } from "@radix-ui/react-icons";

type Props = {
  id: number;
};

const HeartButton = ({ id }: Props) => {
  const { user, loading, saved, profile } = useGetUser({ getProfile: true });
  const [isPending, startTransition] = useTransition();
  const [items, setItems] = useState(profile?.saved);
  const [isSaved, setIsaved] = useState(items?.includes(id));
  function handleSave() {
    const supabase = createClient();
    if (loading) return;
    if (!user) {
      return toast.warning("Please login first to save this quiz");
    }
    startTransition(async () => {
      setIsaved((prev) => !prev);
      const arr = Array.isArray(profile?.saved) ? profile.saved : [];
      console.log(arr, Array.isArray(profile?.saved));
      const { data, error } = await supabase
        .from("profiles")
        .update({
          saved: !isSaved
            ? [...arr, id]
            : [...arr.filter((item) => item !== id)],
        })
        .eq("id", user?.id)
        .select("saved");
      if (error) {
        toast.error(error.message);
        setIsaved((prev) => !prev);
        return;
      }
      setItems(data[0].saved);
      toast.success("Saved");
    });
  }
  return (
    <SubmitButton isLoading={isPending} onClick={handleSave}>
      {isSaved ? <BookMarked /> : <HeartFilledIcon />}
    </SubmitButton>
  );
};

export default HeartButton;
