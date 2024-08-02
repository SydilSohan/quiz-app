export default function contentfulLoader({ src, quality, height, width } : {
    src: string;
    quality: number;
    height: number;
    width: number;
    
}) {
  const url = new URL(`https:${src}`);
  url.searchParams.set("fm", "webp");
  url.searchParams.set("q", (quality || 75).toString());
  url.searchParams.set("h", (height || 200).toString());
  url.searchParams.set("w", (width || 300).toString());
  return url.href;
}