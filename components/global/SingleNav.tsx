"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
type Props = {
  item: {
    label: string;
    href: string;
    icon: JSX.Element;
  };
};
const SingleNav = ({ item }: Props) => {
  const pathName = usePathname();
  return (
    <Link
      href={item.href}
      className={
        `flex items-center gap-2 rounded-lg text-sm capitalize transition-all hover:text-primary px-4 py-2 ` +
        (pathName === item.href ? "text-black bg-green-100" : "text-gray-500")
      }
    >
      {item.icon}
      {item.label}
    </Link>
  );
};

export default SingleNav;
