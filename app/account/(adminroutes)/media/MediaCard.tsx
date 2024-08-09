import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { FileTypeIcon } from "lucide-react";
import React from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import ContextFunction from "./ContextFunction";
type Props = {
  id: string;
  name: string;
  updated_at: string;
  type: string;
  url: string;
  deleteKey: string;
};

const MediaCard = async ({
  id,
  name,
  updated_at,
  type,
  url,
  deleteKey,
}: Props) => {
  return (
    <ContextMenu key={id}>
      <ContextMenuTrigger key={id} className="">
        <Card key={id} className="rounded-sm aspect-square">
          <div className="flex flex-col items-center justify-center p-4">
            <div className=" flex items-center justify-center bg-muted rounded-lg mb-2 relative">
              <FileTypeIcon className="w-8 h-8 text-muted-foreground" />
              <FilePreview url={url} name={name} type={type} />
            </div>
            <p className="text-xs font-medium truncate">
              {name.substring(0, 10)}
            </p>
            <div className="text-xs text-muted-foreground">
              {updated_at.split("T")[0]}
            </div>
          </div>
        </Card>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextFunction
          url={url}
          deleteKey={deleteKey}
          type="delete"
          fileName={name}
        />
        <ContextMenuItem>Copy URL</ContextMenuItem>
        <ContextMenuItem>Team</ContextMenuItem>
        <ContextMenuItem>Subscription</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
};

export default MediaCard;
type File = {
  id: string;
  name: string;
  updated_at: string;
  type: string; // Add a type field to distinguish file types
  url: string; // URL to the file
};

export const FilePreview = ({
  url,
  name,
  type,
}: {
  url: string;
  name: string;
  type: string;
}) => {
  if (type.startsWith("image/")) {
    return <Image src={url} alt={name} fill />;
  } else if (type === "application/pdf") {
    return <FileTypeIcon />;
  } else {
    return (
      <div className="text-sm text-muted-foreground">No preview available</div>
    );
  }
};
