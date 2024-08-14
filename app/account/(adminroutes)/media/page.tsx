import { createClient } from "@/utils/supabase/server";
import UploadForm from "./UploadForm";
import MediaCard from "./MediaCard";
import { createUrl } from "@/hooks/createUrl";
type Props = {};
export default async function mediaPage() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: storage, error } = await supabase.storage
    .from("quizassets")
    .list(user?.id);

  return (
    <main className="  p-4">
      <UploadForm userId={user?.id!} />
      <div className="flex flex-row flex-wrap gap-2">
        {storage?.map((file) => (
          <MediaCard
            deleteKey={user?.id + "/" + file.name}
            id={file.id}
            name={file.name}
            type={file.metadata.mimetype}
            updated_at={file.updated_at}
            url={createUrl(
              process.env.NEXT_PUBLIC_QUIZASSETS_URL!,
              user?.id!,
              file.name
            )}
          />
        ))}
      </div>
    </main>
  );
}
