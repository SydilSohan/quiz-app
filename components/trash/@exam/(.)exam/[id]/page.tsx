import ExamPage from "@/app/quizzes/[id]/page";
import React from "react";

type Props = {
  params: {
    id: string;
  };
};

const page = ({ params }: Props) => {
  return <ExamPage params={params} />;
};

export default page;
