import React from "react";

type Props = {
  children: React.ReactNode;
  submission: React.ReactNode;
};

const SubmissionsLayout = ({ children, submission }: Props) => {
  return (
    <div className="flex flex-col gap-2 p-4 lg:gap-2 ">
      {children}

      {submission}
    </div>
  );
};

export default SubmissionsLayout;
