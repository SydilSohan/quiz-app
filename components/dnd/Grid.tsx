import { useMediaQuery } from "@/hooks/useMediaQuery";
import React from "react";

export function Grid({
  children,
  columns,
}: {
  children: React.ReactNode;
  columns: number;
}) {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  return (
    <div
      className={`grid  grid-cols-2 md:grid-cols-5  gap-4 `}
      // style={{
      //   display: "grid",
      //   gridTemplateColumns: isDesktop
      //     ? `repeat(${columns}, 1fr)`
      //     : `repeat(2}, 1fr)`,
      //   gridGap: isDesktop ? 20 : 10,
      // }}
    >
      {children}
    </div>
  );
}
