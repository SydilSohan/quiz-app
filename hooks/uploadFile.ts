import { ActionResponse } from '@/app/quizzes/[id]/action';
import { createClient } from '../utils/supabase/client';
   export async function uploadFile(
      file: File,
      path: string
    ): Promise<ActionResponse> {
      const supabase = createClient();

      try {
        const sizeInMB = file.size / (1024 * 1024);
        if (sizeInMB > 8) throw new Error("File size should be less than 8MB");
        const { data, error } = await supabase.storage
          .from("quizassets")
          .upload(path, file);
        if (error) throw new Error(error.message);
        return {
          status: "success",
          message: `File - ${file.name} uploaded successfully`,
        };
      } catch (error : any) {
        return { status: "error", message: error };
      }
    }