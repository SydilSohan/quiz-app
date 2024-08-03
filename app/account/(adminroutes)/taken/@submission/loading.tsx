import Modal from "@/components/global/Modal";
import { DotIcon, Loader } from "lucide-react";
import React from "react";

type Props = {};

const loading = (props: Props) => {
  return <Loader className="size-8 animate-spin" />;
};

export default loading;
