"use client";
import React from "react";

type Props = {
  error: Error;
};

const error = ({ error }: Props) => {
  return <div>{error.message}</div>;
};

export default error;
