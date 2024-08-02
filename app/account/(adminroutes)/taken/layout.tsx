import React from "react";

type Props = {
  children: React.ReactNode;
  table: React.ReactNode;
  submission: React.ReactNode;
};

const SubmissionsLayout = ({ children, table, submission }: Props) => {
  return (
    <div className="flex flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="grid grid-cols-5 gap-6">
        {children}

        {submission}
      </div>
    </div>
  );
};

export default SubmissionsLayout;
