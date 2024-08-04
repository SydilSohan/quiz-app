import { LoaderCircle } from "lucide-react";
import React from "react";

type Props = {};

const Spinner = (props: Props) => {
  return <LoaderCircle className="animate-spin " strokeWidth={0.8} />;
};

export default Spinner;
