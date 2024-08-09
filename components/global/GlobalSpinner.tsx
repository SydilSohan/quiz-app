import { LoaderCircle } from "lucide-react";
import React from "react";

type Props = {};

const Spinner = (props: Props) => {
  return (
    <div className="w-full flex items-center justify-center h-full">
      <LoaderCircle className="animate-spin" size={40} strokeWidth={0.8} />
    </div>
  );
};

export default Spinner;
