import Modal from "@/components/global/Modal";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const layout = ({ children }: Props) => {
  return <Modal>{children}</Modal>;
};

export default layout;
