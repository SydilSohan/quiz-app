import { DotIcon, Loader } from 'lucide-react';
import React from 'react';

type Props = {};

const loading = (props: Props) => {
  return (
    <div className="mx-auto mt-[20%] min-h-screen items-center justify-center">
      <Loader className="size-8 animate-spin" />
    </div>
  );
};

export default loading;
