// "use client";
// import React, { startTransition } from 'react'

// import useGetUser from "@/hooks/useGetUser";
// import { createClient } from "@/utils/supabase/client";
// import { BookMarked, HeartIcon } from "lucide-react";
// import { toast } from "sonner";
// import { useState, useTransition } from "react";
// import SubmitButton from "@/components/global/SubmitButton";
// import { HeartFilledIcon } from "@radix-ui/react-icons";

// type Props = {
//     id : number;
// }

// const useSave = ({id}: Props) : {isSaved : boolean, saved : number[]} => {
//   const { user, loading, saved, profile } = useGetUser({ getProfile: true });
//     const [isSaved, setIsSaved] = useState(profile?.saved.includes(id))
//     const [isPending, startTransition] = useTransition()
//       function handleSave() {
//     const supabase = createClient();
//     if (loading) return;
//     if (!user) {
//       return toast.warning("Please login first to save this quiz");
//     }
//     startTransition(async () => {
//       setIsSaved((prev) => !prev);
//       const arr = Array.isArray(profile?.saved) ? profile.saved : [];
//       const { data, error } = await supabase
//         .from("profiles")
//         .update({
//           saved: isSaved ? [...arr.filter((item) => item !== id)]
//             : [...arr, id]
            
//         })
//         .eq("id", user?.id)
//         .select("saved");
//       if (error) {
//         toast.error(error.message);
//         setIsSaved((prev) => !prev);
//       }
//       toast.success("Saved");
//     });
//   }
//   return (
//     null
//   )
// }