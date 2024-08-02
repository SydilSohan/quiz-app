"use client";
import React from "react";
import Image, { ImageProps } from "next/image";
import { DotIcon, Loader } from "lucide-react";
type Props = {
  src: string;
  height: number;
  width: number;
  alt?: string;
  props: ImageProps;
};

const LoaderImage = ({ src, height, width, alt, ...props }: Props) => {
  const [loading, setLoading] = React.useState(true);
  return (
    <div
      style={{
        width: width,
        height: height,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {loading ? (
        <Loader className="animate-spin size-5" />
      ) : (
        <Image
          onLoadingComplete={() => setLoading(false)}
          onLoad={() => setLoading(false)}
          src={src}
          height={height}
          width={width}
          alt={alt ?? ""}
          {...props}
        />
      )}
    </div>
  );
};

export default LoaderImage;
