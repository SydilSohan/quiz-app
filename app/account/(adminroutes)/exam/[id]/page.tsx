import ExamPage from "@/app/exam/[id]/page";
import React from "react";

type Props = {
  params: {
    id: string;
  };
};

const page = ({ params }: Props) => {
  return <ExamPage params={params}></ExamPage>;
};

export default page;
